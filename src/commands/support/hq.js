const { Command } = require("discord.js-commando");
const { oneLine } = require("common-tags");

module.exports = class HQCommand extends Command {
  constructor(client) {
    super(client, {
      name: "hq",
      aliases: ["server", "helpserver", "officialserver", "devsserevr"],
      group: "support",
      memberName: "hq",
      description: "Sends an helpful links and commands for SmoreBot help.",
      details: oneLine`
        Do you need help with SmoreTel? Want to suggest a feature? Just want to drop by and meet the developers?
        This command sends an invite to the official SmoreSoftware Discord server.
			`,
      examples: ["hq"],
      guarded: true
    });
  }

  async run(message) {
    message.author.send(`**Need help?**
Come join the official SmoreSoftware Discord server!
https://discord.gg/6P6MNAU
Need some quick help? Call the developers!
Do \`${message.guild ? message.guild.commandPrefix : "s."}support\`
Want to suggest something?
Do \`${message.guild ? message.guild.commandPrefix : "s."}suggest\``);
    await message.reply("Check your DMs!");
  }
};
