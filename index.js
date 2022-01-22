// controller/post is the thing that handles all the api requests
// route/post is the thing that sets the pages for controller/post
require('./config/express')();

const db = require('quick.db')

const { Client, Intents } = require('discord.js')
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES]})

client.on('ready', () => {
    console.log('[bot] ready')
    client.user.setActivity('slash commnds')
})

client.on('interactionCreate', async interaction =>{
    if(!interaction.isCommand()) return;
    if(interaction.commandName === 'shorten'){
        await interaction.deferReply()
        const penis = `/` + require('./emojify')(10)
        const format = () =>{
            if(!interaction.options.get('url').value.startsWith('https://')) return `https://${interaction.options.get('url').value}`
            return interaction.options.get('url').value
        }
        const thing = {} //i tried setting the key name directly as 'penis' and it didnt work
        thing[penis] = format()
        db.push('url', thing)
        await interaction.editReply({content: `localhost:3000${penis}`, ephemeral: true})
        console.log(db.get('url'))
    }
})

client.login(process.env.token)
/*
yureru gaitou shino tsuku ame
fureru kanjou kankaku no terepasu
maigo no futari wa kontakuto
kokoro wa koi o shirimashita

taitoroopu tsugihagi no seifuku
juudo no disukomyunikeeshon
gankou sekishoku ni kirakira
nanika ga okoru munasawagi

eirian watashi eirian
anata no kokoro o madowaseru
mazariau uchuu no inryoku de
kanjiteru kimochi wa tokimeki

eirian anata no eirian
hikiau kokoro wa nogare rarenai
anata ni mi taiken ageru
i sekai no hate made tokimeki suki

tentou to shoutou o kurikaeshiteiru keikoutou
choujouna konton ga shizuka ni anata o mushibanda
heikouna shingou wa tokuiten ni yori majiwatta
souzou genjitsu moushinshou kanousei honnou

shindoroomu hitori kiri yona yona
kuusou kaku marude gurimowa
saachiraito sakeru fuyuuki
"mada anata wa subete o shiritai?"

eirian watashi eirian
anata no kokoro o madowaseru
hitomi ni utsuranai inryoku ni kizuite yo watashi wa

eirian anata no eirian
fureaeba kizu wa nidoto kienai
furisosogu musuu no inseki mo
tokimeku kokoro ni wa todokanai!

eirian futari wa eirian
takanaru kimochi ga osae rarenai!
anata wa mi kakunin seimeitai
i sekai no hate made anata ga suki
*/