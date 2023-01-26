const getCurrentUser = require('./getCurrentUser')
const getToken = require('./getToken')
const refreshToken = require('./refreshToken')
const getRolesCurrentUser = require('./getRolesCurrentUser')

const discordApi = {
  getCurrentUser,
  getToken,
  refreshToken,
  getRolesCurrentUser
}

module.exports = discordApi