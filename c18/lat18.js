const readline = require('readline');
const Table = require('cli-table');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('university.db');
console.log('==============================================');
console.log('Welcome to Universitas Pendidikan Indonesia');
console.log('Jalan Setia Budi No. 225');
console.log('==============================================');
//daftarAccount();
Login();

function Login() {
  rl.question('Username : ', (username) => {
    db.all(`SELECT * FROM ACCOUNT Where Username = '${username}'`, (err, row) => {

      if (row.length > 0) {
        console.log('==================')
        password();
      } else {
        Login();
      }
    })
  })

}

function password() {
  rl.question('Password : ', (pass) => {
    db.all(`SELECT * FROM ACCOUNT Where Password = '${pass}'`, (err, row) => {
      if (row.length > 0) {
        console.log('Welcome, Tian. Your acces level is: Admin');
        menuUtama()
      } else {
        password()
      }
    })
  })

}

function menuUtama() {
  console.log("==============================================");
  console.log("Silahkan pilih opsi di bawah ini");
  console.log("[1] Mahasiswa");
  console.log("[2] Jurusan");
  console.log("[3] Dosen");
  console.log("[4] Mata kuliah");
  console.log("[5] Kontrak");
  console.log("[6] Keluar");
  console.log("==============================================");

  rl.question('Masukkan salah satu nomor dari opsi : ', (daftar) => {
    switch (daftar) {
      case '1':
        mahasiswa();
        break;
      case '2':
        jurusan();
        break;
      case '3':
        dosen();
        break;
      case '4':
        matakuliah();
        break;
      case '5':
        kontrak();
        break;
      case '6':
        keluar();
        break;
      default:
        menuUtama()
        break;
    }
  })

}

function mahasiswa() {
  console.log('==============================================');
  console.log("silahkan pilih opsi di bawah ini");
  console.log("[1] daftar murid");
  console.log("[2] cari murid");
  console.log("[3] tambah murid");
  console.log("[4] hapus murid");
  console.log("[5] Kembali");
  console.log("==============================================");
  rl.question('Masukkan salah satu no. dari opsi diatas : ', (nomor) => {

    switch (nomor) {
      case '1':
        daftarMurid()
        break;
      case '2':
        cariMurid();
        break;
      case '3':
        tambahMurid();
        break;
      case '4':
        hapusMurid();
        break;
      case '5':
        menuUtama()
        break;
      default:
        console.log('masukkan salah satu no. dari opsi diatas');
        mahasiswa()
        break;

    }
  })
}


//daftarMurid = () => {
function daftarMurid() {
  db.all("SELECT * FROM mahasiswa", (err, row) => {
    //console.log(row);

    var table = new Table({
      head: ['NIM', 'Nama', 'Alamat', 'Jurusan']
      , colWidths: [10, 20, 20, 20]
    });

    row.forEach((data) => {
      //console.log('data',data);

      table.push(
        [data.NIM, data.NAMA, data.ALAMAT, data.JURUSAN]
      );
    })

    console.log(table.toString());
    mahasiswa()

  });
}



//cariMurid = () => {
function cariMurid() {
  rl.question('Masukan nim Mahasiswa  : ', (nim) => {

    db.all(`SELECT * FROM mahasiswa where NIM = '${nim}'`, (err, row) => {
      //console.log(row);
      if (row.length > 0) {
        console.log('student detail');
        console.log('==============================================');
        //console.log(row.NIM, row.NAMA, row.ALAMAT, row.JURUSAN);
        console.log['NIM', 'Nama', 'Alamat', 'Jurusan'];
      }
      if (row.length == 0) {
        console.log(`Mahasiswa dengan NIM '${nim}' tidak terdaftar`);
        cariMurid();
      } else {
        console.log('NIM :' + row[0].NIM);
        console.log('NAMA :' + row[0].NAMA);
        console.log('UMUR :' + row[0].UMUR);
        console.log('ALAMAT :' + row[0].ALAMAT);
        console.log('JURUSAN :' + row[0].JURUSAN);
        mahasiswa()
      }
    });

  });
}

