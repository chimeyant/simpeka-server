import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Transactions extends BaseSchema {
  protected tableName = 'transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid("uuid")
      table.uuid('category_uuid')
      table.uuid('problem_uuid')
      table.uuid('bpjs_kelas_uuid')
      table.string('bpjs_kelas').nullable()
      table.date('admission_date').nullable()
      table.date('discharge_date').nullable()
      table.jsonb('diaglist').nullable()
      table.jsonb('proclist').nullable()
      table.decimal('total_tarif',15,2).defaultTo(0)
      table.decimal('tarif_rs',15,2).defaultTo(0)
      table.string('nama_pasien').nullable()
      table.integer('umur').nullable()
      table.string('dpjp').nullable()
      table.uuid('doctor_uuid')
      table.string('sep').nullable()
      table.text('description').nullable()
      table.boolean("rawat_jalan").defaultTo(true)
      table.boolean('process').defaultTo(false)
      table.boolean('status').defaultTo(false)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("deleted_at",{useTz:true})
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
