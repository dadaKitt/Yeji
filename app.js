const { Client, Events, GatewayIntentBits, SlashCommandBuilder} = require('discord.js');
const { token } = require('./config.json');
const { chat } = require('./src/chat.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});






client.once(Events.ClientReady, c => {

    var currentDate = '[' + new Date().toUTCString() + ']';
    console.log('-----------------------------');
    console.log(currentDate);
    console.log('Yeji Version DEV');
    console.log('Develop by : HONIX Academy');
    console.log('Develop by : RIN');
    console.log('Develop by : Kim');
    console.log('-----------------------------');
    

});



client.login(token);
