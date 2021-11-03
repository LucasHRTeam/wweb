const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const conn = new Client();

conn.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

conn.on('ready', () => {
    console.log('Client is ready!');
});

conn.initialize();
