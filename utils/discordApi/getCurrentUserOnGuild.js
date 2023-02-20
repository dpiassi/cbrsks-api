const { request } = require('undici')

const {
  DISCORD_API_URL,
  ID_SERVER_DISCORD,
  DISCORD_BOT_TOKEN
} = process.env

const getCurrentUserOnGuild = async (userId) => {
  try {
    const response = await request(`${DISCORD_API_URL}/guilds/${ID_SERVER_DISCORD}/members/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`
      }
    })
    const data = await response.body.json()

    return data
  } catch(error) {
    console.log('addRole', 'ERROR', error)
    return false
  }
}

module.exports = getCurrentUserOnGuild