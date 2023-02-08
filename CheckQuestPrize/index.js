const api = require("../utils/api")
const discordApi = require("../utils/discordApi")
const getCookie = require("../utils/getCookie")

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false

    if (!cookies) throw new Error('Invalid token')

    const tokenType = getCookie(cookies, 'discordTokenType')
    const token = getCookie(cookies, 'discordToken')
    const {quest: {discordRolesIds}} = await api.getActiveQuest()
    const currentUserDiscordRoleIds = await discordApi.getRolesCurrentUser(tokenType, token)
    
    if (!currentUserDiscordRoleIds) throw new Error(`Erro with Discord API`)

    const hasPrize = !discordRolesIds.map( id => currentUserDiscordRoleIds.includes(id)).some((bool) => bool === false)

    if (!hasPrize) throw new Error(`Doens't have prize`)

    return {
      status: 200,
      body: {
        hasPrize
      }
    }
  } catch(error) {
    context.log('CheckQuestPrize', 'ERROR', error)
    return {
      status: 500
    }
  }  
}