const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini >'
});

rl.prompt();

rl.on('line', (sentence) => {
   console.log(`hasil konversi:'${sentencesManipulation(sentence.trim())}'`);
    rl.prompt();
})
rl.on('close', ()=>{
    console.log('Good bye!');
    process.exit(0);
})

function stringManipulation(word) {
    var benar = word.charAt(0);

    if (benar.includes('a') || benar.includes('i') || benar.includes('u') || benar.includes('e') || benar.includes('o')) {
        return word;
    } else {
        var salah = benar;
        var salah1 = word.substr(1);
        return salah1 + salah + 'nyo';
    }
}

function sentencesManipulation(sentence) {
    var sams = sentence.split(' ');
    var hasil = []
    for (var i = 0; i < sams.length; i++) {
        hasil.push(stringManipulation(sams[i]));
    }
    
    return(hasil.join(' '));
}

sentencesManipulation('ibu pergi ke pasar bersama aku');


