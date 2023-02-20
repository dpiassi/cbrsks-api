module.exports = async (context, req) => {
  try {
    const usersDb = context.bindings.inputUsers
    const users = usersDb.filter((user) => user.discord?.id)
  
    return {
      status: 200,
      body: {
        status: 200,
        users: users.length
      }
    }
  } catch(error) {
    context.log('GetTotalUsers', 'ERROR', error)
    return {
      status: 500
    }
  }
}