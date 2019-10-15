function pola(str) {
    var split1 = str.split("*");
    //console.log(split1);
    var angka1 = split1[0].trim();
    //console.log(angka1);

    var split2 = split1[1].split("=");
    //console.log(split2);

    var angka2 = split2[0].trim();
    //console.log(angka2);

    var angka3 = split2[1].trim();
    //console.log(angka3);


    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (parseInt(angka1.replace('#', i)) * parseInt(angka2) == parseInt(angka3.replace('#', j))) {
                return [i, j]
            }
        }
    }


}

console.log(pola("42#3 * 188 = 80#204"));
//result : [8, 5];

console.log(pola("8#61 * 895 = 78410#5"));
// result : [7, 9]
