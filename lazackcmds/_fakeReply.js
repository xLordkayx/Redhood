
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/8324jm.jpg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://files.catbox.moe/8324jm.jpg', mediaType: 'VIDEO', description: 'support group', title: 'JOIN GROUP', body: 'support group', thumbnailUrl: 'https://files.catbox.moe/8324jm.jpg', sourceUrl: '' }}} 
	
	//reply link Github 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://files.catbox.moe/8324jm.jpg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'GITHUB', body: 'Keep bot alive', thumbnailUrl: 'https://imgur.com/a/4h1nYKM', sourceUrl: 'https://github.com/xlordkayx' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://files.catbox.moe/8324jm.jpg', mediaType: 'VIDEO', description: 'SUBSCRIBE : 𝐿𝛩𝑅𝐷𝛫𝛥𝑌 𝑇𝛯𝐶𝛨', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://files.catbox.moe/8324jm.jpg', sourceUrl: 'https://www.youtube.com/@xLordkayx' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://files.catbox.moe/8324jm.jpg', mediaType: 'VIDEO', description: 'Follow Channel', title: 'REDHOOD-BOT CHANNEL', body: 'To Get Updates About REDHOOD-BOT', thumbnailUrl: 'https://files.catbox.moe/8324jm.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VajNrqi7dmegpU2Yla1f' }}}
    
} 
export default handler
