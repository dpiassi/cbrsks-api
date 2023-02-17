const getCookie = require('../utils/getCookie')
const discordApi = require('../utils/discordApi')

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false

    if (!cookies) throw new Error('Invalid token')

    const tokenType = getCookie(cookies, 'discordTokenType')
    const token = getCookie(cookies, 'discordToken')

    const roles = await discordApi.getGuildRoles()

    if (!roles) throw new Error(`Has no roles`)

    const collectionsRoles = roles.filter((role) => role.name.startsWith('#')).map(({id, name}) => ({[id]: name}))
    const collectionsRolesIds = collectionsRoles.map((role) => Object.keys(role)[0])
    const userRoles = await discordApi.getRolesCurrentUser(tokenType, token)
    const userCollectionsRolesIds = userRoles.filter((role) => collectionsRolesIds.includes(role))
    const userCollectionsRolesNames =  userCollectionsRolesIds.map((id) => Object.values(collectionsRoles.find((role) => role[id]))[0])

    return {
      status: 200,
      body: {
        status: 200,
        collections: userCollectionsRolesNames
      }
    }
  } catch(error) {
    context.log('GetCurrentUsersCollectionNft', 'ERROR', error)
    return {
      status: 500
    }
  }
}