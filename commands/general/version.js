const Discord = require('discord.js')
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "version",
    description: "info command",
    execute(message, args) { 
        const exampleEmbed = new EmbedBuilder()
        
        message.reply("BOT VERSION: 0.01")
    }
}