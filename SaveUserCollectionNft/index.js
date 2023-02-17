const api = require('../utils/api')
const getCookie = require('../utils/getCookie')

module.exports = async (context, req) => {
  try {
    
    const cookies = req.headers.cookie

    if (!cookies) throw new Error('Invalid token')

    const token = getCookie(cookies, 'discordToken')
    const {user} = await api.getUserByDiscordToken(token)
    const updateUser = {
      ...user,
      collection: 'GueioNFT'
    }

    context.bindings.outputUser = updateUser

    return {
      status: 200,
      body: {
        status: 200,
        body: req.body
      }
    }
  } catch(error) {
    context.log('SaveUserCollectionsNft', 'ERROR', error)
    return {
      status: 500
    }
  } 
}