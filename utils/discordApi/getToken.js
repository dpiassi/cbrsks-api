const { request } = require('undici')

const {
  DISCORD_API_URL,
  DISCORD_CLIENT_ID,
  DISCORD_SECRETY_ID,
  DISCORD_REDIRECT_URI,
  DISCORD_SCOPE
} = process.env

const getToken = async (code) => {
  const config = {
    method: 'POST',
    body: new URLSearchParams({
      client_id: DISCORD_CLIENT_ID,
      client_secret: DISCORD_SECRETY_ID,
      code,
      grant_type: 'authorization_code',
      redirect_uri: DISCORD_REDIRECT_URI,
      scope: DISCORD_SCOPE
    }).toString(),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  try {
    const tokenResponseData = await request(`${DISCORD_API_URL}/oauth2/token`, config)
    const authData = await tokenResponseData.body.json()

    if (authData.error) throw new Error('Error with Discord redirec')

    return authData
  } catch(error) {
    return false
  }
}

module.exports = getToken