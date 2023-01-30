const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const api = require("../utils/api")
const getCookie = require("../utils/getCookie")

dayjs.extend(utc)

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false

    if (!cookies) throw new Error('Invalid token')

    const token = cookies && getCookie(cookies, 'discordToken')
  
    const { authData } = await api.refreshDiscordToken(token)
    const {user: userDB} = await api.getUserByDiscordToken(authData.access_token)
    
    const data = {
      userId: userDB.id,
      start: dayjs().utc().format(),
      finished: false
    }

    context.bindings.outpuSoloMatchs = data
  
    return {
      status: 200
    }
  } catch(error) {
    context.log('StartSoloMatch', 'ERROR', error)
    return {
      status: 500
    }
  }
  
}