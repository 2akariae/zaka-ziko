import { addExif } from "../lib/sticker.js";

let handler = async (m, { conn, text }) => {
  if (!m.quoted) throw "tagi sticker";
  let stiker = false;
  try {
    let [packname, ...author] = text.split("|");
    author = (author || []).join("|");
    let mime = m.quoted.mimetype || "";
    if (!/webp/.test(mime))
      throw "tagi chi pic!";
    let img = await m.quoted.download();
    if (!img) throw "tagi stickerrrrrr";
    stiker = await addExif(img, packname || "", author || "");
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker)
      conn.sendFile(m.chat, stiker, "wm.webp", "", m, false, {
        asSticker: true,
      });
    else throw "Conversion failed";
  }
};
handler.help = ["wm"];
handler.tags = ["sticker"];
handler.command = /^(wm|take)$/i;
handler.limit = 1
export default handler;
