const {CosmosClient} = require("@azure/cosmos")

const {CosmoDB} = process.env

const factoryContainer = async (databaseName, containerName) =>{
  const client = new CosmosClient(CosmoDB)
  const {database} = await client.databases.createIfNotExists({id: databaseName})
  const {container} = await database.containers.createIfNotExists({id: containerName})

  return container
}

module.exports = factoryContainer