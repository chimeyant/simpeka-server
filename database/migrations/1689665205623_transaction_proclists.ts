import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TransactionProclists extends BaseSchema {
  protected tableName = 'transaction_proclists'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid("uuid")
      table.uuid('transaction_uuid')
      table.string("code")
      table.date("discharge_date").nullable()
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
