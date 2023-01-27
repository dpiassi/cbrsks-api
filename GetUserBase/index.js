const api = require('../utils/api')
const getCookie = require('../utils/getCookie')

const {URL_BASE_DISCORD_AVATAR} = process.env

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false
    const token = cookies && getCookie(cookies, 'discordToken')
  
    const { authData } = await api.refreshDiscordToken(token)
    const {user: {discord: {id, avatar, username, discriminator}}} = await api.getUserByDiscordToken(authData.access_token)
    const urlAvatar = `${URL_BASE_DISCORD_AVATAR}/${id}/${avatar}`
    const {corporation} = await api.getCorporationCurrentUser(authData.token_type, authData.access_token)
  
    return {
        status: 200,
        body: {
          status: 200,
          username,
          discriminator,
          avatar: urlAvatar,
          corporation: corporation?.name || ''
        },
        cookies: [{
          name: 'discordTokenType',
          value: `${authData.token_type}`,
          path: '/',
          sameSite: 'Strict',
          secure: true,
          httpOnly: true,
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
    context.log('GetUserBase', 'ERROR', error)
    return {
      status: 500,
      body: {
        error
      }
    }
  }
}