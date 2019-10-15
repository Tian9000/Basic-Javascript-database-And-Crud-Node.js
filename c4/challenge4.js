function indexPrime(param) {
    function checkPrime(n) {
        if (n < 2) {
            return false;
        }
        for (var ii = 2; ii < n; ii++) {
            if (n % ii == 0) {
                return false;
            }
        }
        return true;
    }
    let hitung = 0;
    let angka = 2;

    while (hitung < param) {
        if (checkPrime(angka)) {
            hitung++;
        }
        angka++
    }
    return angka - 1;
}
console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));



