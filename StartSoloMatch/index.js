const dayjs = require('dayjs')
const api = require("../utils/api")
const getCookie = require("../utils/getCookie")

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false

    if (!cookies) throw new Error('Invalid token')

    const token = cookies && getCookie(cookies, 'discordToken')
  
    const { authData } = await api.refreshDiscordToken(token)
    const {user: userDB} = await api.getUserByDiscordToken(authData.access_token)
    
    const date = dayjs().utc()

    const data = {
      userId: userDB.id,
      start: date.unix(),
      startFormat: date.format(),
      finished: false
    }

    context.bindings.outpuSoloMatchs = data
  
    return {
      status: 200,
      data
    }
  } catch(error) {
    context.log('StartSoloMatch', 'ERROR', error)
    return {
      status: 500
    }
  }
  
}