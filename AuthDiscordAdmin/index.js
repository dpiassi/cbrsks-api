const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const api = require('../utils/api')
const discordApi = require('../utils/discordApi')

dayjs.extend(utc)

module.exports = async (context, req) => {
  const { code } = req.query

  if (code) {
    try {
      const authData = await discordApi.getToken(code, true)
      const user = await discordApi.getCurrentUser(authData)
      const userDB = await api.getUserByDiscordId(user.id)

      if (!userDB.user?.id || !userDB.user?.admin) throw new Error('Not authorized')
  
      context.bindings.outputUsers = {
        id: userDB.user.id,
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
          scope: authData.scope,
          userCreate: userDB.user?.discord?.userCreate || dayjs().utc().format(),
          lastLogin: dayjs().utc().format(),
          lastInteraction: dayjs().utc().format(),
        },
        admin: userDB.user.admin,
        userCreate: userDB.user?.userCreate || dayjs().utc().format()
      }

      context.log('SUCCESS - AuthDiscordAdmin', user)

      return {
        status: 302,
        headers: {
          location: '/admin/dashboard'
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
      context.log('AuthDiscordAdmin', 'ERROR', error)

      return {
        status: 302,
        headers: {
          location: '/admin'
        }
      }
    }
  }

  context.log('AuthDiscord ERROR No code')
  return {
    status: 302,
    headers: {
      location: '/admin'
    }
  }
}