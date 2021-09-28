"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require the necessary discord.js classes
const dotenv = require('dotenv');
dotenv.config();
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
//const { token } = require('./config');
// Create a new client instance
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
});
// When the client is ready, run this code only once
client.on('ready', () => {
    console.log('Bot is ready!');
});
// When someone writes a message in discord show it in console
client.on('messageCreate', (message) => {
    console.log(message.content);
    if (message.content.startsWith(`${config_json_1.prefix}ping`)) {
        message.channel.send('🚀 pong');
        message.reply('🚀 pongo');
    }
});
client.on('interactionCreate', (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isCommand())
        return;
    if (interaction.commandName === (`${config_json_1.prefix}`)) {
        const kickedMember = yield interaction.reply({ content: 'The user has been kick', ephemeral: true });
        console.log(kickedMember);
    }
}));
// Login to Discord with your client's token
client.login(process.env.token);
