const qualifiedPlayersRanking = require('../utils/qualifiedPlayersRanking')

module.exports = async (context, req) => {
  try {
    const rankingDB = context.bindings.inputSoloMatchesRanking
    const result = []
    const seen = new Set()

    const injectQualifiedPlayers = () => {
      result.push(...qualifiedPlayersRanking)
      result.forEach((pos) => seen.add(pos.userId))
    }
    injectQualifiedPlayers()


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

    // const ofuscateTop20 = (pos, index, arr) => {
    //   if (index < 20) arr[index].time = 'QUALIFIED'
    // }
    // rankingSpliced.forEach(ofuscateTop20)

    return {
      status: 200,
      body: {
        status: 200,
        ranking: rankingSpliced
      }
    }
  } catch (error) {
    context.log('GetRank100', 'ERROR', error)
    return {
      status: 500
    }
  }
}