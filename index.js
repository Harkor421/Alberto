const Discord = require("discord.js");
const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION",] });
const prefix = "_"
const paginationEmbed = require('discord.js-pagination');
const mechv = "**v = Velocity | t = Time | s = Distance Travelled | a = Acceleration | u = Initial Velocity | F = Force | m = Mass | P = Power | f = Friction | N = Normal Force | W = Work | ρ = Momentum | j = Impulse | E,p = Potential Energy | E,k = Kinetic Energy| k = Spring Constant | w = Weight | n = Efficiency**"
const thermalv = "**A = Area | C = Heat Capacity | c = Specific Heat Capacity | E,k = Kinetic Energy | E,p = Potential Energy | F = Force | k,B = Boltzmann’s Constant | L = Latent Heat | m = Mass | N = Amount of Molecules | n = Moles | N,A = Avogadro’s Constant | P = Power | p = Pressure | Q = Heat | R = Ideal Gas Constant | T = Temperature | t = Time | U = Internal Energy | V = Volume | W = Work |**" ;
const circularv = "**a = Acceleration | F,C = Centripetal Force| G = Gravitational Constant | g = Gravitational Field | M = Larger Mass | m = Smaller Mass | r = Radius | T = Tension | ፐ = Period | V = Gravitational Potential | v = Velocity | ω = Angular Velocity**" ;
const nukev = "**c = Speed of Light | E = Energy | f = Frequency | h = Planck's Constant | m = Mass | λ = Wavelength |**" ;
const energyv = "**A = Area | α = Albedo | E = Energy | E,d = Energy density | E,s = Specific energy | e = Emissivity | h = Height | I = Intensity | m = Mass | P = Power | P,B = Power of Body | P,Bb = Power of Blackbody | P,I = Incident Power | P,S = Scattered Power | ρ = Density | Q = Flow Rate | r = Radius | σ = Stefan-Boltzmann Constant | T = Temperature | t = Time | V = Volume | v = Velocity**" ;

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
    .setDescription(`**1. Measurements and uncertainties (coming soon)** \n\n **2. Mechanics → _mech** \n\n **3. Thermal Physics → _thermal** \n\n **4. Waves (coming soon)** \n\n **5. Electricity and magnetism (coming soon)** \n\n **6. Circular motion and gravitation → _circular** \n\n **7. Atomic, nuclear and particle physics → _nuke ** \n\n **8. Energy production → _energy**`)
   
message.channel.send(glossary);
}

