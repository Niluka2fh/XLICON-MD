const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94779721235"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94779721235' 
global.devs = '94779721235';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBRNDRFcFcrdDRVQldtM1JBK3NZR2pFQk5sUkQ5QjlsYXFENGs1N3drbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01WU3JORldwZkdwSXk1UDhIdENvNUlnTHJHc1E3OXF3VzMwZGxaUCtVND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRXpSZTdZb0ZHQVc3V3lHa3dtcnY4S1VPZ3FrMytWSVo5QWpxYXZLWUdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLU3JzUURrSENxKy9SUUloTXBXT3hYSkhjS1hGSnlEKzBoNzlJeDhJUnhZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBMzlwUmN1Yzd4dWw5M2NxZnJ3b1JNWlpwbjR2K2lzODYzZ3ZTYkVwWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJWW00d1BGTDZYR0M0NlBENmtZcVBCM1lyL252YWFERnZoSEYvRi9JQkU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQbEoyUG9FSlZwTmNOY3BPbFNzZXpMZTNXa3k0NnJBKzVoUE1TYy9BcW16UnFkeTZEcWZUTUVZTkg0SEIvR01sZG5TYjVtWTBBYlVnMzNWTzhDSXlpQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExOCwiYWR2U2VjcmV0S2V5IjoiZTNkWWVVd292ZnJHNkxnV2ZOUmlCM0NOZWpJL0Q0cmZlSWcxWkhvblBPTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibDB3a24yTmFRbC1CamszdE9ma1ZpQSIsInBob25lSWQiOiJhMGVjNWE1ZC0wYTI3LTQ2MzEtODM5MC00MGJjZTlkMDcyMjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWdEcFNhS2pIbnprNXI4MzE3a3U4MXlNc2hBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5L3hOM2ZEVlVSQW9QYXdFbE51SVRRV1hqZXc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKTGFwdVFGRUk3c2phc0dHQXc9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVvNE5nbEtGRDR6ZU5yV0FjTzhnMFF0QzZuNmY3dTNzMHZoc1pCSEFrR0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRFTHJPcGtjZlVzZ2FRbmcxaVB6elJtR1RnVjlybkI1ajA2czV4ZXVRUmhmSFlFMzdnUDJRamxIaHcyMU8rOHM1ajF2UGtsbzA0RHRBVG01WmxQRkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIdEUwM3Q0V2FZL0V3ZXFqSWZkQ3dDWlF4ZXNpSG1KUlZnSzV3bjB4WmJub2FWRkpsd3dhcUMzVVpYdHVaSzFNNlltY0xQdUpuY1p0R3RWME0zdmZpQT09In0sIm1lIjp7ImlkIjoiOTQ3Nzk3MjEyMzU6MTlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzk3MjEyMzU6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnFPRFlKU2hRK00zamExZ0hEdklORUxRdXArbis3dDdOTDRiR1FSd0pCaCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTAxNzEwNX0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@avee..._',
  packname:  process.env.PACK_NAME || 'aveesha',
   
  botname:   process.env.BOT_NAME === undefined ? "1_avee_1" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'avee' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
