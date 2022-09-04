const { MessageEmbed, Message, client } = require("discord.js");

module.exports = ({
    name: "crash",
    description: "Random prediction command",
    execute(message) {
    const embed = new MessageEmbed()
        .setTitle("Hent predictor 1.00")
        .setColor('#f82f0f')
        .addField('Prediction (crash) :globe_with_meridians:',`${TextCrash()}` + ` ${Crash()}`, )
        .addField('Accuracy (approximately)', `${Accuracy()}` + '%.')
        .setFooter("Hent!Bot.")
        message.channel.send({ embeds: [embed] }).then(sentEmbed => {
            sentEmbed.react('👍');
            sentEmbed.react('💣');})
 
    }
})

function TextCrash() {
    var rand = ['Under:','Above:'];
    return rand[Math.floor(Math.random()*rand.length)];
}
function Crash() {
    var rating = Math.floor((Math.random() * 23) + 10) /10;
    return rating;
}
function Accuracy() {
    var rating = Math.floor((Math.random() * 10) + 1);
    return rating;
}
 
