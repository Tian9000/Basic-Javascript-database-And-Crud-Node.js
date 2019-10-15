function stringManipulation(word) {
    var repsol = word.charAt(0);
    
    if (repsol.includes('a') || repsol.includes('i') || repsol.includes('u') || repsol.includes('e') || repsol.includes('o')) {
        return word;
    } else {
        var pertamax = repsol
        var pertalite = word.substr(1);
        return pertalite + pertamax + 'nyo';
        
    }
}

function sentencesManipulation(sentence) {
    var ubah = sentence.split(' ');
    // console.log(ubah); untuk melihat hasil var ubah di array
    
    var pinus = [];
    for (var i = 0; i < ubah.length; i++) {
        pinus.push(stringManipulation(ubah[i]));
    }
     console.log(pinus.join(' '));
    
}    


sentencesManipulation('ibu pergi ke pasar bersama aku');