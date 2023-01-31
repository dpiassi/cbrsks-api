module.exports = async (context, req) => {
  const ranking = context.bindings.inputSoloMatchesRanking

  return {
    status: 200,
    body: {
      status: 200,
      ranking
    }
  }
}