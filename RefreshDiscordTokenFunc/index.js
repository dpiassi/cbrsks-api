const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const discordApi = require("../utils/discordApi")

dayjs.extend(utc)

module.exports = async (context, req) => {
  try {
    const user = context.bindings.inputUsers[0]
    
    if (!user) throw new Error('Not found user')
  
    const authData = await discordApi.refreshToken(user.discord.refreshToken)
    const discordUser = await discordApi.getCurrentUser(authData)

    if (!authData || !discordUser) throw new Error('Token invalid')

    context.bindings.outputUsers = {
      id: user?.id,
      discord: {
        id: discordUser.id,
        username: discordUser.username,
        discriminator: discordUser.discriminator,
        avatar: discordUser.avatar,
        banner: discordUser.banner,
        bannerColor: discordUser.banner_color,
        accentColor: discordUser.accent_color,
        token: authData.access_token,
        refreshToken: authData.refresh_token,
        scope: authData.scope,
        userCreate: user?.discord?.userCreate || dayjs().utc().format(),
        lastLogin: user?.discord?.lastLogin || dayjs().utc().format(),
        lastInteraction: dayjs().utc().format()
      },
      admin: user?.admin || false,
      userCreate: user?.userCreate || dayjs().utc().format()
    }
  
    return {
      status: 200,
      body: {
        authData
      }
    }
  } catch(error) {
    context.log('RefreshDiscordTokenFunc', 'ERROR', error)

    return {
      status: 500
    }
  }
}