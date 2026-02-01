import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 m3lomat 3lya 」*\n\n
\n
*instagram:*\ninstagram.com/212.mks

*youtube:*\nyoutube.com/@0LHRCH

*https://wa.me/447346004549

*script bot :* github.com/2akariae

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
