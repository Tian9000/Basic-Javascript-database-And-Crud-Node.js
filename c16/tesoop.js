
class CarFactory {

    jumlah (jumlahmobil) {
      return `jumlah mobil ${jumlahmobil}`
    }
  }
  
  let pabrikMobil = 
  
  
  
  
  class Car extends CarFactory{
      honda (y) {
        return `ini mobil merek  ${y}`
      } 
      pintu (pintuMobil) {
        return ` warna pintu ${pintuMobil}`
      }
      tempatDuduk (duduk) {
        return ` ini untuk  ${duduk}`
      }
  
  }

  
  
  class type extends CarFactory{
    jazz (x) {
      return `mobil korea ${x}`
    }
    garansi(garr) {
      return `garansi mobil ${garr}`
    } 
  }


  let types = new type();
  console.log(types.jazz('jazz'));
  console.log(types.garansi('10 tahun'));
  
  
  
  
  
  
  
  