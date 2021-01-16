//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
/*
 Corona | Gaming© : جميع الحقوق محفوظة لدي سيرفر
 
『CR』亗〆Ť I G E R〆亗#0245 البوت من صنع 

(support server)[https://discord.gg/32EBeJ4]
 */
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://اسم البروجكت.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const { TOKEN, prefix, status, adminprefix, devs } = require('./config')
const client = new Client({ disableEveryone: true })
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat'); //npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const data = "Copyright2020©";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//『CR』亗〆Ť I G E R〆亗#0245
//======================================\\
var statuss = [`${status}`]; 
var secound = 3; 
client.on("ready", () => {
  var timeing = Math.floor(secound * 1000);
  setInterval(function() {
    var ammount = statuss.length;
    var num = Math.floor(Math.random() * ammount);
    client.user.setActivity(statuss[num], { type: 'STREAMING', url: 'https://twtch.tv/CORONA|GAMING' }) //لا يمكن التعديل في الكود
  }, timeing)
});
//『CR』亗〆Ť I G E R〆亗#0245

client.login(process.env.TOKEN);
//『CR』亗〆Ť I G E R〆亗#0245




const tiger = ''; //developer id
const tiger2 = ''; //log blacklist room id

//======================================\\

client.on('message', async message => {
  if (message.author.bot) return undefined;
  let user = message.mentions.users.first();
  let reason = message.content.split(' ').slice(2).join(' ');
  let args = message.content.split(" ");
  if (args[0].toLowerCase() == prefix + 'black') {
    message.channel.bulkDelete(1);
    if (message.author.id !== `${tiger}`)
      return message.channel.send("");
    let embed = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle("** __NEW Blacklist__ **")
      .setColor("BLACK")
      .addField("**- User :**", `[${user.tag}] [${user.id}]`)
      .addField("**- Blacklisted By :**", `[${message.author.tag}]`)
      .addField("**- Reason :**", `[${reason}]`)
      .addField("**- Blacklisted in :**", `[${message.guild.name}]`)
      .addField("**- Time & Date : **", `[${message.createdAt.toLocaleString()}]`, true)
      .setFooter(`${client.user.username}`)
      .setFooter(message.guild.name, message.guild.iconURL);
    let channel = message.guild.channels;
    client.channels
      .get(`${tiger2}`).sendEmbed(embed)
      .find("name", "blacklist-users");
    channel.send(embed);
  }
}); //『CR』亗〆Ť I G E R〆亗#0245

//======================================\\
const db = require('quick.db');
client.on('message', async message => {
  if (message.author.bot) return undefined;
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  let reason = message.content.split(' ').slice(2).join(' ');
  if (args[0].toLowerCase() == prefix + 'black') {
    if (message.author.id !== `${tiger}`)
      return message.channel.send("** ❌ | __ليس لديك صلاحيات مطور البوت__  **");
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    let Blacklist = await db.fetch(`Blacklist_${user.id}`);
    if (Blacklist === null) Blacklist = 'off';
    if (!user) return message.channel.send(`**Usage: ${prefix}blacklist \`<@Mention>\`**`);
    let embed = new Discord.RichEmbed()
    .setDescription(
`✅ | **__Done Blacklist The User__**
**User: ${user} (${user.id})**
**Reason : ${reason}**
**By : ${message.author.tag}**
**Time & Date : \`${message.createdAt.toLocaleString()}\`**`)
.setFooter(`Premium Support`, "https://cdn.discordapp.com/attachments/750718321787142156/772109036401197096/unknown-12.png")
.setTimestamp();
console.log(`⚠️ ${user.tag} ⚠️ Blacklisted
By : ${message.author.tag}
Reason : ${reason}
In : ${message.guild.name}
Time % Date : ${message.createdAt.toLocaleString()}
`);
console.log(`The Code Made By :『CR』亗〆Ť I G E R〆亗#0245 ©
`);
 message.channel.send(embed);
db.set(`Blacklist_${user.id}`, "on");
user.send(new Discord.RichEmbed()
.setColor("BLACK")
.setDescription(`**⚠️ ${user} ⚠️
You Are Blacklisted From \`${client.user.username}\`
Reason : \`${reason}\` **`)
.setFooter(`Premium Support`, "https://cdn.discordapp.com/attachments/750718321787142156/772109036401197096/unknown-12.png").setTimestamp().setColor("FFC900"));
  }
}); //『CR』亗〆Ť I G E R〆亗#0245

//======================================//
client.on('message', async message => {
  if (message.author.bot) return undefined;
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  let reason = message.content.split(' ').slice(2).join(' ');
  if (args[0].toLowerCase() == prefix + 'unblack') {
    if (message.author.id !== `${tiger}`)
      return message.channel.send("")
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    let Blacklist = await db.fetch(`Blacklist_${user.id}`);
    if (Blacklist === null) Blacklist = 'off';
    if (!user) return message.channel.send(`**Usage: ${prefix}unblacklist \`<@Mention>\`**`);
    let embed = new Discord.RichEmbed()
    .setDescription(`
✅ | **__Done UnBlacklist The User__**
**User: ${user} (${user.id})**
**Reason : ${reason}**
**By : ${message.author.tag}**
**Time & Date : \`${message.createdAt.toLocaleString()}\`**`)
.setFooter(`Premium Support`, "https://cdn.discordapp.com/attachments/750718321787142156/772109036401197096/unknown-12.png")
.setTimestamp();
console.log(`⚠️ ${user.tag} ⚠️ UnBlacklist
By : ${message.author.tag}
Reason : ${reason}
In : ${message.guild.name}
Time % Date : ${message.createdAt.toLocaleString()}
`);
console.log(`The Code Made By :『CR』亗〆Ť I G E R〆亗#0245 ©️
`);
message.channel.send(embed);
db.set(`Blacklist_${user.id}`, "off");
user.send(new Discord.RichEmbed()
.setColor("BLACK")
.setDescription(`**⚠️ ${user} ⚠️
You Are UnBlacklist From \`${client.user.username}\`
Reason : \`${reason}\` **
`)
.setFooter(`Premium Support`, "https://cdn.discordapp.com/attachments/750718321787142156/772109036401197096/unknown-12.png").setTimestamp().setColor("FFC900"));
  }
}); //『CR』亗〆Ť I G E R〆亗#0245

