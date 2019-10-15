class Tyre {
  constructor(merek, jumlah) {
      this.merek = merek;
      this.jumlah = jumlah;
  }
}
class Car {
  constructor(kursi, pintu, garansi, tahun, tipe, Tyre) {
      this.kursi = kursi;
      this.pintu = pintu;
      this.garansi = garansi;
      this.tahun = tahun;
      this.tipe = tipe;
      this.Tyre = Tyre;
  }
  expireGaransi(currentYears) {
      if (currentYears - this.garansi <= this.tahun) {
          console.log('garansi masih berlaku')
      } else {
          console.log('garansi habis')
      }
  }
}
class pajero extends Car {
  constructor(tahun) {
      (super(7, 4, 10, tahun, 'pajero', new Tyre('swallow', 4)))
  }
}
class fortuner extends Car {
  constructor(tahun) {
      (super(7, 4, 10, tahun, 'fortuner', new Tyre('swallow', 4)))
  }
}
class CarFactory {
  constructor() {
      this.pajerolist = [];
      this.fortunerlist = [];
  }
  pajeroProduced(tahun) {
      let totalpajero = CarFactory.getRandomInt();
      for (let i = 0; i < totalpajero; i++) {
          this.pajerolist.push(new pajero(tahun))
      }
  }

  productionResult() {
      console.log(`pajero telah diproduksi sebanyak${this.pajerolist.length}, yakni :`);
      for (let i = 0; i < this.pajerolist.length; i++) {
          console.log('pajero', this.pajerolist[i]);
      }
      console.log(`fortuner telah diproduksi sebanyak ${this.fortunerlist.length}, yakni:`);
      for (let i = 0; i < this.fortunerlist.length; i++) {
          console.log('fortuner', this.fortunerlist[i]);
      }
  }
  simulasi(tahun) {
      console.log('hasil simulasi untuk pajero,yakni:');
      for (let i = 0; i < this.pajerolist.length; i++) {
          console.log(this.pajerolist[i]);
          this.pajerolist[i].expireGaransi(tahun);
      }
      console.log('hasil simulasi untuk fortuner, yakni:');
      for (let i = 0; i < this.fortunerlist.length; i++) {
          console.log(this.fortunerlist[i]);
          this.fortunerlist[i].expireGaransi(tahun);
      }
  }
  static getRandomInt() {
      let min = 1
      let max = 5;
      return Math.floor(Math.random() * (max - min)) + min;
  }
}
let pajeroo = new CarFactory();

pajeroo.pajeroProduced(2015);
pajeroo.productionResult();
pajeroo.simulasi(2015);