if (message.content.startsWith(prefix + "mech")) {    
        const { MessageEmbed } = require('discord.js');
     

        const velocity = new MessageEmbed() 
        .setAuthor('MECHANICS', '', '')
        .setColor('#fffafa')
        .setTitle("Velocity Formulae")
        .setDescription(mechv)
        .setImage('https://media.discordapp.net/attachments/758054030063697951/808027088879484938/unknown.png')
       

        const distance = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Distance Travelled Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801190293776105552/unknown.png?width=200&height=302')

        const initial = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Initial Velocity Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)
        .setImage('https://i.ibb.co/8DVJCT1/u.png')
       

        const acceleration = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Acceleration Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801191053046186034/unknown.png?width=146&height=301')
       
        const time = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Time Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)        
        .setImage('https://media.discordapp.net/attachments/758102244905582613/801191183828385832/unknown.png?width=213&height=293')

        const work = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Work Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)
        .setImage('https://media.discordapp.net/attachments/484471959623696394/806663219438682153/unknown.png?width=177&height=194')

        const power = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Power Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)      
        .setImage('https://media.discordapp.net/attachments/484471959623696394/806666113005387836/unknown.png?width=113&height=156')

        const impulse = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Impulse Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)
        .setImage('https://media.discordapp.net/attachments/484471959623696394/806671308985073675/unknown.png?width=98&height=107')

        const kineticenergy = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Kinetic Energy Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)
        .setImage('https://media.discordapp.net/attachments/484471959623696394/806673795867344956/unknown.png?width=165&height=162')

        const force = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Force Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807235842623406090/unknown.png?width=116&height=242')
        
        const normal = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Normal Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)        
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807057177293488208/unknown.png?width=173&height=100')

        const friction = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Friction Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)        
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807053865500409856/unknown.png?width=116&height=96')

        const potential = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Potential Energy Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)        
        .setImage('https://media.discordapp.net/attachments/484471959623696394/807056545745207336/unknown.png?width=170&height=157')

        const efficiency = new MessageEmbed() 
        .setColor('#fffafa')
        .setTitle("Efficiency Formulae")
        .setAuthor('MECHANICS', '', '')
        .setDescription(mechv)        
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


        if (message.content.startsWith(prefix + "size")) {
            var size = Client.guilds.cache.size
            const embed3= new Discord.MessageEmbed()
                .setColor('#008000')
                .setTitle('Estadísticas de Albertico')
                .setAuthor('Harkor', 'https://i.pinimg.com/originals/c2/da/c2/c2dac21232cc540a50e539c75da7d095.gif', 'https://discord.js.org/%27')
                .setDescription('Meta de 75 servidores')
                .setThumbnail('https://i.gifer.com/FE.gif%27')
                .addFields(
                    { name: 'Cuantos servidores usan a Albertico', value: '$size' },
                    { name: '' + size, value: '--->' },

                )
                .addField('Se aceptan sugerencias', 'Instagram: harkorfn', true)
                .setTimestamp()
                .setFooter('Espero que disfrutes el bot!', 'https://lh3.googleusercontent.com/ogw/ADGmqu9vEiBnruOw5eKD-pRdPqg1Oz9EH3db19s6CZE=s32-c-mo%27');
                 message.author.send(embed3);
    }

        if (message.content.startsWith(prefix + "thermal")) {    
            const { MessageEmbed } = require('discord.js');
         
    
            const heat = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Heat Formulae")
            .setDescription(thermalv)
            .setImage('https://media.discordapp.net/attachments/484471959623696394/807063792251961345/unknown.png?width=108&height=227')

            const heatcapacity = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Heat Capacity Formulae")
            .setDescription(thermalv)
            .setImage('https://cdn.discordapp.com/attachments/758054030063697951/808038132535656509/unknown.png')

            const specificheatcapacity = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Specific Heat Capacity Formulae")
            .setDescription(thermalv)
            .setImage('https://cdn.discordapp.com/attachments/758054030063697951/808038358801973288/unknown.png')

            const temperature = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Temperature Formulae")
            .setDescription(thermalv)
            .setImage('https://cdn.discordapp.com/attachments/758054030063697951/808038725493587988/unknown.png')

            const mass = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Mass Formulae")
            .setDescription(thermalv)
            .setImage('https://cdn.discordapp.com/attachments/758054030063697951/808038909249716274/unknown.png')

            const power = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Power Formulae")
            .setDescription(thermalv)
            .setImage('https://media.discordapp.net/attachments/758054030063697951/808039665416405052/unknown.png')
    
            const volume = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Volume Formulae")
            .setDescription(thermalv)
            .setImage('https://media.discordapp.net/attachments/758053041273438340/811773077042102289/unknown.png')

            const pressure = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Pressure Formulae")
            .setDescription(thermalv)
            .setImage('https://media.discordapp.net/attachments/758053041273438340/811783700864958484/unknown.png')

            const moles = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Moles Formulae")
            .setDescription(thermalv)
            .setImage('https://cdn.discordapp.com/attachments/758053041273438340/811784514103017492/unknown.png')

            const internalenergy = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Internal Energy Formulae")
            .setDescription(thermalv)
            .setImage('https://cdn.discordapp.com/attachments/758053041273438340/811786266621771806/unknown.png')

            const kineticenergy = new MessageEmbed() 
            .setAuthor('THERMAL ENERGY', '', '')
            .setColor('#fffafa')
            .setTitle("Internal Energy Formulae")
            .setDescription(thermalv)
            .setImage('https://cdn.discordapp.com/attachments/758053041273438340/811787411150340146/unknown.png')
    
            const emojiList = ["◀️", "▶️"];
    
            const timeout = '120000'; 
    
            const pages = [
              heat,
              heatcapacity,
              specificheatcapacity,
              temperature, 
              mass,
              power,
              volume,
              pressure,
              moles,
              internalenergy,
              kineticenergy
            ];
    
            paginationEmbed(message, pages, emojiList, timeout);
    
            }

            if (message.content.startsWith(prefix + "circular")) {    
                const { MessageEmbed } = require('discord.js');
             
        
                
    
                const velocity = new MessageEmbed() 
                .setAuthor('CIRCULAR MOTION AND GRAVITATION', '', '')
                .setColor('#fffafa')
                .setTitle("Velocity Formulae")
                .setDescription(circularv)
                .setImage('https://discord.com/channels/758016566502883422/758054030063697951/839306705124982796')

                

                const emojiList = ["◀️", "▶️"];
        
                const timeout = '120000'; 
        
                const pages = [
                  centripetalforce,
                  velocity,
                  angularvelocity,
                  period,
                  radius,

                ];
        
                paginationEmbed(message, pages, emojiList, timeout);
        
                }

            if (message.content.startsWith(prefix + "nuke")) {    
                const { MessageEmbed } = require('discord.js');
             
        
                const energy = new MessageEmbed() 
                .setAuthor('ATOMIC, NUCLEAR AND PARTICLE PHYSICS', '', '')
                .setColor('#fffafa')
                .setTitle("Energy Formulae")
                .setDescription(nukev)
                .setImage('https://cdn.discordapp.com/attachments/758102244905582613/823241455199191131/unknown.png')
    
                const mass = new MessageEmbed() 
                .setAuthor('ATOMIC, NUCLEAR AND PARTICLE PHYSICS', '', '')
                .setColor('#fffafa')
                .setTitle("Speed Formulae")
                .setDescription(nukev)
                .setImage('https://cdn.discordapp.com/attachments/758102244905582613/823239866455556138/unknown.png')
    
                const wavelength = new MessageEmbed() 
                .setAuthor('ATOMIC, NUCLEAR AND PARTICLE PHYSICS', '', '')
                .setColor('#fffafa')
                .setTitle("Frequency Formulae")
                .setDescription(nukev)
                .setImage('https://cdn.discordapp.com/attachments/758102244905582613/823236697759547442/unknown.png')
    
                const frequency = new MessageEmbed() 
                .setAuthor('ATOMIC, NUCLEAR AND PARTICLE PHYSICS', '', '')
                .setColor('#fffafa')
                .setTitle("Wavelength Formulae")
                .setDescription(nukev)
                .setImage('https://cdn.discordapp.com/attachments/758102244905582613/823239618849013780/unknown.png')
    


                const emojiList = ["◀️", "▶️"];
        
                const timeout = '120000'; 
        
                const pages = [
                  energy,
                  mass,
                  wavelength, 
                  frequency,
                  
                ];
        
                paginationEmbed(message, pages, emojiList, timeout);
        
                }
    
            if (message.content.startsWith(prefix + "energy")) {   
                    const { MessageEmbed } = require('discord.js');
                 
            
                    const specificenergy = new MessageEmbed() 
                    .setAuthor('Energy Production', '', '')
                    .setColor('#fffafa')
                    .setTitle("Specific Energy Formulae")
                    .setDescription(energyv)
                    .setImage('https://cdn.discordapp.com/attachments/758102244905582613/823248121596870696/unknown.png')

                    const energydensity = new MessageEmbed() 
                    .setAuthor('Energy Production', '', '')
                    .setColor('#fffafa')
                    .setTitle("Energy Density Formulae")
                    .setDescription(energyv)
                    .setImage('https://cdn.discordapp.com/attachments/758102244905582613/823248367152529438/unknown.png')

                    const density = new MessageEmbed() 
                    .setAuthor('Energy Production', '', '')
                    .setColor('#fffafa')
                    .setTitle("Density Formulae")
                    .setDescription(energyv)
                    .setImage('https://cdn.discordapp.com/attachments/758102244905582613/823248774130434078/unknown.png')

                    const power = new MessageEmbed() 
                    .setAuthor('Energy Production', '', '')
                    .setColor('#fffafa')
                    .setTitle("Power")
                    .setDescription(energyv)
                    .setImage('https://cdn.discordapp.com/attachments/758102244905582613/823246225557291098/unknown.png')
                    
                    const emojiList = ["◀️", "▶️"];
    
                    const timeout = '120000'; 
            
                    const pages = [
                      specificenergy,
                      energydensity,
                      density,
                      power,
                
                     
                    ];
                    paginationEmbed(message, pages, emojiList, timeout);
            }
}
    catch (err) {
        console.log("Error with the commmands")
    }

})


Client.login(process.env.TOKEN); 



    
  