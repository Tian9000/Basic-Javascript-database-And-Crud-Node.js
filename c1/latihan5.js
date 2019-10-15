function stringManipulation(word) {
    var rasional = word.charAt(0);


    if (rasional.includes('a') || rasional.includes('i') || rasional.includes('u') || rasional.includes('e') || rasional.includes('o')) {
        console.log(word);
        
    }else{
        var unrasional = word.charAt(0);
        var unrasional2 = word.substr(1);
        console.log(unrasional2 + unrasional + 'nyo');
        

    }
}
stringManipulation('ayam');
stringManipulation('bebek');
stringManipulation('ikan');
