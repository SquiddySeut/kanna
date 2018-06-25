const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content.startsWith("Kanna")) {
    message.channel.send("Hugh, please don't be too rough with me: it's my first time as well...");
    }
    if (message.content.startsWith("Hey")) {
    message.channel.send("Would you like your dinner?");
    message.channel.send("Or your bath?");
    message.channel.send("Or...");
    message.channel.send("Me?");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
