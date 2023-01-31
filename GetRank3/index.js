module.exports = async (context, req) => {
  try {
    const ranking = context.bindings.inputSoloMatchesRanking
  
    return {
      status: 200,
      body: {
        status: 200,
        ranking
      }
    }
  } catch(error) {
    context.log('GetRank100', 'ERROR', error)
    return {
      status: 500
    }
  }
}