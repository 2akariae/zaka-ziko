// instagram.com/212.mks

const handler = async (m, { conn, text }) => {
  let [left, right] = text.split('|')
  if (!left) left = ''
  if (!right) right = ''

  const more = '\u200B'
  const readMore = more.repeat(4000)

  conn.reply(
    m.chat,
    left + '\n' + readMore + '\n' + right,
    m
  )
}

handler.command = /^(readmore)$/i
export default handler
