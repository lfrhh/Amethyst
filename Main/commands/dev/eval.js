const { ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');
const { colors, devs } = require('../../configs.json');

module.exports = {
    name: 'eval',
    async execute(message, args) {
        if (!devs.includes(message.author.id)) return;

        const code = args.join(' ');
        if (!code) return message.reply('Código não informado.');

        try {
            let evaled = await eval(code);
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled, { depth: 1 });

            const embed = new EmbedBuilder()
                .setDescription(`\`\`\`js\n${evaled.slice(0, 1900)}\n\`\`\``)
                .setColor(colors.green);

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('delete_eval')
                    .setLabel('Deletar')
                    .setStyle('Danger')
            );

            const sent = await message.reply({ embeds: [embed], components: [row] });

            const collector = sent.createMessageComponentCollector({
                filter: i => i.user.id === message.author.id,
                time: 60000
            });

            collector.on('collect', async i => {
                if (i.customId === 'delete_eval') {
                    await sent.delete().catch(() => {});
                    collector.stop();
                }
            });

        } catch (err) {
            const embed = new EmbedBuilder()
                .setDescription(`\`\`\`js\n${err.toString().slice(0, 1900)}\n\`\`\``)
                .setColor(colors.red);

            message.reply({ embeds: [embed] });
        }
    }
};