const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

client.once("ready", () => {
    console.log("Ready!");
});

client.on("message", (msg) => {
    console.log(msg);
});

client.login(process.env.BOT_TOKEN);
