const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "help",
    description: "help command",
    execute(message, args) { 
       const embed = new MessageEmbed()
        .setTitle('Hent bot commands.')
        .setDescription("```-mines mines prediction.\n\n-info show bot info.\n\n-randomnum get random number.\n\n-version get bot version.\n\n-status get bot status.\n\n-crash crash prediction.\n\n-roulette roulette prediction\n\n-towers (beta).```")
        .setColor("#ff00ff")
        .setFooter("Hent!Bot commands")
       message.channel.send({ embeds: [embed] });
    }
 }