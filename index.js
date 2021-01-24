const Discord = require("discord.js");
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION",] });
const prefix = "_"
const paginationEmbed = require('discord.js-pagination');

const { MessageCollector } = require("discord.js-collector");

// Perfil del  bot

Client.on('ready', (oldmember, newmember) => {
    console.log("Alberto operando");
    Client.user.setActivity("_help", {
        type: "STREAMING",
        url: "https://www.twitch.tv/harkorfn"      
    });
});









// Text Commands

Client.on('message', async (message) => {

    try {

    if (!message.content.startsWith(prefix)) return;


    if (message.content.startsWith(prefix + "help")) {    
        console.log('Alguien esta usando al bot')  
        const { MessageEmbed } = require('discord.js');
        
        const glossary = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("**Glossary**")
        .setAuthor('Albertico', '', '')
        .setDescription(`**1. Measurements and uncertainties** \n\n **2. Mechanics** \n\n **3. Thermal Physics** \n\n **4. Waves** \n\n **5. Electricity and magnetism** \n\n **6. Circular motion and gravitation** \n\n **7. Atomic, nuclear and particle physics** \n\n **8. Energy production**`)
     

        const velocity = new MessageEmbed() 
        .setAuthor('MECHANICS', '', '')
        .setColor('#fffafa')
        .setTitle("Velocity Formulae")
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity**")
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801190917473173544/unknown.png?width=186&height=372')
       

        const distance = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Distance Travelled Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass**")
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801190293776105552/unknown.png?width=200&height=302')

        const initial = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Initial Velocity Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass**")
        .setImage('https://i.ibb.co/8DVJCT1/u.png')
       
       

        const acceleration = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Acceleration Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass**")
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801191053046186034/unknown.png?width=146&height=301')
       
        const time = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Time Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass**")
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801191183828385832/unknown.png?width=213&height=293')

        const emojiList = ["◀️", "▶️"];

        const timeout = '120000'; 

        const pages = [
            glossary,
            distance, 
            initial,
            velocity,
            acceleration,
            time
        ];

        paginationEmbed(message, pages, emojiList, timeout);

        }
    


    if (message.content.startsWith(prefix + "velocity")) {
      const velocity = new Discord.MessageEmbed() 
      .setColor('#fffafa')
      .setTitle("Velocity Formulae")
      .setAuthor('Albert', '', '')
      .setDescription("v = Velocity | t = Time | s = Distance Travelled | a = Accelaration | u = Initial Velocity")
      .setImage('https://cdn.discordapp.com/attachments/484471959623696394/777592292060037130/velocidad.png')
      .setFooter('Albert is always right', '');
      message.channel.send(velocity)
    }
   
    if (message.content.startsWith(prefix + "acceleration")) {
        const velocity = new Discord.MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Acceleration Formulae")
        .setAuthor('Albert', '', '')
        .setDescription("v = Velocity | t = Time | s = Distance Travelled | a = Accelaration | u = Initial Velocity | F = Force | m = Mass")
        .setImage('https://cdn.discordapp.com/attachments/758102244905582613/777618773053538394/unknown.png')
        .setFooter('Albert is always right', '');
        message.channel.send(velocity)
      }

      if (message.content.startsWith(prefix + "time")) {
        const velocity = new Discord.MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Time Formulae")
        .setAuthor('Albert', '', '')
        .setDescription("v = Velocity | t = Time | s = Distance Travelled | a = Accelaration | u = Initial Velocity")
        .setImage('https://cdn.discordapp.com/attachments/758102244905582613/777594442860331018/unknown.png')
        .setFooter('Albert is always right', '');
        message.channel.send(velocity)
      }

      if (message.content.startsWith(prefix + "force")) {
        const velocity = new Discord.MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Force Formulae")
        .setAuthor('Albert', '', '')
        .setDescription("m = Mass | f = Friction | a = Accelaration | F = Force")
        .setImage('https://cdn.discordapp.com/attachments/758102244905582613/777594942574821386/unknown.png')
        .setFooter('Albert is always right', '');
        message.channel.send(velocity)
      }






    

    


  
}
    catch (err) {
        console.log("error con los comandos")
    }

})


Client.login("NzczMjQ3NjQ1MTMyMTI4MjU3.X6Gc_A.HNjoinDplHZjLtzAo5RWVshYXtk"); 



    
  