//tambahMurid = () => {
function tambahMurid() {
  console.log("==============================================");
  console.log("Lengkapi data di bawah ini:");
  rl.question('NIM : ', (nim) => {
    rl.question('Nama : ', (nama) => {
      rl.question('Umur : ', (umur) => {
        rl.question('Jurusan : ', (jurusan) => {
          rl.question('Alamat : ', (alamat) => {
            db.run(`INSERT INTO mahasiswa VALUES ('${nim}','${nama}', '${umur}', '${jurusan}', '${alamat}')`, (err) => {
              if (err) {
                console.log('Gagal menambah data');
                tambahMurid()
              } else {
                console.log('==============================================')
                daftarMurid();
              }
            })
          })
        })
      })
    })
  })
}

//hapusMurid = () => {
function hapusMurid() {
  rl.question('Masukan NIM mahasiswa yang akan dihapus : ', (nim) => {
    db.run(`DELETE FROM mahasiswa where NIM = '${nim}'`);
    console.log(`Mahasiswa dengan NIM: ${nim} telah dihapus`);
    console.log('==============================================');
    daftarMurid();
  });
}



function jurusan() {
  //console.log('Welcome, Tian. Your access level is; ADMIN');
  console.log('==============================================');
  // console.log('Masukkan salah satu no. dari opsi diatas : ');
  // console.log("==============================================");
  console.log("silahkan pilih opsi di bawah ini");
  console.log("[1] daftar jurusan");
  console.log("[2] cari jurusan");
  console.log("[3] tambah jurusan");
  console.log("[4] hapus jurusan");
  console.log("[5] Kembali");
  console.log("==============================================");
  rl.question('Masukkan salah satu no. dari opsi diatas : ', (nomor) => {

    switch (nomor) {
      case '1':
        daftarJurusan()
        break;
      case '2':
        cariJurusan();
        break;
      case '3':
        tambahJurusan();
        break;
      case '4':
        hapusJurusan();
        break;
      case '5':
        menuUtama()
        break;
      default:
        console.log('masukkan salah satu no. dari opsi diatas');
        mahasiswa()
        break;

    }
  })
}

//daftarJurusan = () => {
function daftarJurusan() {
  db.all("SELECT * FROM JURUSAN", (err, row) => {
    //console.log(row);

    var table = new Table({
      head: ['KODE_JURUSAN', 'NAMA_JURUSAN']
      , colWidths: [10, 10]
    });

    row.forEach((data) => {
      //console.log('data',data);

      table.push(
        [data.KODE_JURUSAN, data.NAMA_JURUSAN]
      );
    })

    console.log(table.toString());
    jurusan()

  });
}

//cariJurusan = () => {
function cariJurusan() {
  rl.question('Masukan KODE_JURUSAN  : ', (KODE_JURUSAN) => {

    db.all(`SELECT * FROM JURUSAN where KODE_JURUSAN = '${KODE_JURUSAN}'`, (err, row) => {
      //console.log(row);
      if (row.length > 0) {
        console.log('JURUSAN detail');
        console.log('==============================================');
        //console.log(row.NIM, row.NAMA, row.ALAMAT, row.JURUSAN);
        console.log['KODE_JURUSAN', 'NAMA_JURUSAN'];
      }
      if (row.length == 0) {
        console.log(`JURUSAN dengan KODE_JURUSAN '${KODE_JURUSAN}' tidak terdaftar`);
        cariJurusan();
      } else {
        console.log('KODE JURUSAN :' + row[0].KODE_JURUSAN);
        console.log('NAMA JURUSAN :' + row[0].NAMA_JURUSAN);
        jurusan()
      }
    });

  });
}

