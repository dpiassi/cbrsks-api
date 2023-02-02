const { Client, Events, GatewayIntentBits } = require('discord.js')
const getCookies = require('../utils/getCookie')
const api = require('../utils/api')
const discordApi = require('../utils/discordApi')

const {ID_SERVER_DISCORD} = process.env

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie
    const {roleId} = req.body

    if (!cookies) throw new Error('Invalid token')

    const token = getCookies(cookies, 'discordToken')
    const guildId = ID_SERVER_DISCORD
    const {user: {discord: {id: userId}}} = await api.getUserByDiscordToken(token)
    await discordApi.addRole({guildId, userId, roleId: String(roleId)})

    return {
      status: 200,
      body: {
        roleId
      }
    }
  } catch(error) {
    context.log('AddDiscordRole', 'ERROR', error)
    return {
      status: 500
    }
  }
}