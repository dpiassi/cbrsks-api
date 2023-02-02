const { request } = require('undici')

const {API_URL, KEY_GET_USER_BY_DISCORD_ID, KEY_ADD_ROLE} = process.env

const api = {
  getUserSoloMatchCurrent: async (id) => {
    try {
      const soloMatchResponse = await request(`${API_URL}/match/solo/current/user/${id}`)
      const soloMatchs = await soloMatchResponse.body.json()

      return soloMatchs
    } catch(error) {
      return false
    }
  },
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
      const response = await request(`${API_URL}/auth/discord/refresh/${token}`)
      const authData = await response.body.json()

      return authData
    } catch(error) {
      return false
    }
  },
  getUserByDiscordToken: async (token) => {
    try {
      const response = await request(`${API_URL}/user/discord/${token}`)
      const user = await response.body.json()

      return user
    } catch(error) {
      return false
    }
  },
  getCorporationCurrentUser: async (tokenType, token) => {
    try {
      const headers = { 'Cookie': `discordTokenType=${tokenType};discordToken=${token}` }
      const response = await request(`${API_URL}/user/corporation`, {
        headers
      })
      const corporation = await response.body.json()

      return corporation
    } catch(error) {
      console.log('getCorporationCurrentUser', 'ERROR', error)
      return false
    }
  },
  addDiscordRole: async (token, roleId) => {
    try {
      const headers = { 'Cookie': `discordToken=${token}` }
      const data = {
        roleId
      }
      await request(`${API_URL}/discord/role?code=${KEY_ADD_ROLE}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      })

      return true
    } catch(error) {
      console.log('getDiscordRole', 'ERROR', error)
      return false
    }
  }
}

module.exports = api