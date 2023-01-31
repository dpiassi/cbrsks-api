module.exports = async (context, req) => {
  try {
    const ranking = context.bindings.inputSoloMatchesRanking.map((pos, index) => ({
      ...pos,
      rank: index + 1
    }))
    const result = []
    const seen = new Set()

    for (const item of ranking) {
      const key = item.username + item.discriminator

      if (!seen.has(key)) {
        result.push(item)
        seen.add(key)
      }
    }
  
    return {
      status: 200,
      body: {
        status: 200,
        ranking: result.splice(0, 3)
      }
    }
  } catch(error) {
    context.log('GetRank100', 'ERROR', error)
    return {
      status: 500
    }
  }
}