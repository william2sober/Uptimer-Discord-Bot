const boxConsole = require('box-console');
const set = require(`${process.cwd()}/Assets/Config/settings`);
const chalk = require('chalk');

const config = {
  projectName: 'UpTimer Discord Bot',
  developer: 'William’s Development',
  supportLink: 'https://discord.gg/48BDu759Yc',
  coder: 'William2Sober',
  customColor: '#09b285'
};

module.exports = {
  async execute(client) {
    const colorText = (text) => chalk.hex(config.customColor)(text);

    // Plain strings for boxConsole (No chalk here to prevent [object Object] issue)
    let welcomeMessage = `Welcome to ${config.projectName} by ${config.developer}`;
    let supportMessage = `Support: ${config.supportLink}`;
    let coderMessage = `Coded By ${config.coder}`;

    console.clear();
    boxConsole([welcomeMessage, supportMessage, coderMessage]); // Pass plain text strings

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
