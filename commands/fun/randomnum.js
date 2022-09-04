const Discord = require('discord.js')

module.exports = {
    name: "randomnum",
    description: "Random num gen",
    execute(message, args) {
        var number = Math.floor(Math.random() * 100) + 1;
        message.reply(`The random number is ${number}.`);
    }
}