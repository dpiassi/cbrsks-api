const api = require("../utils/api")
const discordApi = require("../utils/discordApi")
const getCookie = require("../utils/getCookie")

const {ID_ROLE_TO_SHOW_ROOMS} = process.env

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie || false
  
    if (!cookies) throw new Error('Invalid token')

    const token = getCookie(cookies, 'discordToken')  
    const {user} = await api.getUserByDiscordToken(token)
    const userOnGuild = await discordApi.getCurrentUserOnGuild(user?.discord?.id)
    const isGuild = userOnGuild?.user?.id
    const hasRole = userOnGuild.roles.includes(ID_ROLE_TO_SHOW_ROOMS)

    if (!isGuild) throw new Error(`Doesn't has id`)
    if (!hasRole) throw new Error(`Doesn't has role to show rooms`)

    return {
      status: 200,
      body: {
        status: 200,
        check: !!isGuild && !!hasRole
      }
    }
  } catch(error) {
    context.log('GetCurrentUserGuilds', 'ERROR', error)
    return {
      status: 500
    }
  }
}