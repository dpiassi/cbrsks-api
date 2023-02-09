const discordApi = require("../utils/discordApi")
const getCookie = require("../utils/getCookie")

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false
  
    if (!cookies) throw new Error('Invalid token')
  
    const tokenType = getCookie(cookies, 'discordTokenType')
    const token = getCookie(cookies, 'discordToken')
  
    const {user: {id}} = await discordApi.getCurrentUserOnGuild(tokenType, token)

    if (!id) throw new Error('') 

    return {
      status: 200,
      body: {
        status: 200,
        check: !!id
      }
    }
  } catch(error) {
    context.log('GetCurrentUserGuilds', 'ERROR', error)
    return {
      status: 500
    }
  }
}