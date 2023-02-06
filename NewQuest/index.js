const api = require("../utils/api")
const factoryContainer = require("../utils/factoryContainer")
const getCookie = require("../utils/getCookie")

module.exports = async (context, req) => {
  try {
    const cookies = req.headers.cookie

    if (!cookies) throw new Error('Invalid token')

    const token = getCookie(cookies, 'discordToken')
    const {user: {admin}} = await api.getUserByDiscordToken(token)

    if (!admin) throw new Error('Invalid token')

    const quest = req.body

    if (
      !(
        typeof quest?.name === 'string' &&
        typeof quest?.startDate === 'number' &&
        typeof quest?.endDate === 'number' &&
        typeof quest?.labels?.button === 'string' &&
        typeof quest?.labels?.bar === 'string' &&
        typeof quest?.goal === 'number' &&
        typeof quest?.active === 'boolean'
      )
    ) throw new Error('Invalid body')

    const containerLogQuest = `quest${quest.name.trim().replace(/ /g, '')}`
    const container = await factoryContainer('cyberskies', containerLogQuest)
    const query = `SELECT * FROM c`
    const {resources} = await container.items.query(query).fetchAll()

    context.bindings.outputQuest = {
      ...quest,
      containerLog: containerLogQuest
    }
  
    return {
      status: 200,
      body: {
        status: 200,
        resources
      } 
    }
  } catch(error) {
    context.log('New Quest', 'ERROR', error)
    return {
      status: 500 
    }
  }

}