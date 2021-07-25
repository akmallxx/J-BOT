const help = (prefix, copid, tanggal, jams, botname) => {
	return `「  *${botname}*  」

*⦿ Bot Prefix :* ${prefix} 
*⦿ Creator :* MBB
*⦿ Recode By :* Akmalzz
*⦿ Tanggal :* ${tanggal}
*⦿ Jam :* ${jams}

❒ *Kasus Covid-19 Indonesia*
   • *Terinfeksi :* ${copid[0].kasus}
   • *Kematian :* ${copid[0].kematian}
   • *Sembuh :* ${copid[0].sembuh}

❒ *Group Menu* 
   • *${prefix}listmsgmenu*
   
❒ *Group Menu* 
   • *${prefix}setname* <text>
   • *${prefix}setdesc* <text>
   • *${prefix}setpp* <img>
   • *${prefix}promote* <tag>
   • *${prefix}demote* <tag>
   • *${prefix}leave*
   • *${prefix}tagall* 
   • *${prefix}hidetag*
   • *${prefix}nsfw* <1/0>
   • *${prefix}welcome* <1/0>
   • *${prefix}listadmin*
   • *${prefix}antilink* <1/0>
   • *${prefix}add* <62×××>
   • *${prefix}kick* <tag mem>
   • *${prefix}group* <buka/tutup>

❑ *Nsfw Menu*
	• *${prefix}loli*
	• *${prefix}elf*
	• *${prefix}neko*
	• *${prefix}waifu*
	• *${prefix}cogan*
	• *${prefix}cecan*
	• *${prefix}shota*
	• *${prefix}husbu*
	• *${prefix}wallnime*
	• *${prefix}ahegao*
	• *${prefix}yaoi*
	• *${prefix}ecchi*
	• *${prefix}hentai*

❑ *Maker*
   • *${prefix}tomp3*
   • *${prefix}tovn*
   • *${prefix}sticker*
   • *${prefix}swm* <author|pack>
   • *${prefix}tovideo*
   • *${prefix}toimg*
   • *${prefix}tts* <text>

❑ *Downloader*
   • *${prefix}ytmp3* <url>
   • *${prefix}ytmp4* <url>
   • *${prefix}dafontdown* <url>
   • *${prefix}facebook* <url>
   • *${prefix}instagram* <url> <options>
   • *${prefix}tiktok* <url>
   • *${prefix}soundcloud* <url>
   • *${prefix}pinterest* <query>
   • *${prefix}play* <query> <options>
   • *${prefix}joox* <query>

❑ *Searching*
   • *${prefix}ytsearch* <query>
   • *${prefix}brainly* <query>
   • *${prefix}herolist*
   • *${prefix}herodetail* <nama hero>
   • *${prefix}dafontsearch* <query>
   • *${prefix}google* <query>
   • *${prefix}wiki* <query>
   • *${prefix}quotes* <query>
   • *${prefix}preview* <teks|ukuran>
   • *${prefix}ocr*

❑ *Owner*
   • *${prefix}banchat* <true/false>
   • *${prefix}restart*
   • *${prefix}setrprefix* <new prefix>
   • *${prefix}clearall*
   • *${prefix}bc* <text>
   • *${prefix}meadmin*
   • *${prefix}leave*
   • *${prefix}shutdown*
   • *>* <eval>
   • *$* <exec>
`}

exports.help = help
