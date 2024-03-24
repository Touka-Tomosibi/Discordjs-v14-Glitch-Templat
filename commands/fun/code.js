const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
  
		.setName('code') //コマンド名
    
		.setDescription('コード配布URLを送信します'), //コマンド説明
    
	async execute(interaction) {
  
		await interaction.reply('[Glitch](https://glitch.com/edit/#!/candy-knowing-mass)\n[Github](https://github.com/Touka-Tomosibi/Discordjs-v14-Templat/tree/glitch)'); //送信される内容
    
	},
};