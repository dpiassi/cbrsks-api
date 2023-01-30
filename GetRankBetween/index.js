module.exports = async (context, req) => {
  const rank = [
    {
      rank: 1,
      username: "Norabit",
      discriminator: "9163",
      avatar: "https://cdn.discordapp.com/avatars/364867828731478017/545eba3e844244090572ff772d804043",
      time: "01:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 2,
      username: "Colinas",
      discriminator: "2352",
      avatar: "https://cdn.discordapp.com/avatars/955907517769207879/d880715489128ce0b3e71f6b75dca9de",
      time: "02:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 3,
      username: "XX•55•40",
      discriminator: "9999",
      avatar: "https://cdn.discordapp.com/avatars/957987721287192676/01f2d12e4afd8fe3bb549dbcbd557739",
      time: "03:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 4,
      username: "Colinas",
      discriminator: "2352",
      avatar: "https://cdn.discordapp.com/avatars/955907517769207879/d880715489128ce0b3e71f6b75dca9de",
      time: "04:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 5,
      username: "Norabit",
      discriminator: "9163",
      avatar: "https://cdn.discordapp.com/avatars/364867828731478017/545eba3e844244090572ff772d804043",
      time: "05:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 6,
      username: "XX•55•40",
      discriminator: "9999",
      avatar: "https://cdn.discordapp.com/avatars/957987721287192676/01f2d12e4afd8fe3bb549dbcbd557739",
      time: "06:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 7,
      username: "Norabit",
      discriminator: "9163",
      avatar: "https://cdn.discordapp.com/avatars/364867828731478017/545eba3e844244090572ff772d804043",
      time: "07:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 8,
      username: "demiannpi",
      discriminator: "6476",
      avatar: "https://cdn.discordapp.com/avatars/685887129422790667/a9cd8d86d76cb0eb4360a994fea22b29",
      time: "08:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 9,
      username: "Norabit",
      discriminator: "9163",
      avatar: "https://cdn.discordapp.com/avatars/364867828731478017/545eba3e844244090572ff772d804043",
      time: "09:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    },
    {
      rank: 10,
      username: "demiannpi",
      discriminator: "6476",
      avatar: "https://cdn.discordapp.com/avatars/685887129422790667/a9cd8d86d76cb0eb4360a994fea22b29",
      time: "10:00.000",
      corporation: "https://cbrsks-unity.s3.amazonaws.com/images/corporations/OH-White.png"
    }
  ]

  return {
    status: 200,
    body: {
      status: 200,
      rank
    }
  }
}