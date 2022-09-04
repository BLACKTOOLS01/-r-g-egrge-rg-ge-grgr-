module.exports = {
    name: "clear",
    description: "clear command",
    onlyStaff: true,
    execute(message, args) { 
        const argsd = message.content.split(' ').slice(1);
        const amount = argsd.join(' '); 

        if (!amount) return message.reply('give a number.'); 
        if (isNaN(amount)) return message.reply('I SAID A NUMBER NOT LETTERS.');

           
        message.channel.messages.fetch({ limit: amount }).then(messages => { 
            message.channel.bulkDelete(messages 
        )});

        message.reply(`deleted ${amount} messages.`)
            .then(repliedMessage => {
                setTimeout(() => repliedMessage.delete(), 5000);
              })
              .catch()
        

    }
 }