//tambahJurusan = () => {
function tambahJurusan() {
  console.log("==============================================");
  console.log("Lengkapi data di bawah ini:");
  rl.question('KODE JURUSAN : ', (KODE_JURUSAN) => {
    rl.question('NAMA JURUSAN : ', (NAMA_JURUSAN) => {
      db.run(`INSERT INTO JURUSAN VALUES ('${KODE_JURUSAN}','${NAMA_JURUSAN}')`, (err) => {
        if (err) {
          console.log('Gagal menambah data');
          tambahJurusan()
        } else {
          console.log('==============================================')
          daftarJurusan();
        }
      })
    })
  })

}

//hapusJurusan = () => {
function hapusJurusan() {
  rl.question('Masukan KODE_JURUSAN yang akan dihapus : ', (KODE_JURUSAN) => {
    db.run(`DELETE FROM JURUSAN where KODE_JURUSAN = '${KODE_JURUSAN}'`);
    console.log(`JURUSAN dengan KODE_JURUSAN: ${KODE_JURUSAN} telah dihapus`);
    console.log('==============================================');
    daftarJurusan();
  });
}

function dosen() {
  console.log('==============================================');
  console.log("silahkan pilih opsi di bawah ini");
  console.log("[1] daftar dosen");
  console.log("[2] cari dosen");
  console.log("[3] tambah dosen");
  console.log("[4] hapus dosen");
  console.log("[5] Kembali");
  console.log("==============================================");
  rl.question('Masukkan salah satu no. dari opsi diatas : ', (nomor) => {

    switch (nomor) {
      case '1':
        daftarDosen()
        break;
      case '2':
        cariDosen();
        break;
      case '3':
        tambahDosen();
        break;
      case '4':
        hapusDosen();
        break;
      case '5':
        menuUtama()
        break;
      default:
        console.log('masukkan salah satu no. dari opsi diatas');
        dosen()
        break;

    }
  })
}

//daftarDosen = () => {
function daftarDosen() {
  db.all("SELECT * FROM dosen", (err, row) => {
    //console.log(row);

    var table = new Table({
      head: ['NIP_DOSEN', 'NAMA']
      , colWidths: [10, 20]
    });

    row.forEach((data) => {
      //console.log('data',data);

      table.push(
        [data.NIP_DOSEN, data.NAMA]
      );
    })

    console.log(table.toString());
    dosen()

  });
}

//cariDosen = () => {
function cariDosen() {
  rl.question('Masukan Nip_ Dosen  : ', (NIP_DOSEN) => {

    db.all(`SELECT * FROM Dosen where NIP_DOSEN = '${NIP_DOSEN}'`, (err, row) => {
      //console.log(row);
      if (row.length > 0) {
        console.log('DOSEN detail');
        console.log('==============================================');
        //console.log(row.NIM, row.NAMA, row.ALAMAT, row.JURUSAN);
        console.log['NIP_DOSEN', 'Nama'];
      }
      if (row.length == 0) {
        console.log(`Dosen dengan NIP_DOSEN '${NIP_DOSEN}' tidak terdaftar`);
        cariDosen();
      } else {
        console.log('NIP_DOSEN :' + row[0].NIP_DOSEN);
        console.log('NAMA :' + row[0].NAMA);
        dosen()
      }
    });

  });
}

//tambahDosen = () => {
function tambahDosen() {
  console.log("==============================================");
  console.log("Lengkapi data di bawah ini:");
  rl.question('NIP_DOSEN : ', (NIP_DOSEN) => {
    rl.question('Nama : ', (nama) => {
      db.run(`INSERT INTO Dosen VALUES ('${NIP_DOSEN}','${nama}')`, (err) => {
        if (err) {
          console.log('Gagal menambah data');
          tambahDosen()
        } else {
          console.log('==============================================')
          daftarDosen();
        }
      })
    })
  })
}

//hapusDosen = () => {
function hapusDosen() {
  rl.question('Masukan NIP_DOSEN yang akan dihapus : ', (NIP_DOSEN) => {
    db.run(`DELETE FROM dosen where NIP_DOSEN = '${NIP_DOSEN}'`);
    console.log(`Dosen dengan NIP_DOSEN: ${NIP_DOSEN} telah dihapus`);
    console.log('==============================================');
    daftarMurid();
  });
}

