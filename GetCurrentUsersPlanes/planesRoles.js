const planesRoles = [
  {
    discordRoleId: '1061996482468777984',
    metadata: {
      code: "CR-002",
      name: "A-37",
      speed: 880,
      boosterPower: 740,
      boosterCooldown: 20,
      boosterDuration: 10,
      damageResistance: 1270,
      corporation: 'Chronicler Network',
      skin: 'Junk'
    }
  },
  {
    discordRoleId: '1061996679286497331', 
    metadata: {
      code: "SFA-001",
      name: "Albatross",
      speed: 700,
      boosterPower: 511,
      boosterCooldown: 5,
      boosterDuration: 25,
      damageResistance: 1230,
      corporation: 'SFA',
      skin: 'Junk'
    }
  },
  {
    discordRoleId: '1061997140634767391', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Junk'
    }
  },
  {
    discordRoleId: '1061997150155845682', 
    metadata: {
      code: "MR-002",
      name: "Gladiator",
      speed: 925,
      boosterPower: 759,
      boosterCooldown: 22,
      boosterDuration: 8,
      damageResistance: 1590,
      corporation: 'Magyar Riders',
      skin: 'Junk'
    }
  },
  {
    discordRoleId: '1061997153888780288', 
    metadata: {
      code: "PS-001",
      name: "Phenom 456",
      speed: 840,
      boosterPower: 723,
      boosterCooldown: 18,
      boosterDuration: 12,
      damageResistance: 1390,
      corporation: 'Paxton Skylines',
      skin: 'Junk'
    }
  },
  {
    discordRoleId: '1061997157143556206', 
    metadata: {
      code: "CR-001",
      name: "Spectre",
      speed: 880,
      boosterPower: 748,
      boosterCooldown: 20,
      boosterDuration: 10,
      damageResistance: 1000,
      corporation: 'Chronicler Network',
      skin: 'Junk'
    }
  },
  {
    discordRoleId: '1061997651744272384', 
    metadata: { 
      code: "SFA-002",
      name: "Stormbringer",
      speed: 720,
      boosterPower: 490,
      boosterCooldown: 5,
      boosterDuration: 25,
      damageResistance: 1680,
      corporation: 'SFA',
      skin: 'Junk'
    }
  },

  {
    discordRoleId: '1061997626637164624',
    metadata: {
      code: "CR-002",
      name: "A-37",
      speed: 880,
      boosterPower: 740,
      boosterCooldown: 20,
      boosterDuration: 10,
      damageResistance: 1270,
      corporation: 'Chronicler Network',
      skin: 'Standard'
    }
  },
  {
    discordRoleId: '1061997901171146782', 
    metadata: {
      code: "SFA-001",
      name: "Albatross",
      speed: 700,
      boosterPower: 511,
      boosterCooldown: 5,
      boosterDuration: 25,
      damageResistance: 1230,
      corporation: 'SFA',
      skin: 'Standard'
    }
  },
  {
    discordRoleId: '1061997906938302464', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Standard'
    }
  },
  {
    discordRoleId: '1061998301819441213', 
    metadata: {
      code: "MR-002",
      name: "Gladiator",
      speed: 925,
      boosterPower: 759,
      boosterCooldown: 22,
      boosterDuration: 8,
      damageResistance: 1590,
      corporation: 'Magyar Riders',
      skin: 'Standard'
    }
  },
  {
    discordRoleId: '1061998415959035965', 
    metadata: {
      code: "PS-001",
      name: "Phenom 456",
      speed: 840,
      boosterPower: 723,
      boosterCooldown: 18,
      boosterDuration: 12,
      damageResistance: 1390,
      corporation: 'Paxton Skylines',
      skin: 'Standard'
    }
  },
  {
    discordRoleId: '1061998516223885433', 
    metadata: {
      code: "CR-001",
      name: "Spectre",
      speed: 880,
      boosterPower: 748,
      boosterCooldown: 20,
      boosterDuration: 10,
      damageResistance: 1000,
      corporation: 'Chronicler Network',
      skin: 'Standard'
    }
  },
  {
    discordRoleId: '1061998525325516870', 
    metadata: { 
      code: "SFA-002",
      name: "Stormbringer",
      speed: 720,
      boosterPower: 490,
      boosterCooldown: 5,
      boosterDuration: 25,
      damageResistance: 1680,
      corporation: 'SFA',
      skin: 'Standard'
    }
  },

  {
    discordRoleId: '1061998531193352254',
    metadata: {
      code: "CR-002",
      name: "A-37",
      speed: 880,
      boosterPower: 740,
      boosterCooldown: 20,
      boosterDuration: 10,
      damageResistance: 1270,
      corporation: 'Chronicler Network',
      skin: 'Luxury'
    }
  },
  {
    discordRoleId: '1061998528014057472', 
    metadata: {
      code: "SFA-001",
      name: "Albatross",
      speed: 700,
      boosterPower: 511,
      boosterCooldown: 5,
      boosterDuration: 25,
      damageResistance: 1230,
      corporation: 'SFA',
      skin: 'Luxury'
    }
  },
  {
    discordRoleId: '1061998602081288253', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Luxury'
    }
  },
  {
    discordRoleId: '1061998606028124310', 
    metadata: {
      code: "MR-002",
      name: "Gladiator",
      speed: 925,
      boosterPower: 759,
      boosterCooldown: 22,
      boosterDuration: 8,
      damageResistance: 1590,
      corporation: 'Magyar Riders',
      skin: 'Luxury'
    }
  },
  {
    discordRoleId: '1061999213745033257', 
    metadata: {
      code: "PS-001",
      name: "Phenom 456",
      speed: 840,
      boosterPower: 723,
      boosterCooldown: 18,
      boosterDuration: 12,
      damageResistance: 1390,
      corporation: 'Paxton Skylines',
      skin: 'Luxury'
    }
  },
  {
    discordRoleId: '1061999208594423808', 
    metadata: {
      code: "CR-001",
      name: "Spectre",
      speed: 880,
      boosterPower: 748,
      boosterCooldown: 20,
      boosterDuration: 10,
      damageResistance: 1000,
      corporation: 'Chronicler Network',
      skin: 'Luxury'
    }
  },
  {
    discordRoleId: '1061999221538037791', 
    metadata: { 
      code: "SFA-002",
      name: "Stormbringer",
      speed: 720,
      boosterPower: 490,
      boosterCooldown: 5,
      boosterDuration: 25,
      damageResistance: 1680,
      corporation: 'SFA',
      skin: 'Luxury'
    }
  },
  {
    discordRoleId: '1072156456259948564', 
    metadata: {
      code: "PS-001",
      name: "Phenom 456",
      speed: 840,
      boosterPower: 723,
      boosterCooldown: 18,
      boosterDuration: 12,
      damageResistance: 1390,
      corporation: 'Paxton Skylines',
      skin: 'Gold'
    }
  },
  {
    discordRoleId: '1077962315233759242', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Enforcers'
    }
  },
  {
    discordRoleId: '1077551979221495818', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Enforcers'
    }
  },
  {
    discordRoleId: '1077962585376301056', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Resistance'
    }
  },
  {
    discordRoleId: '1077551997126983782', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Resistance'
    }
  },
  {
    discordRoleId: '1077963014361317416', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Rebels'
    }
  },
  {
    discordRoleId: '1077552000755056723', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Rebels'
    }
  },
  {
    discordRoleId: '1077963127871774821', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Operators'
    }
  },
  {
    discordRoleId: '1077551992295133244', 
    metadata: {
      code: "MC-001",
      name: "Delta",
      speed: 1000,
      boosterPower: 760,
      boosterCooldown: 25,
      boosterDuration: 5,
      damageResistance: 1150,
      corporation: 'Mach Co',
      skin: 'Operators'
    }
  },
]

module.exports = planesRoles