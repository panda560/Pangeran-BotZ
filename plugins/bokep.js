let fs = require('fs')
let handler = async (m, { conn }) => {
	//if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	let stc = fs.readFileSync('./src/sukses.webp')
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m)
 conn.sendFile(m.chat, sukses, 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['bkp']
handler.tags = ['bokep']

handler.command = /^(bkp|bokep)$/i
handler.premium = true
handler.register = true
handler.limit = 5
handler.private = true

module.exports = handler