function matakuliah() {
  console.log('==============================================');
  console.log("silahkan pilih opsi di bawah ini");
  console.log("[1] daftar matakuliah");
  console.log("[2] cari matakuliah");
  console.log("[3] tambah matakuliah");
  console.log("[4] hapus matakuliah");
  console.log("[5] Kembali");
  console.log("==============================================");
  rl.question('Masukkan salah satu no. dari opsi diatas : ', (nomor) => {

    switch (nomor) {
      case '1':
        daftarMatakuliah()
        break;
      case '2':
        cariMatakuliah();
        break;
      case '3':
        tambahMatakuliah();
        break;
      case '4':
        hapusMatakuliah();
        break;
      case '5':
        menuUtama()
        break;
      default:
        console.log('masukkan salah satu no. dari opsi diatas');
        dosen()
        break;

    }
  })
}

//daftarMatakuliah = () => {
function daftarMatakuliah() {
  db.all("SELECT * FROM matakuliah", (err, row) => {
    //console.log(row);

    var table = new Table({
      head: ['KODE_MATAKULIAH', 'NAMA_MATAKULIAH', 'SKS']
      , colWidths: [10, 30, 5]
    });

    row.forEach((data) => {
      //console.log('data',data);

      table.push(
        [data.KODE_MATAKULIAH, data.NAMA_MATAKULIAH, data.SKS]
      );
    })

    console.log(table.toString());
    matakuliah()

  });
}

//cariMatakuliah = () => {
function cariMatakuliah() {
  rl.question('Masukan Kode_Matakuliah  : ', (KODE_MATAKULIAH) => {

    db.all(`SELECT * FROM Matakuliah where Kode_Matakuliah = '${KODE_MATAKULIAH}'`, (err, row) => {
      //console.log(row);
      if (row.length > 0) {
        console.log('Matakuliah detail');
        console.log('==============================================');
        //console.log(row.NIM, row.NAMA, row.ALAMAT, row.JURUSAN);
        console.log['KODE_MATAKULIAH', 'NAMA_MATAKULIAH', 'SKS'];
      }
      if (row.length == 0) {
        console.log(`Matakuliah dengan Kode_Matakuliah '${KODE_MATAKULIAH}' tidak terdaftar`);
        cariMatakuliah();
      } else {
        console.log('Kode_Matakuliah :' + row[0].KODE_MATAKULIAH);
        console.log('NAMA_MATAKULIAH :' + row[0].NAMA_MATAKULIAH);
        console.log('SKS :' + row[0].SKS);
        matakuliah()

      }
    });

  });
}

//tambahMatakuliah = () => {
function tambahMatakuliah() {
  console.log("==============================================");
  console.log("Lengkapi data di bawah ini:");
  rl.question('KODE_MATAKULIAH : ', (KODE_MATAKULIAH) => {
    rl.question('NAMA_MATAKULIAH : ', (NAMA_MATAKULIAH) => {
      rl.question('SKS : ', (SKS) => {
        db.run(`INSERT INTO MATAKULIAH VALUES ('${KODE_MATAKULIAH}','${NAMA_MATAKULIAH}', '${SKS}')`, (err) => {
          if (err) {
            console.log('Gagal menambah data');
            tambahMatakuliah()
          } else {
            console.log('==============================================')
            daftarMatakuliah();
          }
        })
      })

    })
  })
}

//hapusMatakuliah = () => {
function hapusMatakuliah() {
  rl.question('Masukan KODE_MATAKULIAH yang akan dihapus : ', (KODE_MATAKULIAH) => {
    db.run(`DELETE FROM MATAKULIAH where KODE_MATAKULIAH = '${KODE_MATAKULIAH}'`);
    console.log(`MATAKULIAH dengan KODE_MATAKULIAH: ${KODE_MATAKULIAH} telah dihapus`);
    console.log('==============================================');
    daftarMatakuliah();
  });
}

