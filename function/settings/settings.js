import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*
Setting
*/
global.setting = {
 clearSesi: false, // trash cleaner sessions 
 clearTmp: true, // tmp trash cleaner
 addReply: true, // create with thumbnail in message
 idgc: '120363315668824185@g.us' // id gc buat join only
 }

global.info = {
 nomerbot : '212665760003',
 pairingNumber : '212777466518',
 figlet: 'FULANO', // create a start console display
 nomorwa : '212665760003',
 nameown : 'NOUREDDINE',
 nomerown : '212665760003',
 packname : 'FULANO  ',
 author : 'zaka-ziko',
 namebot : '乂 FULANO',
 wm : 'FULANO.',
 stickpack : 'fulano',
 stickauth : 'zaka-ziko',
 jid: '@s.whatsapp.net'
}

// Thumbnail 
global.media = {
 ppKosong : 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 didyou : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 rulesBot : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 thumbnail : 'https://files.catbox.moe/yn68oz.jpeg',
 thumb : 'https://files.catbox.moe/yn68oz.jpeg',
 logo : 'https://files.catbox.moe/yn68oz.jpeg',
 unReg : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 registrasi : 'https://files.catbox.moe/yn68oz.jpeg',
 confess : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 access : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 tqto : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 spotify : 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
 weather : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 gempaUrl : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 akses : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 wel : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 good : 'https://graph.org/file/6627d3691b3f3b96023e6-990baf2cb34df13020.jpg',
 sound: 'https://pomf2.lain.la/f/ymca9u8.opus'
}
// Social media
global.url = {
 sig: 'https://instagram.com/zaki_lhrx',
 sgh:  'https://snapchat.com/t/TEhPW0hu',
 sgc: 'https://wa.me/447346004549'
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/mamad',
 ptrakterr: '-',
 pdana: '0823427570'
}
// Info Wait
global.msg = {
 wait: '⏱️ *  waiiit asahbi*\n\> sber chwyaa 3afak...',
 eror: '🤖 *Information Bot*\n\> Sorry for the inconvenience in using *fulano*. There was an error in the system while executing the command.'
}
 
// api_id web suntik
global.apiId = {
 smm: '4524',
 lapak: '300672'
}

// Apikey
global.api = {
 user: '-', // api_id antinsfw 
 screet: '-', // api_screet nsfw after that, replace it yourself
 uptime: '-',
 xyro: '-',
 lol: 'GataDiosV2',
 smm: '-',
 lapak: '-',
 prodia: '-',
 bing: '1-HLkal9xPklSXn8H_NYBhugb9UnCJKJEzQp4Rk_PxP4xxBCqtm_Os-93cXF8mtFeqde_ZGjnx2C1MM4PCS0gH8mzdX5tJ5aoaDC4G0VruZATWvvOQlHs2UBDNID5PR4MtskWzX69idiBidGDqVwfNBNZYgqb3cgqkLbyEeZnWHxxrhO3es3O8YOI5wd8Y0a31_OiLKTAzwS1ba-wvcBP9khAHrUkuQpzXuoybpwfwpQ'

}
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    nightTeam: "https://api.tioxy.my.id",
    lol: "https://api.lolhumaan.xyz",
    smm: "https://smmnusantara.id",
    lapak: "https://panel.lapaksosmed.com"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "vRFLiyLPWu",
    "https://api.lolhumaan.xyz": "GataDiosV2"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
