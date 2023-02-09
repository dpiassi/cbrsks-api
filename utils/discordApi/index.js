const getCurrentUser = require('./getCurrentUser')
const getToken = require('./getToken')
const refreshToken = require('./refreshToken')
const getRolesCurrentUser = require('./getRolesCurrentUser')
const addRole = require('./addRole')
const getCurrentUserOnGuild = require('./getCurrentUserOnGuild')

const discordApi = {
  getCurrentUser,
  getToken,
  refreshToken,
  getRolesCurrentUser,
  addRole,
  getCurrentUserOnGuild
}

module.exports = discordApi