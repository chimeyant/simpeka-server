import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BpjsKela from 'App/Models/BpjsKela'

export default class BpjsKelaSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await BpjsKela.createMany([
      {
        code:'1',
        name:'1 (Satu)'
      },
      {
        code:'2',
        name:'2 (Dua)'
      },
      {
        code:'3',
        name:'3 (Tiga)'
      },


    ])
  }
}
