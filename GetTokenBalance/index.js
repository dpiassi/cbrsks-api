const { getAssociatedTokenAddressSync } = require("@solana/spl-token");
const { Connection, PublicKey } = require("@solana/web3.js");

module.exports = async (context, req) => {
  try {
    const wallet = req.query.wallet || (req.body && req.body.wallet);
    const walletPk = new PublicKey(wallet);
    const mint = new PublicKey(process.env.MINT);
    const connection = new Connection(process.env.RPC_URL, "confirmed");
    const tokenAta = getAssociatedTokenAddressSync(mint, walletPk);
    const tokenBalance = await connection.getTokenAccountBalance(tokenAta);

    context.res = {
      body: {
        status: 200,
        balance: tokenBalance.value.uiAmount,
      },
    };
  } catch (error) {
    console.log("GetTokenBalance", "ERROR", error);
    context.res = {
      status: 500
    };
  }
};
