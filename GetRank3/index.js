module.exports = async (context, req) => {
  try {
    const rankingDB = context.bindings.inputSoloMatchesRanking
    const result = []
    const seen = new Set()

    for (const item of rankingDB) {
      const key = item.username + item.discriminator

      if (!seen.has(key)) {
        result.push(item)
        seen.add(key)
      }
    }

    const ranking = result.map((pos, index) => ({
      ...pos,
      rank: index + 1
    }))

    const topPlayersRanking = ranking.splice(0, 3)
    topPlayersRanking.forEach((pos, index, arr) => {
      // Ofuscate all time data:
      arr[index].time = 'Qualified'
    })

    return {
      status: 200,
      body: {
        status: 200,
        ranking: topPlayersRanking
      }
    }
  } catch (error) {
    context.log('GetRank3', 'ERROR', error)
    return {
      status: 500
    }
  }
}