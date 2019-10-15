var fs = require('fs');
var kuis = 'Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar'
console.log(kuis);


var read_string1 = 'Pertanyaan: ';
var read_string2 = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var hitung1 = 0;


console.log(read_string1 + read_string2[hitung1].definition);


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan:'
});

rl.prompt();

rl.on('line', (answer) => {
    if (answer == read_string2[hitung1].term) {
        console.log('Selamat Anda Benar!')
        hitung1++;
        if (read_string2.length == hitung1) {
            rl.close()
        } else {
            console.log(read_string1 + read_string2[hitung1].definition);
        }
    } else {
        console.log('Wkwkkwk, Anda Kurang Beruntung!');
    }

    rl.prompt();

    

}).on('close', () => {
    console.log('Hore Anda Menang!');
    process.exit(0);
})






