const { request } = require('undici')

const {
  DISCORD_API_URL
} = process.env

const getGuild = async (authData) => {
  try {
    const headers = {
      headers: {
        Authorization: `${authData.token_type} ${authData.access_token}`
      }
    }
    const response = await request(`${DISCORD_API_URL}/users/@me/guilds`, headers)
    const body = await response.body.json()

    return body
  } catch (error) {
    context.log('getGuild', 'ERROR', error)
    return false
  }
}

module.exports = getGuild