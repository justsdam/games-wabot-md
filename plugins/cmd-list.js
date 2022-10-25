import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
🦉 : Halo sobat samupahita!, untuk menggunakan fitur yang ada pada bot, ketikkan command yang ada dalam list berikut ini.

╭─「 🤷‍♂️ *Truth Or Dare* 」
│ /truth
│ /dare
│ /hilih
╰────
╭─「 🦹 *Anonymous Chat* 」
│ /start : _Untuk memulai chat_
│ /next : _Beralih ke pengguna lain_
│ /leave : _Untuk mengakhiri chat_
╰────
╭─「 🎮 *Game* 」
│ /family100
│ /tebakkata
│ /siapakahaku
│ /caklontong
│ /math
╰────
╭─「 🤖 *Sticker Maker* 」
│ /stiker + _Reply Pesan_
│ /stikergif + _Reply Pesan_
│ /toimg + _Reply Pesan_
│ /attp + _Kalimat Stiker_
╰────
╭─「 🔎 *Search* 」
│ /google + _Keywords_
│ /pinterest + _Keywords_
│ /lirik + _Keywords_
╰────
╭─「 🔮 *Magic Ball* 」
│ /apakah + _Pertanyaan Kalian_
│ /kapankah + _Pertanyaan Kalian_
│ /howganteng + _Nama Orang_
│ /howcantik + _Nama Orang_
│ /jadian
│ /bucin
╰────
`.trim(), null, {
        mentions: Object.values(db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['listcmd']
handler.tags = ['database']
handler.command = [/^(menu|mulai|help|hai|\?)$/i]

export default handler
