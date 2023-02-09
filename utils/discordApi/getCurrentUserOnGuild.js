const { request } = require('undici')

const {
  DISCORD_API_URL,
  ID_SERVER_DISCORD
} = process.env

const getCurrentUserOnGuild = async (tokenType, token) => {
  
  try {
    const response = await request(`${DISCORD_API_URL}/users/@me/guilds/${ID_SERVER_DISCORD}/member`, {
      headers: {
        Authorization: `${tokenType} ${token}`
      }
    })
    const body = await response.body.json()

    return body
  } catch (error) {
    context.log('getCurrentUserGuild', 'ERROR', error)
    return false
  }
}

module.exports = getCurrentUserOnGuild