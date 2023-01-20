const { request } = require('undici')

const {
  DISCORD_API_URL,
  DISCORD_CLIENT_ID,
  DISCORD_SECRETY_ID,
  DISCORD_REDIRECT_URI,
  DISCORD_SCOPE,
  APP_URL
} = process.env

module.exports = async (context, req) => {
  const { code } = req.query

  if (code) {
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

      console.log('authData', authData)

      if (authData.error) throw authData

      return {
        status: 302,
        headers: {
          location: '/game'
        },
        cookies: [{
          name: 'discordTokenType',
          value: `${authData.token_type}`,
          path: '/',
          sameSite: 'Strict',
          secure: true,
          httpOnly: true
        },
        {
          name: 'discordToken',
          value: `${authData.access_token}`,
          path: '/',
          sameSite: 'Strict',
          secure: true,
          httpOnly: true
        }]
      }
    } catch (error) {
      context.log(`ERROR - AuthDiscord - ${error}`)

      return {
        status: 302,
        headers: {
          location: '/'
        }
      }
    }
  }

  context.log('ERROR - AuthDiscord - No code')
  return {
    status: 302,
    headers: {
      location: '/'
    }
  }
}