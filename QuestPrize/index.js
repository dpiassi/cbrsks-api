const api = require("../utils/api")
const factoryContainer = require("../utils/factoryContainer")
const getCookie = require("../utils/getCookie")

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie
  
    if (!cookies) throw new Error('Invalid token') 
  
    const token = getCookie(cookies, 'discordToken')
    const total = await api.getPointQuest(token)
    const {quest: {goal, discordRolesIds}} = await api.getActiveQuest()
  
    if (!(total >= goal)) throw new Error(`Doesn't have points`)

    discordRolesIds.map(async (id) => {
      await api.addDiscordRole(token, id)
    })
  
    return {
      status: 200
    }
  } catch(error) {
    context.log('QuestPrize', 'ERROR', error)
    return {
      status: 500
    }
  }
}