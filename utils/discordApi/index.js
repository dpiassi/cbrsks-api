const getCurrentUser = require('./getCurrentUser')
const getToken = require('./getToken')
const refreshToken = require('./refreshToken')
const getRolesCurrentUser = require('./getRolesCurrentUser')
const addRole = require('./addRole')

const discordApi = {
  getCurrentUser,
  getToken,
  refreshToken,
  getRolesCurrentUser,
  addRole
}

module.exports = discordApi