class CarFactory {

  jumlah (jumlahmobil) {
    return `jumlah mobil ${jumlahmobil}`
  }
}

let Mobil1 = new CarFactory();
console.log(Mobil1.jumlah(Math.floor(Math.random() * Math.floor(5))));


class Car {
  pintu (pintumobil) {
    return `jumlah pintu mobil ${pintumobil}`
  }
  roda (rodamobil) {
    return `jumlah roda mobil ${rodamobil}`
  }
  ban (banmobil) {
    return `jumlah ban mobil ${banmobil}`
  }
  kursi (kursimobil) {
    return `jumlah kursi mobil ${kursimobil}`
  }
  garansi (garansimobil) {
    return ` masa garansi mobil ${garansimobil}`
  }
}


class Tyre extends Car {
  honda (vlegmobil) {
    return ` mobil honda ${vlegmobil}`
  }

  yamaha (vlegmobil) {
    return ` mobil yamaha ${vlegmobil}`
  }
}

let Tyre1 = new Tyre();
console.log(Tyre1.honda('jazz'));
console.log(Tyre1.pintu('2 pintu'));
console.log(Tyre1.roda('4 roda'));
console.log(Tyre1.ban('4 ban'));
console.log((Tyre1.kursi('8 kursi')));
console.log((Tyre1.garansi('10 tahun')));


console.log('--------------------------------------------------')

console.log(Tyre1.yamaha('vixsion'));
console.log(Tyre1.pintu('4 pintu'));
console.log(Tyre1.roda('4 roda'));
console.log(Tyre1.ban('4 ban'));
console.log((Tyre1.kursi('4 kursi')));
console.log(Tyre1.garansi('8 tahun'));











