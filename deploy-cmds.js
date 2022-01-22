const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
	new SlashCommandBuilder().setName('shorten').setDescription('shortens an url').addStringOption(o=>o.setName('url').setDescription('the url to be shortened (duh)').setRequired(true))
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.token);

rest.put(Routes.applicationGuildCommands('934526168055570442', '930262031829979197'), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);