const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const api = require("../utils/api")
const factoryContainer = require("../utils/factoryContainer")
const getCookie = require("../utils/getCookie")

dayjs.extend(utc)

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie

    if (!cookies) throw new Error('Invalid token') 

    const token = getCookie(cookies, 'discordToken')
    const {user: {id}} = await api.getUserByDiscordToken(token)    

    const {containerLog, pointsForRaces} = context.bindings.inputActiveQuest[0]
  
    const today = dayjs().utc()
    const container = await factoryContainer('cyberskies', containerLog)
    container.items.create({
      userId: id,
      value: pointsForRaces,
      timeFormat: today.format(),
      time: today.unix()
    })
  
    return {
      status: 200,
      body: {
        status: 200,
        id,
        timeFormat: today.format(),
        time: today.unix()
      }
    }
  } catch(error) {
    console.log('AddPointsQuest', 'ERROR', error)
    return {
      status: 500
    }
  }
}