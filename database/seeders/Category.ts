import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Category.createMany([
      {
        code:"1",
        name:'Administrasi Klaim',
        description:'Kronologis, Kelas Rawat Inap, Barcode Alkes, Ketepatan Tanggal Pelayanan, PDF Tidak Ada/Tidak Lengkap, SITB'
      },
      {
        code:'2',
        name:'Pengisian Resume Medis',
        description:"Indikasi Rawat Inap, Indikasi Diagnosis / Tindakan,Dasar Koding dan Penegakan Diagnosis, Ketidaksesuaian Diagnosis dan hasil pemeriksaan fisik, Ketidaksesuaian Diagnosisi dan Penunjang Medis, Ketidaksesuaian Penanganan dan Tindakan Pengobatan "
      },
      {
        code:'3',
        name:'Kelengkapan Berkas Penunjang',
        description:'Bukti hasil penunjang (Lab, Rontgen, USG), Laporan Operasi (Bukti hasil tindakan), '
      },
      {
        code:'4',
        name: "Ketepatan Kode",
        description:'Kode diagnosis / tindakan kurang tepat'
      }
    ])
  }
}
