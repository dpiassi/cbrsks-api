const {request} = require('undici')

const {
  DISCORD_API_URL,
  DISCORD_CLIENT_ID,
  DISCORD_SECRETY_ID
} = process.env

const refreshToken = async (refreshToken) => {
  try {
    const config = {
      method: 'POST',
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_SECRETY_ID,
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const response = await request(`${DISCORD_API_URL}/oauth2/token`, config)
    const authData = await response.body.json()
  
    return authData
  } catch(error) {
    return false
  }
}

module.exports = refreshToken