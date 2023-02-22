const { checkIfUserOnGuild } = require('../utils/api')
const api = require('../utils/api')
const getCookie = require('../utils/getCookie')

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false

    if (!cookies) throw new Error('Invalid token')
    const token = getCookie(cookies, 'discordToken')

    const {user} = await api.getUserByDiscordToken(token)

    if (!user) throw new Error(`Doesn't have user`)
    
    return {
      status: 200,
      body: {
        status: 200,
        hasCollection: !!user?.collection    
      }
    }
  } catch(error) {
    context.log('CheckIfUserHasCollection', 'ERROR', error)
    return {
      status: 500
    }
  }

}