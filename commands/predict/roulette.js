const { MessageEmbed } = require("discord.js");

module.exports = ({
    name: "roulette",
    description: "Random prediction command",
    execute(message) {
    const embed = new MessageEmbed()
        .setTitle("Hent predictor 1.00")
        .setColor('#f82f0f')
        .addField('Prediction (roulette) :globe_with_meridians:',`${Roulette()}`)
        .addField('Accuracy (approximately)', `${Accuracy()}` + '%.')
        .setFooter("Hent!Bot.")
        message.channel.send({ embeds: [embed] }).then(sentEmbed => {
            sentEmbed.react('👍');
            sentEmbed.react('👎');})
 
    }
})

function Roulette() {
    var random = ['Red','Purple'];
    return random[Math.floor(Math.random()*rand.length)];
}

function Accuracy() {
    var rating = Math.floor((Math.random() * 3) + 1);
    return rating;
}