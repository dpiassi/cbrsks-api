const getCurrentUser = require('./getCurrentUser')
const getToken = require('./getToken')
const refreshToken = require('./refreshToken')
const getRolesCurrentUser = require('./getRolesCurrentUser')
const addRole = require('./addRole')
const getCurrentUserOnGuild = require('./getCurrentUserOnGuild')
const getGuilds = require('./getGuilds')

const discordApi = {
  getCurrentUser,
  getToken,
  refreshToken,
  getRolesCurrentUser,
  addRole,
  getCurrentUserOnGuild,
  getGuilds
}

module.exports = discordApi