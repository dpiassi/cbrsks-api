const api = require('../utils/api')
const getCookie = require('../utils/getCookie')
const factoryContainer = require('../utils/factoryContainer')

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie

    if (!cookies) throw new Error('Invalid token')

    const token = getCookie(cookies, 'discordToken')
    const {user: {id}} = await api.getUserByDiscordToken(token)
    const {containerLog} = context.bindings.inputActiveQuest[0]
    const container = await factoryContainer('cyberskies', containerLog)
    const query = `SELECT * FROM c WHERE c.userId='${id}'`
    const {resources} = await container.items.query(query).fetchAll()

    const total = resources.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)

    return {
      status: 200,
      body: {
        status: 200,
        total
      }
    }
  } catch(error) {
    context.log('GetPointQuest', 'ERROR', error)
    return {
      status: 500
    }
  }

}