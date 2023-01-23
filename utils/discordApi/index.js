const getCurrentUser = require('./getCurrentUser')
const getToken = require('./getToken')
const refreshToken = require('./refreshToken')

const discordApi = {
  getCurrentUser,
  getToken,
  refreshToken
}

module.exports = discordApi