const { Client, Events, GatewayIntentBits, SlashCommandBuilder} = require('discord.js');
const { token } = require('../config.json');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
}); 

client.on('messageCreate', message => {
    if (message.content === 'hee') {
      message.channel.send(`ควยไรลูกกะหรี่ห้ะ`);
    }
  });


client.login(token);
