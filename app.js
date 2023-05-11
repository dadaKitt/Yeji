const { Client, Events, GatewayIntentBits, IntentsBitField, Collection} = require('discord.js');
const {REST} = require('@discordjs/rest');
const { Routes} = require('discord-api-types/v9');
const { Player } = require('discord-player');

const fs = require('node:fs');
const path = require('node:path');

const { token } = require('./config.json');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates
	],
});








client.once(Events.ClientReady, c => {

    var currentDate = '[' + new Date().toUTCString() + ']';
    console.log('-----------------------------');
    console.log(currentDate);
    console.log('Yeji Version DEV');
    console.log('Develop by : KITTICHDEV');
    console.log('-----------------------------');
    

});

// Load the command
const commands = [];
Client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for(const file of commandsFiles){
    const filePath = path.join(commandsPath, file);
    const commands = require(filePath);


    client.commands.set(command.data.name, command);
    command.psuh = (command);
}



client.login(token);
