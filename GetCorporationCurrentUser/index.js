const discordApi = require('../utils/discordApi')
const getCookie = require('../utils/getCookie')
const corporationRoles = require('./corporationRoles')

module.exports = async function (context, req) {
  try {
    const cookies = req.headers.cookie || false

    if (!cookies) throw new Error('Invalid token')

    const tokenType = getCookie(cookies, 'discordTokenType')
    const token = getCookie(cookies, 'discordToken')
    const currentUserDiscordRoleIds = await discordApi.getRolesCurrentUser(tokenType, token)

    const corporation = corporationRoles.find((comporation) => (
      currentUserDiscordRoleIds.find((discordRoleId) => discordRoleId === comporation.discordRoleId)
    ))

    return {
      status: 200,
      body: {
        corporation
      }
    }
  } catch(error) {
    context.log('GetCorporationCurrentUser', 'ERROR', error)
    return {
      status: 500
    }
  }
  
}