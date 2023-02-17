const { request } = require('undici')

const {
  DISCORD_API_URL,
  DISCORD_BOT_TOKEN,
  ID_SERVER_DISCORD
} = process.env

const getGuildRoles = async () => {
  try {
    const headers = {
      Authorization: `Bot ${DISCORD_BOT_TOKEN}`
    }
    const response = await request(`${DISCORD_API_URL}/guilds/${ID_SERVER_DISCORD}/roles`, {headers})
    const body = await response.body.json()

    return body
  } catch (error) {
    console.log('getGuildRoles', 'ERROR', error)
    return false
  }
}

module.exports = getGuildRoles