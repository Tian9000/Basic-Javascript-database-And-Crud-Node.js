function stringManipulation(word) {
    var benar = word.charAt(0);
    //console.log(benar);
    
    if (benar.includes('a') || benar.includes('i') || benar.includes('u') || benar.includes('e') || benar.includes('o')) {
        console.log(word);
    } else {
        var salah = benar;
        var salah1 = word.substr(1);
        console.log(salah1 + salah + 'nyo');
    }
}

stringManipulation('ayam');
stringManipulation('bebek');
stringManipulation('kucing');
stringManipulation('ikan');
stringManipulation('udang');
stringManipulation('serigala');
