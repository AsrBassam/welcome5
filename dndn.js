﻿const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: اهلا بك في سيرفرنا المتواضع 
ᏔᎬᏞᏨᏫᎷᎬ  ᎿᏫ ᏚᎬᎡᏉᎬᎡ ᎡᎬᎠ Ꭿ ᎡᎷᎽ

[ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: اهلا بك في سيرفرنا المتواضع 
ᏔᎬᏞᏨᏫᎷᎬ  ᎿᏫ ᏚᎬᎡᏉᎬᎡ ᎡᎬᎠ Ꭿ ᎡᎷᎽ

**`) 
}).catch(console.error)
})
client.login("NTI1NzI2MDc3NDg2NzU5OTM2.Dv60bg.Be5nitrH0cysHpk7UjM6GN4N2xs"
);