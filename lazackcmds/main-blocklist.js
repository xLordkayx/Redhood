let handler = async (m, { conn }) => {
  await conn
    .fetchBlocklist()
    .then(async data => {
      let txt = `*≡𝐑𝐄𝐃𝐇𝐎𝐎𝐃 𝐌𝐃 𝐁𝐎𝐓 List *\n\n*Total :* ${data.length}\n\n┌─⊷\n`
      for (let i of data) {
        txt += `▢ @${i.split('@')[0]}\n`
      }
      txt += '└──────𝐑𝐄𝐃𝐇𝐎𝐎𝐃 𝐌𝐃 𝐁𝐎𝐓─────'
      return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
    })
    .catch(err => {
      console.log(err)
      throw 'no numbers blocked'
    })
}

handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock']

export default handler
