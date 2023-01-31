const factoryContainer = require("../utils/factoryContainer")

module.exports = async (context, req) => {
  try {
    const {amount} = context.bindingData

    if (!Number.isInteger(amount)) throw new Error('Not an integer')

    const container = await factoryContainer('cyberskies', 'soloMatchesRanking')
    const query = `SELECT * FROM c ORDER BY c.timeMs OFFSET 0 LIMIT ${amount}`
    const {resources} = await container.items.query(query).fetchAll()
  
    return {
      status: 200,
      body: {
        amount,
        resources
      }
    }
  } catch (error) {
    context.log('GetRanking', 'ERROR', error)
    return {
      status: 500
    }
  }
}