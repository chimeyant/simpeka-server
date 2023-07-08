import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Doctor from 'App/Models/Doctor'

export default class DoctorSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Doctor.createMany([
      {
       "code": "K01",
       "name": "Afrizal, dr, Sp.BS"
      },
      {
       "code": "K02",
       "name": "Agung Indra D., dr,Sp.A.,M.Kes"
      },
      {
       "code": "K03",
       "name": "Ahmad Sukmana, dr, Sp.OT"
      },
      {
       "code": "K04",
       "name": "Anantha Sena, dr, Sp.THT-KL"
      },
      {
       "code": "K05",
       "name": "Anastasia Novitasari, dr, Sp.S"
      },
      {
       "code": "K06",
       "name": "ANRI FEBIARTI, DR, SP.AN"
      },
      {
       "code": "K07",
       "name": "Arnanda Noor, dr, SP.BS"
      },
      {
       "code": "K08",
       "name": "Astry Susanti, dr, Sp.OG."
      },
      {
       "code": "K09",
       "name": "Bayu Brahma, dr, Sp.B.(K) Onk"
      },
      {
       "code": "K10",
       "name": "Budhi A.Noor,dr.Sp.B,Subsp.BVE"
      },
      {
       "code": "K11",
       "name": "Defitra Nanda Sasmita, Sp.An"
      },
      {
       "code": "K12",
       "name": "Denny Setyadi, dr, Sp.B"
      },
      {
       "code": "K13",
       "name": "Dewi Ratih Cahyani, dr, Sp.S"
      },
      {
       "code": "K14",
       "name": "Elli Saur Mauli G, dr, Sp.OG."
      },
      {
       "code": "K15",
       "name": "Ervita Mediana, dr, Sp.U"
      },
      {
       "code": "K16",
       "name": "Erwindo Rinaldo, dr, Sp.PD."
      },
      {
       "code": "K17",
       "name": "Evelsha Azzahra, dr, Sp.P"
      },
      {
       "code": "K18",
       "name": "Fajriwan, dr, Sp.P"
      },
      {
       "code": "K19",
       "name": "Fragma Ady Sukma, dr, Sp.PD"
      },
      {
       "code": "K20",
       "name": "Geeta Maharani Ariati,dr,Sp.An"
      },
      {
       "code": "K21",
       "name": "Hadian Setia, dr, Sp.B"
      },
      {
       "code": "K22",
       "name": "Handre Putra, dr. SpA"
      },
      {
       "code": "K23",
       "name": "Harun Rosidi, dr,Sp.OT(k)spine"
      },
      {
       "code": "K24",
       "name": "Heriady Haeruddin, dr, Sp.An"
      },
      {
       "code": "K25",
       "name": "Ichsan Said, dr. Sp.A,. M.Kes"
      },
      {
       "code": "K26",
       "name": "Ilham Fauzi, dr, Sp. An"
      },
      {
       "code": "K27",
       "name": "Indera Noor Achmad, dr, Sp.JP"
      },
      {
       "code": "K28",
       "name": "Iqbal Ichsantyadi A, dr, Sp.PD"
      },
      {
       "code": "K29",
       "name": "Jonas Nara B.,dr,Sp.OG(K)KFM"
      },
      {
       "code": "K30",
       "name": "Koko Harnoko, dr, Sp.P"
      },
      {
       "code": "K31",
       "name": "M. ANGGORO JATI, DR, SP OT"
      },
      {
       "code": "K32",
       "name": "M. Dirham Djunaidi I, dr,Sp.OG"
      },
      {
       "code": "K33",
       "name": "Magdalena Denok LB, dr, Sp.B."
      },
      {
       "code": "K34",
       "name": "Marthino R, dr, Sp.PD, KHOM"
      },
      {
       "code": "K35",
       "name": "Muhamad Hilman, dr, Sp.THT-KL"
      },
      {
       "code": "K36",
       "name": "NADYA LEIFINA, DR, SP.A"
      },
      {
       "code": "K37",
       "name": "Ooki Nico Junior,dr,Sp.B(K)Onk"
      },
      {
       "code": "K38",
       "name": "Rachmadi Sri M, dr, Sp.OG"
      },
      {
       "code": "K39",
       "name": "Ramang Napu, dr, Sp.Jp., FIHA"
      },
      {
       "code": "K40",
       "name": "Ramoti Irawati M, dr, Sp.S"
      },
      {
       "code": "K41",
       "name": "Rizky Fawzi, dr. Sp.U"
      },
      {
       "code": "K42",
       "name": "Rosalina, dr, Sp.PD"
      },
      {
       "code": "K43",
       "name": "Ruzbih Bahtiar,dr.Sp.B,M.Biome"
      },
      {
       "code": "K44",
       "name": "Sri Nurbowo A,dr,Sp.BTKV.FIHA"
      },
      {
       "code": "K45",
       "name": "Sri Utami, dr, Sp.A., M.Kes."
      },
      {
       "code": "K46",
       "name": "Yeti Hariyati, dr, Sp.PD"
      },
      {
       "code": "K47",
       "name": "Yoeswar A Darisan, dr, Sp.S"
      },
      {
       "code": "K48",
       "name": "Zulfan, dr, Sp.PD, FINASIM"
      },
      {
       "code": "K49",
       "name": "Fx Edwin K, drg, M.Kes"
      },
      {
       "code": "K50",
       "name": "Sonia Redmana, drg"
      },
      {
       "code": "K51",
       "name": "Sara Saskia Djuanda, drg"
      },
      {
       "code": "K52",
       "name": "Riny Zoraya Rinaldy, drg, Sp. Perio"
      },
      {
       "code": "K53",
       "name": "Restu Permata Hati, drg"
      },
      {
       "code": "K54",
       "name": "Didi Mardian, drg, SpBM"
      },
      {
       "code": "K55",
       "name": "Desi Dwirinah, drg, MKKK"
      },
      {
       "code": "K56",
       "name": "Anisha Puspitarini, drg, Sp. KG"
      },
      {
       "code": "K57",
       "name": "Yuniar Pukuk Kesuma, dr, Sp.KJ(K)"
      },
      {
       "code": "K58",
       "name": "Ursula Hasan, dr, Sp. Ak"
      },
      {
       "code": "K59",
       "name": "Suherlan, dr, Sp.Rad"
      },
      {
       "code": "K60",
       "name": "Shanda Yudistiawan, dr"
      },
      {
       "code": "K61",
       "name": "Rudy Soedjono Dorestia, dr, Sp.M, Mkes"
      },
      {
       "code": "K62",
       "name": "Rosdiana, dr, R,MARS, Sp.Gk,AIFO K"
      },
      {
       "code": "K63",
       "name": "Risca Nosita Susilo, dr"
      },
      {
       "code": "K64",
       "name": "Ratna Ernita, dr"
      },
      {
       "code": "K65",
       "name": "Rahmatsjah Said, dr, Sp.KJ., MARS"
      },
      {
       "code": "K66",
       "name": "Puspo Edi Hapsari, dr"
      },
      {
       "code": "K67",
       "name": "Prima Caesarea Utama, dr"
      },
      {
       "code": "K68",
       "name": "Nurul Hasanah, dr"
      },
      {
       "code": "K69",
       "name": "Niniek Wiendayanthi, dr, Sp.Pk"
      },
      {
       "code": "K70",
       "name": "Nie Nyoman Diah Redyardani, dr"
      },
      {
       "code": "K71",
       "name": "Nelwan Filipus Tando, dr"
      },
      {
       "code": "K72",
       "name": "Natasya Meike Kambey, dr"
      },
      {
       "code": "K73",
       "name": "Nene Siti Nurhasanah, dr, Sp.Rad"
      },
      {
       "code": "K74",
       "name": "Meta Adriani, dr"
      },
      {
       "code": "K75",
       "name": "Marsita Endy Dhamayanti, dr, Sp.DV"
      },
      {
       "code": "K76",
       "name": "Maria Uli Silalahi, dr, MARS"
      },
      {
       "code": "K77",
       "name": "Laila Rose Foresta, dr, Sp.Rad"
      },
      {
       "code": "K78",
       "name": "Irfan, dr"
      },
      {
       "code": "K79",
       "name": "Intan Nevita O.B., dr, Sp.PA"
      },
      {
       "code": "K80",
       "name": "Igor Triprimanta G., dr"
      },
      {
       "code": "K81",
       "name": "Husdal Badri, Sp.BS, M.Kes"
      },
      {
       "code": "K82",
       "name": "Hidajat N. Iksan, Sp.M., dr"
      },
      {
       "code": "K83",
       "name": "Heny Agustina Purnomo, dr"
      },
      {
       "code": "K84",
       "name": "Gesti Pratiwi Herlambang P, dr"
      },
      {
       "code": "K85",
       "name": "George Dyland De Ussy W, dr"
      },
      {
       "code": "K86",
       "name": "Fitrianisa Burmana, dr"
      },
      {
       "code": "K87",
       "name": "Farhan Ahmad Najmi, dr"
      },
      {
       "code": "K88",
       "name": "Enel Rizka Aulia, dr"
      },
      {
       "code": "K89",
       "name": "Eko Bagus Wahyudi, dr, Sp.PK"
      },
      {
       "code": "K90",
       "name": "Edward, dr, M.Kes"
      },
      {
       "code": "K91",
       "name": "Dwi Endraningtias, dr"
      },
      {
       "code": "K92",
       "name": "Deviera Minelly Noor, dr, Sp.KF"
      },
      {
       "code": "K93",
       "name": "Dessytha Nathania Hudaja, dr"
      },
      {
       "code": "K94",
       "name": "Cintantya Prakasita D, dr"
      },
      {
       "code": "K95",
       "name": "Bambang Agustian, dr, Sp.PD., FINASIM"
      },
      {
       "code": "K96",
       "name": "Ayutrisna Annisa, dr"
      },
      {
       "code": "K97",
       "name": "Angga Primady, dr"
      },
      {
       "code": "K98",
       "name": "Andy Janitra Nasution, dr, Sp. Rad"
      },
      {
       "code": "K99",
       "name": "Alberthina Suripatty, dr, Sp.PK"
      },
      {
       "code": "K100",
       "name": "Ajeng Sekar Dewanty, dr"
      },
      {
       "code": "K101",
       "name": "Agus Mulyono, dr, Sp.U"
      },
      {
       "code": "K102",
       "name": "Agrippina Perdiani, dr"
      },
      {
       "code": "K103",
       "name": "Adnan Rhafif, dr"
      },
      {
       "code": "K104",
       "name": "Adilla Hikma Zakiati, dr, Sp.KFR"
      },
      {
       "code": "K105",
       "name": "Achmad Iskandar, dr"
      },
      {
       "code": "K106",
       "name": "Adhitia Nurfitriani, dr"
      }
     ])
  }
}
