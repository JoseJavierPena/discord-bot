
// Require the necessary discord.js classes
const dotenv = require('dotenv');
dotenv.config();
import { Client,Intents, Interaction, Message } from "discord.js";
import { prefix } from "./config.json";
//const { token } = require('./config');

// Create a new client instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});


// When the client is ready, run this code only once
client.on('ready', () => {
    console.log('Bot is ready!');
});

// When someone writes a message in discord show it in console
client.on('messageCreate', (message: Message) => {
    console.log(message.content)

    if(message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('🚀 pong');
        message.reply('🚀 pongo');
    }
});

// Trying to kick a user
// client.on('interactionCreate', async interaction => {
//     if(!interaction.isCommand()) return;

//     const member = interaction.options.getMember('target');
//     member.kick();
//     if(interaction.commandName === 'kick') {
        
//         const kickedMember = await member.kick();
//         console.log(kickedMember);
//     }    
// });

// Login to Discord with your client's token
client.login(process.env.token);