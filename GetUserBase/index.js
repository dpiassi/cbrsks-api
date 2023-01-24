const api = require('../utils/api')
const getCookie = require('../utils/getCookie')

const {URL_BASE_DISCORD_AVATAR} = process.env

module.exports = async (context, req) => {
  const cookies = req.headers.cookie || false
  const token = cookies && getCookie(cookies, 'discordToken')

  const { authData } = await api.refreshDiscordToken(token)
  const {user: {discord: {id, avatar, username, discriminator}}} = await api.getUserByDiscordToken(authData.access_token)
  const urlAvatar = `${URL_BASE_DISCORD_AVATAR}/${id}/${avatar}`

  return {
      status: 200,
      body: {
        status: 200,
        username,
        discriminator,
        avatar: urlAvatar,
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
}