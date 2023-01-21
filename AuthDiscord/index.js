const { request } = require('undici')
const api = require('../utils/api.js')

const {
  DISCORD_API_URL,
  DISCORD_CLIENT_ID,
  DISCORD_SECRETY_ID,
  DISCORD_REDIRECT_URI,
  DISCORD_SCOPE
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

      if (authData.error) throw new Error('Error with Discord redirec')

      const userResponse = await request(`${DISCORD_API_URL}/users/@me`, {
        headers: {
          Authorization: `${authData.token_type} ${authData.access_token}`
        }
      })
      const user = await userResponse.body.json()
      const userDB = await api.getUserByDiscordId(user.id)
  
      context.bindings.outputUsers = {
        id: userDB.user?.id,
        discord: {
          id: user.id,
          username: user.username,
          discriminator: user.discriminator,
          avatar: user.avatar,
          banner: user.banner,
          bannerColor: user.banner_color,
          accentColor: user.accent_color,
          token: authData.access_token,
          refreshToken: authData.refresh_token,
          scope: authData.scope
        }
      }

      context.log('SUCCESS - AuthDiscord', user)

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