const { request } = require('undici')

const {
  DISCORD_API_URL,
  ID_SERVER_DISCORD
} = process.env

const getRolesCurrentUser = async (tokenType, token) => {
  try {
    const response = await request(`${DISCORD_API_URL}/users/@me/guilds/${ID_SERVER_DISCORD}/member`, {
      headers: {
        Authorization: `${tokenType} ${token}`
      }
    })
    const {roles} = await response.body.json()

    return roles
  } catch (error) {
    context.log('getRolesCurrentUser', 'ERROR', error)
    return false
  }
}


module.exports = getRolesCurrentUser
