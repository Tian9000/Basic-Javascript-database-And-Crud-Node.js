 class MesinHitung{

    constructor(){
      this.x = 1;
      this.Pi = 3.14;
    }
  
    // menambahkan nilai pada nilai x
    add(num){
      this.x += num;
      return this;
    }
  
    // mengurang nilai x
    kurang(num){
      this.x -= num;
      return this;
    }
  
    // membagi nilai x
    bagi(num){
      this.x = this.x/num;
      return this;
    }
  
    // mengkalikan nilai x
    kali(num){
      this.x *= num;
      return this;
    }
  
    // mengehasilkan nilai akar dari x
    akar(){
      this.x = Math.sqrt(this.x);
      return this;
    }
  
    // menghasilkan nilai pangkat sebanyak n dari x
    eksponen(num){
      this.x = Math.pow(this.x, num);
      return this;
    }
  
    // menghasilkan nilai kuadrat dari x
    kuadrat(num){
      this.x = Math.pow(this.x, 2);
      return this;
    }
  
    // menampilkan nilai x
    result(){
      console.log(this.x);
      return this;
    }
  }
  

  //import MesinHitung from './MesinHitung';

  var mh = new MesinHitung();
  mh.add(10).kurang(5).result(); // 1 + 10 - 5 = 6
  mh.add(3).kali(4).bagi(6).result(); // ((6 + 3) x 4) : 6 = 6
  mh.x = 7;
  console.log(`nilai sekarang : ${mh.x}`); // nilai sekarang : 7
  mh.kali(2).kali(mh.Pi).result(); // 7 x 2 x Pi = 44
  mh.x = 7;
  mh.kuadrat().kali(mh.Pi).result(); // 7 kuadrat x Pi = 155
  mh.x = 4;
  mh.eksponen(3).result(); // 4 x 4 x 4 = 64
  mh.akar().result(); // akar 64 = 8