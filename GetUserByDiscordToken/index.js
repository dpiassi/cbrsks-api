module.exports = async (context, req) => {
  const user = context.bindings.inputUsers[0]

  return {
    status: 200,
    body: {
      user
    }
  }
}