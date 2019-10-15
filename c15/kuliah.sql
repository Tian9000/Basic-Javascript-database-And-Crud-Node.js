

1.select mahasiswa.nama, jurusan.nama_jurusan from mahasiswa inner join jurusan on mahasiswa.jurusan = jurusan.kode_jurusan;
            ATAU
   select * from mahasiswa inner join jurusan on mahasiswa.jurusan = jurusan.kode_jurusan;       

2.select * from MAHASISWA where umur < 20;
3.select mahasiswa .*, kontrak.nilai from kontrak inner join mahasiswa on mahasiswa.nim = kontrak.nim where nilai = "B" or nilai = "A" ;
      
  
4.SELECT mahasiswa.nama,SUM(matakuliah.sks) as total FROM mahasiswa INNER JOIN kontrak ON mahasiswa.nim=kontrak.nim INNER JOIN matakuliah ON matakuliah.kode_matakuliah=kontrak.kode_matakuliah group by mahasiswa.nim having total > 10;

5.SELECT mahasiswa.nama,matakuliah.nama_matakuliah FROM mahasiswa INNER JOIN kontrak ON mahasiswa.nim=kontrak.nim INNER JOIN matakuliah ON matakuliah.kode_matakuliah=kontrak.kode_matakuliah WHERE nama_matakuliah = 'DATA MINING';
            ATAU


6.SELECT NIP_DOSEN, COUNT(NIM) FROM KONTRAK GROUP BY NIP_DOSEN;
         ATAU
select dosen.* , count(kontrak.nip_dosen) as total from dosen, kontrak 
where dosen.nip_dosen = kontrak.nip_dosen group by dosen.nip_dosen;      

7. select * from mahasiswa order by umur asc;

8. SELECT MAHASISWA.nama AS NAMA_MAHASISWA,matakuliah.nama_matakuliah,dosen.NAMA AS NAMA_DOSEN,KONTRAK.NILAI,jurusan.nama_jurusan FROM KONTRAK INNER JOIN MAHASISWA ON MAHASISWA.NIM=KONTRAK.NIM INNER JOIN matakuliah ON matakuliah.kode_matakuliah=kontrak.kode_matakuliah INNER JOIN dosen ON dosen.nip_dosen=kontrak.nip_dosen INNER JOIN jurusan ON jurusan.kode_jurusan = mahasiswa.jurusan WHERE NILAI = "D" OR NILAI = "E";
 

      ATAU

SELECT MAHASISWA.nama,matakuliah.nama_matakuliah,dosen.nama,KONTRAK.NILAI,jurusan.nama_jurusan FROM KONTRAK INNER JOIN MAHASISWA ON MAHASISWA.NIM=KONTRAK.NIM INNER JOIN matakuliah ON matakuliah.kode_matakuliah=kontrak.kode_matakuliah INNER JOIN dosen ON dosen.nip_dosen=kontrak.nip_dosen INNER JOIN jurusan ON jurusan.kode_jurusan = mahasiswa.jurusan WHERE NILAI = "D" OR NILAI = "E";









SELECT MAHASISWA .*, MATAKULIAH.NAMA_MATAKULIAH from MATAKULIAH INNER JOIN MAHASISWA ON MAHASISWA.NIM = MATAKULIAH.NIM Where NAMA_MATAKULIAH = 'DATA MINING';
