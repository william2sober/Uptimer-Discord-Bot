const boxConsole = require('box-console');
const set = require(`${process.cwd()}/Assets/Config/settings`);
const chalk = require('chalk');

const config = {
  projectName: 'UpTimer Discord Bot',
  developer: 'Your Name',
  supportLink: 'https://discord.gg/invite',
  coder: 'Your Name',
  customColor: '#09b285'
};

module.exports = {
  async execute(client) {
    const colorText = (text) => chalk.hex(config.customColor)(text);
    let welcomeMessage = `Welcome to ${config.projectName} by ${config.developer}`;
    let supportMessage = `Support: ${config.supportLink}`;
    let coderMessage = `Coded By ${config.coder}`;

    console.clear();
    boxConsole([welcomeMessage, supportMessage, coderMessage]);

    client.logger = (data) => {
      let currentdate = new Date();
      let logPrefix = colorText(`${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()} │`);

      if (typeof data === "string") {
        console.log(logPrefix, colorText(data));
      } else if (typeof data === "object") {
        console.log(logPrefix, colorText(JSON.stringify(data, null, 3)));
      } else if (typeof data === "boolean") {
        console.log(logPrefix, colorText(String(data)));
      } else {
        console.log(logPrefix, data);
      }
    };
  }
};
