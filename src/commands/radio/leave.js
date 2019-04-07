//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;
const { RichEmbed } = require('discord.js');
const os = require('os');

module.exports = class InfoCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      group: 'radio',
      memberName: 'leave',
      description: 'Leaves the current voice channel',
      details: oneLine `
      Leaves the current voice channel.
			`,
      examples: ['leave'],
      guildOnly: true,
      guarded: true
    })
  }

  //eslint-disable-next-line class-methods-use-this
  async run(msg) {
    if(msg.guild.voiceConnection) {
        msg.guild.voiceConnection.disconnect()
    } else {
        msg.reply('You is big stupid')
    }
  }
};