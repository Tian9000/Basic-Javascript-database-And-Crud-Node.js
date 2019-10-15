// import MesinHitung from './MesinHitung'

// const Pi = 3.14;
// var mh = new MesinHitung();
// mh.tambah(10).kurang(5).result(); 
// mh.tambah(3).kali(4).bagi(6).result();
// mh.x = 7;
// console.log(`nilai sekarang : ${mh.x}`);
// mh.kali(2).kali(Pi).result();
// mh.x = 7;
// mh.pangkat().kali(Pi).result();
// mh.x = 4;
// mh.exponent(3).result();
// mh.akarpangkat2().result();


import MesinHitung from './MesinHitung';

const Pi = 3.14;
var mh = new MesinHitung();
mh.add(10).subtract(5).result(); // 1 + 10 - 5 = 6
mh.add(3).multyply(4).divide(6).result();  // current result is 2 then the mhutate is : 6 +3 * 4 / 6 = 6
mh.x = 7; // set jari-jari 7
console.log('nilai sekarang : ${mh.x}');
mh.multyply(2).multyply(Pi).result(); // keliling lingkaran dengan jari-jari 7 => Pi X r = 44
mh.x = 7; // set jari-jari 7
mh.square().multyply(Pi).result(); // luas lingkaran dengan jari-jari 7 => 2 x Pi x r = 44
mh.x = 4;
mh.exponent(3).result();  // 4 pangkat 3 = 64
mh.squareRoot().result(); // akar pangkat 2 dari 64 = 8
