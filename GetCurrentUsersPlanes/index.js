const discordApi = require('../utils/discordApi')
const getCookie = require('../utils/getCookie')
const planesRoles = require('./planesRoles')

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false

    if (!cookies) throw new Error('Invalid token')

    const tokenType = getCookie(cookies, 'discordTokenType')
    const token = getCookie(cookies, 'discordToken')
    const currentUserDiscordRoleIds = await discordApi.getRolesCurrentUser(tokenType, token) || []

    // function injectGrizzlythonBalrogBearAircraftForFree() {
    //   currentUserDiscordRoleIds.unshift('1083871592993529856')
    // }
    // injectGrizzlythonBalrogBearAircraftForFree()

    const planes = planesRoles.filter((plane) => {
      return (
        currentUserDiscordRoleIds.includes(plane.discordRoleId)
      )
    }).map((plane) => ({ ...plane.metadata }))

    return {
      status: 200,
      body: {
        status: 200,
        quantity: planes.length,
        planes
      }
    }
  } catch (error) {
    context.log('GetCurrentUsersPlanes', 'ERROR', error)
    return {
      status: 500
    }
  }
}