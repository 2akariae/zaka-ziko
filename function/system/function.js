import { watchFile, unwatchFile } from 'fs';

import chalk from 'chalk';

import { fileURLToPath } from 'url';

import fs from 'fs';

import axios from 'axios';

import fetch from 'node-fetch';

/*close gc */

export async function closegc() {

    const moment = (await import('moment-timezone')).default;

    let data = fs.readFileSync("./function/database/grup.json");

    let json = JSON.parse(data);

    const time = moment.tz('Africa/Casablanca').format('HH:mm');

    for (let schedule of json) {

        try {

            let anon = (await conn.groupMetadata(schedule)).announce;

            if (time === '00:00' && anon === false) {

                await conn.groupSettingUpdate(schedule, 'announcement');

                await conn.delay(1000);

                await conn.reply(schedule, '*[moul chi gallkom]*\n\n```wa khona 3ya chwya ta lsba7 wrje3!```', null);

            } else if (time === '05:30' && anon === true) {

                await conn.groupSettingUpdate(schedule, 'not_announcement');

                await conn.delay(1000);

                await conn.reply(schedule, '*[ moul chi]*\n\n```sbah llah 3awtani arak l fri3 rras.```', null);

            } else if (time === '18:00' && anon === false) {

                await conn.groupSettingUpdate(schedule, 'announcement');

                await conn.delay(1000);

                await conn.reply(schedule, '*[ flan l flani]*\n\n```sahbi sir drb chi dora bllati!```', null);

            } else if (time === '18:10' && anon === true) {

                await conn.groupSettingUpdate(schedule, 'not_announcement');

                await conn.delay(1000);

                await conn.reply(schedule, '*[ mouul chi]*\n\n```baaaack arak l rrwiiina w lblbala!```', null);

            }

        } catch (e) {

            json.splice(json.indexOf(schedule), 1);

            fs.writeFileSync('./function/database/grup.json', JSON.stringify(json));

            return json;

        }

    }

}

// بقية الوظائف كما هي بدون تعديل

export async function regex(string) {

    return string.replace(/[.*=+:\-?^${}()|[\]\\]|\s/g, '\\$&');

}

export async function delay(ms) {

    return new Promise(res => setTimeout(res, ms));

}

// جميع الدوال الأخرى تم الاحتفاظ بها

// بدون أي أكواد تتعلق بـ ytdl-core
