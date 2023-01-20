const {DISCORD_API_URL} = process.env

module.exports = async function (context, req) {
  return {
    status: 200,
    body: [{
      title: "Get current discord user",
      path: "/api/user/discord",
      method: "get",
      description: "Return current user",
      body: {
        tagName: "MarcoBrunoDev#2342",
        name: "MarcoBrunoDev",
        discordApiUrl: DISCORD_API_URL || "bad"
      }
    }]
  }
}