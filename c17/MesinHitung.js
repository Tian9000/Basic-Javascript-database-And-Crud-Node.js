//  export default class MesinHitung{

//     constructor(){
//         this.x = 10; // 10 MERUPAKAN ANGKA RANDOM
    
//     }

//     tambah(angka){
//         this.x += angka;
//         return this;

//     }
//     kurang(angka){
//         this.x -= angka;
//         return this;

//      }
//     bagi(angka){
//          this.x /= angka;
//         return this;

//     }
//     kali(angka){
//         this.x *= angka; 
//         return this;
//     }
//     pangkat(){
//         this.x = Math.pow(this.x,10); //10 merupakan angka random
//         return this;

//     }
//     exponent(angka){
//         this.x = Math.pow(this.x, angka);
//         return this;
//     }
//     akarpangkat2() {
//         this.x = Math.sqrt(this.x);
//         return this;
//     }
//     result(){
//         console.log(this.x);
//         return this;
//     }
// }


 



// //babel-node Run.js

// // const Pi = 3.14;
// // var mh = new MesinHitung();
// // mh.tambah(10).kurang(5).result(); 
// // mh.tambah(3).kali(4).bagi(6).result();
// // mh.x = 7;
// // console.log(`nilai sekarang : ${mh.x}`);
// // mh.kali(2).kali(Pi).result();
// // mh.x = 7;
// // mh.pangkat().kali(Pi).result();
// // mh.x = 4;
// // mh.exponent(3).result();
// // mh.akarpangkat2().result();
  

  
  
  
class MesinHitung {

    constructor() {
        this.x = 1;

    }

    // menambahkan nilai x
    add(num) {
        this.x += num;
        return this;
    }

    // mengurang inilai x
    subtract(num) {
        this.x -= num;
        return this;
    }

    // membagi nilai x
    divide(num) {
        this.x /= num;
        return this;
    }

    // mengkalikan nilai x
    multyply(num) {
        this.x *= num;
        return this;
    }

    // mengehasilkan nilai akar dari x
    squareRoot() {
        this.x = Math.sqrt(this.x);   // mengembalikan nilai akar kuadrat
        return this;
    }

    // // menghasilkan nilai pangkat sebanyak n dari x
    exponent(num) {
        this.x = Math.pow(this.x, num);    // mengembalikan niali x dari num
        return this;
    }

    // menghasilkan nilai kuadrat dari x
    square() {
        this.x = Math.pow(this.x, 2);
        return this;
    }
    // kelilingLingkaran() {
    //     this.x = (Math.pow(Pi)) * (this.x)
    //     return this;
    // }
    // luasLingkaran() {
    //     this.x = (Math.Pi) * (Math.pow(this.x, num))
    //     return this;
    // }

    // menampilkan nilai x
    result() {
        console.log(this.x);
        return this;
    }
}


export default MesinHitung;