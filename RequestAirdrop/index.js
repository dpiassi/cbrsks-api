const {
  createAssociatedTokenAccountIdempotentInstruction,
  createTransferCheckedInstruction,
  getAssociatedTokenAddressSync,
} = require("@solana/spl-token");
const {
  Connection,
  Keypair,
  PublicKey,
  TransactionMessage,
  VersionedTransaction,
} = require("@solana/web3.js");
const bs58 = require("bs58");

module.exports = async (context, req) => {
  try {
    const { to, amount } = req.body;
    const connection = new Connection(process.env.RPC_URL, "confirmed");

    const destination = new PublicKey(to);
    const mint = new PublicKey(process.env.MINT);
    const vaultKeypair = Keypair.fromSecretKey(
      bs58.decode(process.env.VAULT_SECRET_KEY)
    );

    const sourceAta = getAssociatedTokenAddressSync(
      mint,
      vaultKeypair.publicKey
    );
    const destinationAta = getAssociatedTokenAddressSync(mint, destination);

    const createAtaInstruction =
      createAssociatedTokenAccountIdempotentInstruction(
        destination,
        destinationAta,
        destination,
        mint
      );
    const transferInstruction = createTransferCheckedInstruction(
      sourceAta,
      mint,
      destinationAta,
      vaultKeypair.publicKey,
      amount,
      0
    );

    const { blockhash } = await connection.getLatestBlockhash("confirmed");
    const message = new TransactionMessage({
      payerKey: destination,
      recentBlockhash: blockhash,
      instructions: [createAtaInstruction, transferInstruction],
    }).compileToV0Message();
    const tx = new VersionedTransaction(message);
    tx.sign([vaultKeypair]);

    context.res = {
      body: {
        status: 200,
        result: Buffer.from(tx.serialize()).toString("base64"),
      },
    };
  } catch (error) {
    context.log('RequestAirdrop', 'ERROR', error)
    return {
      status: 500
    }
  }
};
