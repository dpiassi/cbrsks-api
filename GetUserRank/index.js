const {CosmosClient} = require("@azure/cosmos")
const api = require("../utils/api")
const getCookie = require("../utils/getCookie")

const {CosmoDB} = process.env

module.exports = async (context, req) => {
  try {

    const cookies = req.headers.cookie || false
  
    if (!cookies) throw new Error('Invalid token')
  
    const client = new CosmosClient(CosmoDB)
    const {database} = await client.databases.createIfNotExists({id: 'cyberskies'})
    const {container} = await database.containers.createIfNotExists({id: 'soloMatchesRanking'})
  
    const token = getCookie(cookies, 'discordToken')
    const {user: {id}} = await api.getUserByDiscordToken(token)
    const query = `SELECT c.time, c.username, c.discriminator, c.corporation, c.avatar FROM c WHERE c.userId='${id}' ORDER BY c.timeMs OFFSET 0 LIMIT 1`
    const {resources} = await container.items.query(query).fetchAll()
  
    return {
      status: 200,
      body: {
        status: 200,
        ...resources[0]
      }
    }
  } catch(error) {
    context.log('GetUserRank', 'ERROR', errro)
    return {
      status: 500
    }
  }
}