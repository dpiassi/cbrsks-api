const { request } = require('undici')

const {API_URL, KEY_GET_USER_BY_DISCORD_ID} = process.env

const api = {
  getUserByDiscordId: async (id =  false) => {
    try {
      const userDBResponse = await request(`${API_URL}/users/discord/${id}?code=${KEY_GET_USER_BY_DISCORD_ID}`)
      const userDB = await userDBResponse.body.json()
  
      return userDB
    } catch(error) {
      return false
    }
  },
  refreshDiscordToken: async (token) => {
    try {
      const reponse = await request(`${API_URL}/auth/discord/refresh/${token}`)
      const newToken = await reponse.body.json()

      return newToken
    } catch(error) {
      return false
    }
  }
}

module.exports = api