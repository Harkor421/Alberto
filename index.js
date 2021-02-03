const Discord = require("discord.js");
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION",] });
const prefix = "_"
const paginationEmbed = require('discord.js-pagination');

const { MessageCollector } = require("discord.js-collector");

// Bot's Profile

Client.on('ready', (oldmember, newmember) => {
    console.log("Alberto operando");
    Client.user.setActivity("_help", {
        type: "PLAYING",
    });
});



// Text Commands

Client.on('message', async (message) => {

    try {

    if (!message.content.startsWith(prefix)) return;

if (message.content.startsWith(prefix + "help")){

    const glossary = new Discord.MessageEmbed() 
    
    .setColor('#fffafa')
    .setTitle("**Glossary**")
    .setAuthor('Albertico', '', '')
    .setDescription(`**1. Measurements and uncertainties (coming soon)** \n\n **2. Mechanics -----> _mech** \n\n **3. Thermal Physics (coming soon)** \n\n **4. Waves (coming soon)** \n\n **5. Electricity and magnetism (coming soon)** \n\n **6. Circular motion and gravitation (coming soon)** \n\n **7. Atomic, nuclear and particle physics (coming soon)** \n\n **8. Energy production**`)
   
message.channel.send(glossary);
}

if (message.content.startsWith(prefix + "mech")) {    
        const { MessageEmbed } = require('discord.js');
     

        const velocity = new MessageEmbed() 
        .setAuthor('MECHANICS', '', '')
        .setColor('#fffafa')
        .setTitle("Velocity Formulae")
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity**")
        .setImage('https://i.ibb.co/km1Wr17/unknown.png')
       

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
            distance, 
            initial,
            velocity,
            acceleration,
            time
        ];

        paginationEmbed(message, pages, emojiList, timeout);

        }

  
}
    catch (err) {
        console.log("Error with the commmands")
    }

})


Client.login(process.env.TOKEN); 



    
  