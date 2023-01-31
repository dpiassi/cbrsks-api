const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const api = require("../utils/api")
const getCookie = require("../utils/getCookie")

dayjs.extend(utc)
const {URL_BASE_DISCORD_AVATAR} = process.env

const padStart0 = (val) => val.toString().padStart(2, '0')
const timeToFormat = (diffInMs) => {
		const diffInSecond = diffInMs / 1000
		const minutes = Math.floor(diffInSecond / 60)
		const seconds = Math.floor(diffInSecond % 60)
		const ms = Math.floor(diffInMs % 1000)

		return `${padStart0(minutes)}:${padStart0(seconds)}.${ms}`
}

module.exports = async function (context, req) {
	try {
		const cookies = req.headers.cookie || false
	
		if (!cookies) throw new Error('Invalid token')

		const token = cookies && getCookie(cookies, 'discordToken')
		const tokenType = cookies && getCookie(cookies, 'discordTokenType')
		const {user} = await api.getUserByDiscordToken(token)
		const {corporation} = await api.getCorporationCurrentUser(tokenType, token)
		const avatarPlaceholder = 'https://cbrsks-unity.s3.amazonaws.com/images/avatars/placeholder.png'
		const avatar = user.discord.avatar ? `${URL_BASE_DISCORD_AVATAR}/${user.discord.id}/${user.discord.avatar}` : avatarPlaceholder
		const {soloMatch} = await api.getUserSoloMatchCurrent(user.id)

		if (!soloMatch) throw new Error ('No matches')
		if (soloMatch.finished) throw new Error('Finished match')

		const end = dayjs().utc()

		const updateSoloMatch = {
			...soloMatch, 
			finished: true, 
			end: end.unix(),
			endFormat: end.format()
		}

		const start = dayjs(updateSoloMatch.startFormat).utc();
		const timeMs = end.valueOf() - start.valueOf()
		const timeFormat = timeToFormat(timeMs)
		const dataRanking = {
			timeMs,
			time: timeFormat,
			username: user.discord.username,
			discriminator: user.discord.discriminator,
			corporation: {
				name: corporation?.name || '',
				logo: corporation?.logo || ''
			},
			avatar
		}

		context.bindings.outputSoloMatchs = updateSoloMatch
		context.bindings.outputSoloMatchRanking = dataRanking

		return {
			status: 200
		}
	} catch(error) {
		context.log('EndSoloMatch', 'ERROR', error)
		return {
			status: 500
		}
	}
}