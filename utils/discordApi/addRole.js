const {request} = require('undici')

const {
  DISCORD_API_URL,
  DISCORD_BOT_TOKEN,
  KEY_ADD_ROLE
} = process.env

const addRole = async ({guildId, userId, roleId}) => {
  try {
    const response = await request(`${DISCORD_API_URL}/guilds/${guildId}/members/${userId}/roles/${roleId}?code=${KEY_ADD_ROLE}`, {
      method: "PUT",
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`
      }
    })

    return response
  } catch(error) {
    console.log('addRole', 'ERROR', error)
    return false
  }
}

module.exports = addRole
