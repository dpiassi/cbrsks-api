module.exports = async (context, req) => {
  try {
    const rankingDB = context.bindings.inputSoloMatchesRanking
    const result = []
    const seen = new Set()

    console.log('amount races', rankingDB.length)

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

    return {
      status: 200,
      body: {
        status: 200,
        total: ranking.length
      }
    }
  } catch (error) {
    context.log('GetTotalUsersWhoPlayed', 'ERROR', error)
    return {
      status: 500
    }
  }
}