function kontrak() {
  //console.log('Welcome, Tian. Your access level is; ADMIN');
  console.log('==============================================');
  // console.log('Masukkan salah satu no. dari opsi diatas : ');
  // console.log("==============================================");
  console.log("silahkan pilih opsi di bawah ini");
  console.log("[1] daftar kontrak");
  console.log("[2] cari kontrak");
  console.log("[3] tambah kontrak");
  console.log("[4] hapus kontrak");
  console.log("[5] Kembali");
  console.log("==============================================");
  rl.question('Masukkan salah satu no. dari opsi diatas : ', (nomor) => {

    switch (nomor) {
      case '1':
        daftarKontrak()
        break;
      case '2':
        cariKontrak();
        break;
      case '3':
        tambahKontrak();
        break;
      case '4':
        hapusKontrak();
        break;
      case '5':
        menuUtama()
        break;
      default:
        console.log('masukkan salah satu no. dari opsi diatas');
        mahasiswa()
        break;

    }
  })
}

//daftarKontrak = () => {
function daftarKontrak() {
  db.all("SELECT * FROM KONTRAK", (err, row) => {
    //console.log(row);

    var table = new Table({
      head: ['ID', 'NIM', 'KODE_MATAKULIAH', 'NIP_DOSEN', 'NILAI']
      , colWidths: [5, 10, 10, 10, 4]
    });

    row.forEach((data) => {
      //console.log('data',data);

      table.push(
        [data.ID, data.NIM, data.KODE_MATAKULIAH, data.NIP_DOSEN, data.NILAI]
      );
    })

    console.log(table.toString());
    kontrak()

  });
}

//cariKontrak = () => {
function cariKontrak() {
  rl.question('Masukan NIM   : ', (nim) => {

    db.all(`SELECT * FROM KONTRAK where NIM = '${nim}'`, (err, row) => {
      //console.log(row);
      if (row.length > 0) {
        console.log('KONTRAK detail');
        console.log('==============================================');
        //console.log(row.NIM, row.NAMA, row.ALAMAT, row.JURUSAN);
        console.log['NIM', 'KODE_MATAKULIAH', 'NIP_DOSEN', 'NILAI'];
      }
      if (row.length == 0) {
        console.log(`Mahasiswa dengan NIM '${nim}' tidak terdaftar`);
        cariKontrak();
      } else {
        console.log('NIM :' + row[0].NIM);
        console.log('KODE_MATAKULIAH :' + row[0].KODE_MATAKULIAH);
        console.log('NIP_DOSEN :' + row[0].NIP_DOSEN);
        console.log('NILAI :' + row[0].NILAI);
        kontrak()
      }
    })
  });
}

//tambahKontrak = () => {
function tambahKontrak() {
  console.log("==============================================");
  console.log("Lengkapi data di bawah ini:");
  rl.question('NIM : ', (nim) => {
    rl.question('KODE_MATAKULIAH : ', (KODE_MATAKULIAH) => {
      rl.question('NIP_DOSEN : ', (NIP_DOSEN) => {
        rl.question('NILAI : ', (NILAI) => {
          db.run(`INSERT INTO KONTRAK (NIM,KODE_MATAKULIAH,NIP_DOSEN,NILAI) VALUES ('${nim}','${KODE_MATAKULIAH}', '${NIP_DOSEN}', '${NILAI}')`, (err) => {
            if (err) {
              console.log('Gagal menambah data');
              tambahKontrak()
            } else {
              console.log('==============================================')
              daftarKontrak();

            }
          })
        })
      })
    })
  })
}



//hapusKontrak = () => {
function hapusKontrak() {
  rl.question('Masukan ID KONTRAK yang akan dihapus : ', (ID) => {
    db.run(`DELETE FROM Kontrak where ID = '${ID}'`);
    console.log(`KONTRAK dengan ID: ${ID} telah dihapus`);
    console.log('==============================================');
    daftarKontrak();
  });
}
