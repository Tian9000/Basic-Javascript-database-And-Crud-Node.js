let fs = require('fs');
if(!process.argv[2]){
    console.log('Tolong sertakan nama file sebagai inputan soalnya');
    process.exit(1);
}
let kuis = 'Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar';
console.log(kuis);

let read_string1 = 'Pertanyaan: ';
let read_string2 = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

 let hitung1 = 0;
 let wrong = 0;

 console.log(read_string1 + read_string2[hitung1].definition);


let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban:'
});

rl.prompt();



rl.on('line', (answer) => {
    if (answer == 'skip') {
        read_string2.push(read_string2[hitung1]);
        hitung1++
        console.log(read_string1 + read_string2[hitung1].definition);
        rl.prompt();
    } else {
        if (answer == read_string2[hitung1].term) {
            console.log('Anda Beruntung!')
            hitung1++;
            if (read_string2.length == hitung1) {
                rl.close()
            } else {
                console.log(read_string1 + read_string2[hitung1].definition);
            }

        } else {
            wrong++
            console.log(`Anda Kurang Beruntung! anda telah salah  ${wrong} kali, silahkan coba lagi.`);
        }
        rl.prompt();
    }

    

}).on('close', () => {
    console.log('Anda Berhasil!');
    process.exit(0);
});