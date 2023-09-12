const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "All the commands this bot has!",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('This code comes from a GitHub project [Cream Team Music code](https://github.com/Shhlumpedayden/Cream-Team-Music-2.0).\nThe use of this one is possible while keeping the credits for free.\nIf you want to remove the credits join the Discord support server. [here](https://discord.gg/5cGSYV8ZZj)')
        .addFields([ { name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'Best audio music comes first - Made by Ace2Shhlumped 🤑', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.editReply({ embeds: [embed] });
    },
};