module.exports = async (context, req) => {
  try {
    const user = context.bindings.inputUsers[0]
  
    context.log('GetUserByDiscordId', 'SUCCESSS', user)
    return {
      status: 200,
      body: {
        user
      }
    }
  } catch(error) {
    context.log('GetUserByDiscordId', 'ERROR', error)
    return {
      status: 400,
      body: {
        msg: 'User not found'
      }
    }
  }
}
