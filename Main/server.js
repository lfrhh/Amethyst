// Discord.js Client
const { Client, Options, Collection, Events, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const client = new Client({ 
  intents: 387,
  makeCache: Options.cacheWithLimits({
    ReactionManager: 0,
    ReactionUserManager: 0,
    GuildBanManager: 0,
    GuildInviteManager: 0,
    GuildStickerManager: 0,
    AutoModerationRuleManager: 0,
    DMMessageManager: 0,
    MessageManager: 0
  })
});

// Packages
const { readdirSync, lstatSync } = require('fs')
const path = require('node:path');
const chalk = require('chalk');
const axios = require('axios');
require('dotenv').config()

// DataBase
const StrongDB = require('strong-db');
client.db = new StrongDB('./Database.json', { edit: true });

// Others
const { colors } = require('./configs.json');
const trans = require('././trans.json');
const token = process.env.bot_token

// Funções 
client.myFunc = {
  getWaifuIm: async function(tags) {
    try {
      const response = await axios.get(`https://api.waifu.im/search?included_tags=${tags}`);
      return { success: true, data: response.data, status: response.status }
    } catch {
      return { success: false }
    }
  }
}

// Command Handler
function loadCommands(collection, directory) {
  const cmdFiles = readdirSync(directory)

  for (const file of cmdFiles) {
    try {
      const path = `${directory}/${file}`

      if (file.endsWith('.js')) {
        const command = require(path)

        collection.set(command.name, command)

      } else if (lstatSync(path).isDirectory()) {
        loadCommands(collection, path)
      }
    } catch (e) {
      console.error(chalk.red.bold(`[ COMANDO ] Não foi possível carregar o comando ${file}: ${e}`))
    }
  }
}

client.commands = new Collection();
loadCommands(client.commands, path.join(__dirname, 'commands'))

// Events
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  let prefix = await client.db.get(`Server/${message.guild.id}/prefix`) || ".";
  
  if (message.content == '<@1206191775828545546>') {
    const lang = trans[message.guild.preferred] ? message.guild.preferred : "en-US";
    
    message.reply({ content: trans[lang].system.mention.txt.replace("{P}", prefix).replace("{H}", `${prefix}help`) });
  }
  
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        command.execute(message, args, client);
        
        let embed = new EmbedBuilder()
            .setAuthor({ name: `@${interaction.user.username} – ${interaction.user.id}`, iconURL: interaction.user.avatarURL({ extension: "png" }) })
            .setDescription("```\n/" + `${prefix}${commandName}` + "\n```")
            .setFooter({ text: `${interaction.guild.name} – ${interaction.guild.id} – #${interaction.channel.name}`, iconURL: interaction.guild.iconURL({ extension: "png" }) })
        await client.channels.cache.get('1160552547627581561').send({ embeds: [embed.setColor(colors.blue)] })
    } catch (error) {
        console.error(error);
        message.reply('Erro ao executar o comando!');
    }
  }
});
client.on('guildCreate', async (guild) => {
  const owner = await client.users.fetch(guild.ownerId);
  let embed = new EmbedBuilder()
        .setFooter({ text: `@${owner.username} – ${owner.id}`, iconURL: owner.avatarURL({ extension: "png" }) })
        .setDescription(`## ${guild.name}\n> ID: ${guild.id}\n> <t:${parseInt(guild.createdTimestamp / 1000)}>\n> ${guild.memberCount} membros`)
        .setThumbnail(guild.iconURL({ extension: "png" }))
  
  await client.channels.cache.get('1347587764748550205').send({ embeds: [embed.setColor(colors.blue)] })
})

// Anti-crash
process.on('uncaughtException', (error) => {
  console.log(chalk.red.bold('[ PROCESS ERROR ]: ' + error.stack))
});
process.on('unhandledRejection', (error) => {
  console.log(chalk.red.bold('[ PROCESS ERROR ]: ' + error.stack))
});
process.on('rejectionHandled', (error) => {
  console.log(chalk.red.bold('[ PROCESS ERROR ]: ' + error.stack))
});
process.on('warning', (error) => {
  console.log(chalk.red.bold('[ PROCESS ERROR ]: ' + error.stack))
});

// Log in
client.login(token);