const Discord = require('discord.js')

module.exports = {
    name: "info",
    description: "info command",
    execute(message, args) {
        message.channel.send("This is a fun/admin bot, The predictions are random (a lot of predictor bots are random predictor), this bot was make for fun, not affiliated.");
    }
}