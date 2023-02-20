module.exports = async (context, req) => {
  try {
    const total = context.bindings.inputUsers[0]["$1"]
  
    return {
      status: 200,
      body: {
        status: 200,
        total
      }
    }
  } catch(error) {
    context.log('GetTotalUsers', 'ERROR', error)
    return {
      status: 500
    }
  }
}