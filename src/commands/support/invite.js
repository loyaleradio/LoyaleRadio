const { Command } = require("discord.js-commando");
const { oneLine } = require("common-tags");

module.exports = class InviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: "invite",
      aliases: ["add"],
      group: "support",
      memberName: "invite",
      description: "Sends an invite for the bot.",
      details: oneLine`
      Do you like LoyaleRadio? Do you want it on your very own server?
      This command sends an invite to the bot so you can spread the smore love!
			`,
      examples: ["invite"],
      guildOnly: true,
      guarded: true
    });
  }

  async run(message) {
    return message.reply(
      "Click here to add me to your server: https://discordapp.com/oauth2/authorize?client_id=531212856297914383&scope=bot&permissions=3525632"
    );
  }
};
