const api = require("../utils/api")
const getCookie = require("../utils/getCookie")

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie
  
    if (!cookies) throw new Error('Invalid token')
  
    const token = getCookie(cookies, 'discordToken')
    const {user} = await api.getUserByDiscordToken(token)
  
    if (!user.admin) throw new Error('Invalid token')
  
    return {
      status: 200,
      body: {
        status: 200,
        admin: user.admin
      }
    }
  } catch(error) {
    context.log('CheckAdmin', 'ERROR', error)
    return {
      status: 500
    }
  }
}