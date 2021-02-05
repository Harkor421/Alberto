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
    .setAuthor('Albertico by Smaciasc709 and Harkor', '', '')
    .setDescription(`**1. Measurements and uncertainties (coming soon)** \n\n **2. Mechanics -----> _mech** \n\n **3. Thermal Physics ------> _thermal** \n\n **4. Waves (coming soon)** \n\n **5. Electricity and magnetism (coming soon)** \n\n **6. Circular motion and gravitation (coming soon)** \n\n **7. Atomic, nuclear and particle physics (coming soon)** \n\n **8. Energy production (coming soon)**`)
   
message.channel.send(glossary);
}

if (message.content.startsWith(prefix + "mech")) {    
        const { MessageEmbed } = require('discord.js');
     

        const velocity = new MessageEmbed() 
        .setAuthor('MECHANICS', '', '')
        .setColor('#fffafa')
        .setTitle("Velocity Formulae")
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://i.ibb.co/km1Wr17/unknown.png')
       

        const distance = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Distance Travelled Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801190293776105552/unknown.png?width=200&height=302')

        const initial = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Initial Velocity Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://i.ibb.co/8DVJCT1/u.png')
       
       

        const acceleration = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Acceleration Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801191053046186034/unknown.png?width=146&height=301')
       
        const time = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Time Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801191183828385832/unknown.png?width=213&height=293')

        const work = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Work Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/806663219438682153/unknown.png?width=177&height=194')

        const power = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Power Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/806666113005387836/unknown.png?width=113&height=156')

        const impulse = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Impulse Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/806671308985073675/unknown.png?width=98&height=107')

        const kineticenergy = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Kinetic Energy Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/806673795867344956/unknown.png?width=165&height=162')

        const force = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Force Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807235842623406090/unknown.png?width=116&height=242')
        
        const normal = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Normal Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807057177293488208/unknown.png?width=173&height=100')

        const friction = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Friction Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807053865500409856/unknown.png?width=116&height=96')

        const potential = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Potential Energy Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807056545745207336/unknown.png?width=170&height=157')

        const efficiency = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Efficiency Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription("**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal | W = Work | p = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**")
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807248643072589824/unknown.png')

        const emojiList = ["◀️", "▶️"];

        const timeout = '120000'; 

        const pages = [
            distance, 
            initial,
            velocity,
            acceleration,
            time,
            force,
            friction,
            normal,
            work,
            power,
            impulse,
            kineticenergy,
            potential,
            efficiency
        ];

        paginationEmbed(message, pages, emojiList, timeout);

        }

        if (message.content.startsWith(prefix + "thermal")) {    
            const { MessageEmbed } = require('discord.js');
         
    
            const heat = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Heat Formulae")
            .setDescription("**L= Latent Heat | t = Time | c = Specific Heat Capacity | C= Heat Capacity | P = Power |m = Mass | P = Power | W = Work | E,p = Potential Energy | E,k = Kinetic Energy| T = Temperature**")
            .setImage('https://media.discordapp.net/attachments/484471959623696394/807063792251961345/unknown.png?width=108&height=227')

            const heatcapacity = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Heat Capacity Formulae")
            .setDescription("**L= Latent Heat | t = Time | c = Specific Heat Capacity | C= Heat Capacity | P = Power |m = Mass | P = Power | W = Work | E,p = Potential Energy | E,k = Kinetic Energy| T = Temperature**")
            .setImage('https://media.discordapp.net/attachments/484471959623696394/807063835092975666/unknown.png?width=90&height=98')

            const specificheatcapacity = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Specific Heat Capacity Formulae")
            .setDescription("**L= Latent Heat | t = Time | c = Specific Heat Capacity | C= Heat Capacity | P = Power |m = Mass | P = Power | W = Work | E,p = Potential Energy | E,k = Kinetic Energy| T = Temperature**")
            .setImage('https://media.discordapp.net/attachments/484471959623696394/807063904295321610/unknown.png?width=88&height=105')

            const temperature = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Temperature Formulae")
            .setDescription("**L= Latent Heat | t = Time | c = Specific Heat Capacity | C= Heat Capacity | P = Power |m = Mass | P = Power | W = Work | E,p = Potential Energy | E,k = Kinetic Energy| T = Temperature**")
            .setImage('https://media.discordapp.net/attachments/484471959623696394/807063959168352286/unknown.png?width=92&height=100')

            const masss = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Mass Formulae")
            .setDescription("**L= Latent Heat | t = Time | c = Specific Heat Capacity | C= Heat Capacity | P = Power |m = Mass | P = Power | W = Work | E,p = Potential Energy | E,k = Kinetic Energy| T = Temperature**")
            .setImage('https://media.discordapp.net/attachments/484471959623696394/807064030975623168/unknown.png?width=94&height=161')
    
           
    
            const emojiList = ["◀️", "▶️"];
    
            const timeout = '120000'; 
    
            const pages = [
              heat,
              heatcapacity,
              specificheatcapacity,
              temperature, 
              masss,
            ];
    
            paginationEmbed(message, pages, emojiList, timeout);
    
            }
    

  
}
    catch (err) {
        console.log("Error with the commmands")
    }

})


Client.login(process.env.TOKEN); 



    
  