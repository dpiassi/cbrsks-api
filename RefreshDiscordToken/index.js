const api = require('../utils/api')
const getCookies = require('../utils/getCookie')

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false

    if(!cookies) throw new Error('Invalid token')

    const token = cookies && getCookies(cookies, 'discordToken')
    const {authData} = await api.refreshDiscordToken(token)

    return {
      status: 200,
      body: {
        status: 200,
        discordToken: authData.access_token
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
  } catch(error) {
    context.log('RefreshDiscordToken', 'ERROR', error)

    return {
      status: 500,
      body: {
        error
      }
    }
  }
}