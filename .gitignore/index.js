const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Aider le serv, #help");
    console.log("{user} à bien été connecté !");
});

bot.login("NDUwMjMwMjYzOTkwMTkwMDkw.DewaEQ.78Rrh2EPG_krAt0G87z0YHUhAKo");
