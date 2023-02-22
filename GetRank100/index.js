module.exports = async (context, req) => {
  try {
    const rankingDB = context.bindings.inputSoloMatchesRanking
    const result = []
    const seen = new Set()

    for (const item of rankingDB) {
      const key = item.userId

      if (!seen.has(key)) {
        result.push(item)
        seen.add(key)
      }
    }

    const ranking = result.map((pos, index) => ({
      ...pos,
      rank: index + 1
    }))

    const rankingSpliced = ranking.splice(0, 1000)
    rankingSpliced.forEach((pos, index, arr) => {
      // Ofuscate time data for top 20 players:
      if (index < 20) arr[index].time = 'QUALIFIED'
    })

    return {
      status: 200,
      body: {
        status: 200,
        ranking: rankingSpliced
      }
    }
  } catch(error) {
    context.log('GetRank100', 'ERROR', error)
    return {
      status: 500
    }
  }
}