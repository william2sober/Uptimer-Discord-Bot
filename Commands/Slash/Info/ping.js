const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
require('ms');

module.exports = {
  name: "ping",
  description: "Check bot's ping.",
  usage: "",
  category: "info",
  userPerms: [""],
  botPerms: [""],
  cooldown: 10,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    try {
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      let webLatency = new Date() - interaction.createdAt;
      let apiLatency = client.ws.ping;
      let totalLatency = webLatency + apiLatency;

      let emLatency = {
        Green: "<:Green_Dot:1347724743528415322>",
        Yellow: "<:Yellow_Dot:1347724793746554961>",
        Red: "<:Red_Dot:1347724825522606214>"
      };

      interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(totalLatency < 200 ? client.embed.successcolor : totalLatency < 500 ? client.embed.stanbycolor : client.embed.wrongcolor)
            .setTitle(`Returns Latency And API Ping`)
            .addFields([
              {
                name: "<:Satellite:1347725416684851291> Websocket Latency",
                value: `>>> ${webLatency <= 200 ? emLatency.Green : webLatency <= 400 ? emLatency.Yellow : emLatency.Red} \`${webLatency}ms\``,
                inline: true
              },
              {
                name: "<:Space_Station:1347725714224582667> API Latency",
                value: `>>> ${apiLatency <= 200 ? emLatency.Green : apiLatency <= 400 ? emLatency.Yellow : emLatency.Red} \`${apiLatency}ms\``,
                inline: true
              },
              {
                name: "<:Clock:1347726003375570954> Uptime",
                value: `>>> \`${days} Days : ${hours} Hrs : ${minutes} Mins : ${seconds} Secs\``,
                inline: false
              }
            ])
        ]
      });
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};
