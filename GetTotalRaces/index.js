module.exports = async (context, req) => {
  try {
    const total = context.bindings.inputSoloMatchesRanking[0]["$1"]
  
    return {
      status: 200,
      body: {
        status: 200,
        total
      }
    }
  } catch(error) {
    context.log('GetTotalRaces', 'ERROR', error)
    return {
      status: 500
    }
  }
}