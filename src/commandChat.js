const { Client, Events, GatewayIntentBits, SlashCommandBuilder} = require('discord.js');
const { token } = require('../config.json');
const { token } = require('../qa-data.json');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
}); 
const fs = require('fs');

client.on('messageCreate', message => {
    const qaData = JSON.parse(fs.readFileSync('qa-data.json'));
    const input = message.content.slice(1).trim();
    if(message.content === input){
        for (const q of qaData) {
            if (q.question === input) {
              message.channel.send(q.answer);
              return;
            }
          }
    }
  });

  client.login(token);