//====================================//

const credits = JSON.parse(fs.readFileSync("./credits.json"));
var time = require("./time.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0
    };
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
  if (args[0].toLowerCase() == `${prefix}credit`) {
let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
if (Blacklist === 'on') {
  let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle(`**❌ | __Error 404__**`);
  message.channel.send(embed).then(z => z.delete(100000000));
  return
}//『CR』亗〆Ť I G E R〆亗#0245
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2])) return message.channel.send(`**:x: | Error**`);
      if (args[2] < 1) return message.channel.send(`**:x: | Error**`);
      if (mention.bot) return message.channel.send(`**:x: | Error**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:x: | Error**`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:x: | Error , You Don't Have Enough Credit**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
      let resulting = Math.floor(args[2] - args[2] * (5 / 100));
      let tax = Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 9);
      let second = Math.floor(Math.random() * 9);
      let third = Math.floor(Math.random() * 9);
      let fourth = Math.floor(Math.random() * 9);
      let num = `${first}${second}${third}${fourth}`;
      let canvas = Canvas.createCanvas(250, 150);
      let ctx = canvas.getContext("2d");
      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/avatars/725730288629579901/f5277670ec1b1376dde7dccf1ff66763.png?size=1024"
      );
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      ctx.font = "60px Arial Bold";
      ctx.fontSize = "20px";
      ctx.fillStyle = "#FF0000";
      message.channel
        .send(
          `**${
            message.author.username
          }, Transfer Fees: \`${tax}\`, Amount: \`$${resulting.toLocaleString()}\`**
type these numbers to confirm: `
        )
        .then(essss => {
          ctx.fillText(num, canvas.width / 2.4, canvas.height / 1.7);
          message.channel.sendFile(canvas.toBuffer()).then(m => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (collected.first().content === num) {
                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, Done Trans \`$${resulting.toLocaleString()}\` To ${mentionn}**`
                  );
                  mention.send(
                    `**:money_with_wings: | Transfer Receipt \`\`\`You Have Received \`$${resulting.toLocaleString()}\` From User ${
                      message.author.username
                    }; (ID (${message.author.id})\`\`\``
                  );
                  m.delete();
                  credits[author].credits += Math.floor(
                    -resulting.toLocaleString()
                  );
                  credits[mentionn.id].credits += Math.floor(
                    +resulting.toLocaleString()
                  );
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                  essss.delete();
                }
              });
          });
        });
    } else {
      message.channel.send(
        `**:x: | Error , Please Command True Ex: \`${prefix}credits [MentionUser] [Balance]\`**`
      );
    }
  }//『CR』亗〆Ť I G E R〆亗#0245
  
//====================================//

  if (args[0].toLowerCase() === `${prefix}daily`) {
let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
if (Blacklist === 'on') {
  let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle(`**❌ | __Error 404__**`);
  message.channel.send(embed).then(z => z.delete(100000000));
  return
}
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send(
        `**:stopwatch: |  ${
          message.author.username
        }, your daily :dollar: credits refreshes in ${pretty(times, {
          verbose: true
        })}.**`
      );
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 530, 350, 720, 436, 618, 864, 415, 374, 834);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:atm:  | ${message.author.username}, you received your 💵 ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
}); //『CR』亗〆Ť I G E R〆亗#0245

//====================================//

client.on("message", async message => {
  let TIGER = message.content.split(" ")[0].substring(prefix.length);
  let mention = message.mentions.users.first() || message.author;
  if (TIGER === "add") {
    let args = message.content.split(" ");
    if (!tiger.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += +args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`**Done, Adedd Money For :** \`${args[1]}\``);
    //『CR』亗〆Ť I G E R〆亗#0245
    
//====================================//

  } else if (TIGER === "remove") {
    let args = message.content.split(" ");
    if (!tiger.includes(message.author.id)) return;
    if (!args[1] || isNaN(args[1])) return message.reply("**Type Credit**");
    if (!credits[mention.id]) return;
    credits[mention.id].credits += -args[1];
    fs.writeFileSync("./credits.json", JSON.stringify(credits));
    console.log(credits[mention.id]);
    message.reply(`**Done, Remove Money For : \`${args[1]}\`**`);
  }
});//『CR』亗〆Ť I G E R〆亗#0245

//====================================//

client.on("message", async message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g); // 
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;  // 
    if(message.content.indexOf(prefix) !== 0) return; // 
 
if (command == "leave") { 
 
if(message.author.id != `725730288629579901`) return message.reply("**Sorry, you don't have permission to use this!**");  // 
 
       
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`); // 
        let definedGuild = client.guilds.get(args[0]) // 
        if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`); // 
        client.guilds.get(args[0]).leave() // 
        .catch(error => { return message.reply(error.message) }) // 
    }    
})//『CR』亗〆Ť I G E R〆亗#0245


