const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "status",
  description: "Status command",
  execute(message, args) { 
    const embed = new MessageEmbed()
      .setTitle('Hent!Bot status.')
      .addField('VERSION:', `1.00`)
      .addField('STATUS:', `ONLINE`)
      .addField('ERRORS:', `FALSE`)
      .addField('ALLWORKING:', `TRUE`)
      .addField('NEXTVERSION:', `1.20`)
      .setColor("#f84hsf")
      .setFooter("Hent!Bot.")
   message.channel.send({ embeds: [embed] });
  }
}