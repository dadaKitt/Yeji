const { Client, Events, GatewayIntentBits, SlashCommandBuilder} = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {

    var currentDate = '[' + new Date().toUTCString() + ']';
    console.log('-----------------------------');
    console.log(currentDate);
    console.log('Yeji Version DEV');
    console.log('Develop by : HONIX');
    console.log('-----------------------------');
    

});

client.login(token);