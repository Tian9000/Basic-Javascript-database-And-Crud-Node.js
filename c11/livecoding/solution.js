console.log('selamat datang di permainan tebak kata, silahkan isi jabawan dengan benar ya');

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tebakan> '
});

let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
let hitung = 0;
let wrong = 0;

console.log(`pertanyaan: ${data[hitung].definition}`);

rl.prompt();

rl.on('line', (jawaban) => {
    
    if (jawaban == data[hitung].term) {
        wrong = 0;
        console.log('anda benar');
        if (data.length > hitung) {
            hitung++;
            console.log(`pertanyaan: ${data[hitung].definition}`);
        } else {
            console.log('Anda Menang');
            wrong = 0;
            rl.close()
        }
    }
    else {
        wrong++;
        console.log(`Anda Kurang Beruntung! anda telah ${wrong} kali, silahkan coba lagi.`)
    }
    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});
