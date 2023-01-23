const { ModalSubmitFields } = require('discord.js')
const { request } = require('undici')

const {
  DISCORD_API_URL
} = process.env

const getCurrentUser = async (authData) => {
  try {
    const userResponse = await request(`${DISCORD_API_URL}/users/@me`, {
      headers: {
        Authorization: `${authData.token_type} ${authData.access_token}`
      }
    })
    const user = await userResponse.body.json()

    return user
  } catch(error) {
    return false
  }
}

module.exports = getCurrentUser