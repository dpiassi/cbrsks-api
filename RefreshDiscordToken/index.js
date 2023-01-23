const getCookies = require('../utils/getCookie')

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false
    const token = cookies && getCookies(cookies, 'discordToken')

    return {
      status: 200,
      body: {
        token
      }
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