//eslint-disable-next-line
const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class InviteCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      aliases: ['add'],
      group: 'support',
      memberName: 'invite',
      description: 'Sends an invite for the bot.',
      details: oneLine `
      Do you like SmoreTel? Do you want it on your very own server?
      This command sends an invite to the bot so you can spread the smore love!
			`,
      examples: ['invite'],
      guildOnly: true,
      guarded: true
    })
  }

  //eslint-disable-next-line class-methods-use-this
  async run(message) {
    message.channel.send('Click here to add me to your server: https://discordapp.com/oauth2/authorize?client_id=531212856297914383&scope=bot&permissions=3525632')
  }
};
