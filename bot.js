const Discord = require('discord.js');
const client = new Discord.Client();
//var qrkannabed = document.createElement("img");
//qrkannabed.src = "kannabedpic.jpeg";

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
    if (message.content.startsWith("hey")) {
    message.channel.send("Would you like your dinner?");
    message.channel.send("Or your bath?");
    message.channel.send("Or...");
    message.channel.send("Me?"); 
    }
    if (message.content === '~>rule34') {
    	message.reply('hey um...');
        message.reply('if you really want to see a naked body,');
        message.channel.send("You can look at my body..."); 
        message.channel.send("http://ae01.alicdn.com/kf/HTB14_hCiMnH8KJjSspcq6z3QFXaL/Miss-Kobayashi-s-Dragon-Mai-Kanna-Kamui-Hug-Body-Pillow-Cover-Tohru-Kobayashi-Dakimakura-Case.jpg");
  	    message.channel.send("https://imgs.inkfrog.com/pix/am13690/17012_____________________________-________2_(2).jpg?i=0.7341140517185158");
        message.channel.send("https://dynasty-scans.com/system/releases/000/017/450/04.jpg");
        message.channel.send("https://hentaiporns.net/wp-content/uploads/2017/04/CIRCLE-ENERGY-Imaki-Hitotose-Kobayashi-san-chi-no-Seido-Dragon-Kobayashi-san-chi-no-Maid-Dragon-Dig_27.jpg");
    }
    if (message.content === '->rule34') {
    	message.reply('hey um...');
        message.reply('if you really want to see a naked body,');
        message.channel.send("You can look at my body..."); 
        message.channel.send("http://ae01.alicdn.com/kf/HTB14_hCiMnH8KJjSspcq6z3QFXaL/Miss-Kobayashi-s-Dragon-Mai-Kanna-Kamui-Hug-Body-Pillow-Cover-Tohru-Kobayashi-Dakimakura-Case.jpg");
  	    message.channel.send("https://imgs.inkfrog.com/pix/am13690/17012_____________________________-________2_(2).jpg?i=0.7341140517185158");
        message.channel.send("https://dynasty-scans.com/system/releases/000/017/450/04.jpg");
        message.channel.send("https://hentaiporns.net/wp-content/uploads/2017/04/CIRCLE-ENERGY-Imaki-Hitotose-Kobayashi-san-chi-no-Seido-Dragon-Kobayashi-san-chi-no-Maid-Dragon-Dig_27.jpg");
    }
    if (message.content === '*lewd') {
    	message.reply('hey um...');
        message.reply('if you really want to see a naked body,');
        message.channel.send("You can look at my body..."); 
        message.channel.send("http://ae01.alicdn.com/kf/HTB14_hCiMnH8KJjSspcq6z3QFXaL/Miss-Kobayashi-s-Dragon-Mai-Kanna-Kamui-Hug-Body-Pillow-Cover-Tohru-Kobayashi-Dakimakura-Case.jpg");
  	    message.channel.send("https://imgs.inkfrog.com/pix/am13690/17012_____________________________-________2_(2).jpg?i=0.7341140517185158");
        message.channel.send("https://dynasty-scans.com/system/releases/000/017/450/04.jpg");
        message.channel.send("https://hentaiporns.net/wp-content/uploads/2017/04/CIRCLE-ENERGY-Imaki-Hitotose-Kobayashi-san-chi-no-Seido-Dragon-Kobayashi-san-chi-no-Maid-Dragon-Dig_27.jpg");
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
//http://ae01.alicdn.com/kf/HTB14_hCiMnH8KJjSspcq6z3QFXaL/Miss-Kobayashi-s-Dragon-Mai-Kanna-Kamui-Hug-Body-Pillow-Cover-Tohru-Kobayashi-Dakimakura-Case.jpg
//ae01.alicdn.com/kf/HTB14_hCiMnH8KJjSspcq6z3QFXaL/Miss-Kobayashi-s-Dragon-Mai-Kanna-Kamui-Hug-Body-Pillow-Cover-Tohru-Kobayashi-Dakimakura-Case.jpg
//<img src="https://ae01.alicdn.com/kf/HTB14_hCiMnH8KJjSspcq6z3QFXaL/Miss-Kobayashi-s-Dragon-Mai-Kanna-Kamui-Hug-Body-Pillow-Cover-Tohru-Kobayashi-Dakimakura-Case.jpg" alt="Image result for kanna kamui sexy"/>
