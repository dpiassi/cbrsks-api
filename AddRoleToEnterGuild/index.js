const api = require('../utils/api') 

const {ID_ROLE_TO_SHOW_ROOMS} = process.env

module.exports = async (context, req) => {
  try {
		const cookies = req.headers.cookie || false

    if (!cookies) throw new Error('Invalid token')
		
    const token = getCookie(cookies, 'discordToken')
		await api.addDiscordRole(token, ID_ROLE_TO_SHOW_ROOMS)

		return {
			status: 200
		}
	} catch(error) {
		context.log('AddRoleToEnterGuild', 'ERROR', error)
		return {
			status: 500
		}
	}
}