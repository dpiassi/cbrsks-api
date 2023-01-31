module.exports = async function (context, req) {
  try {
    const soloMatch = context.bindings.inputSoloMatchs[0]

    if (!soloMatch) throw new Error('No matches') 
  
    return {
      status: 200,
      body: {
        status: 200,
        soloMatch
      }
    }
  } catch(error) {
    context.log('GetUserSoloMathCurrent', 'ERROR', error)
    return {
      status: 500
    }
  }
}