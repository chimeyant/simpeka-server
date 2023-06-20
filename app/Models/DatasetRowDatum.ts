import { DateTime } from 'luxon'
import {v4 as uuid} from 'uuid'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class DatasetRowDatum extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public datasetDetailUuid:string


  @column()
  public bodys:string

  @column()
  public lat:number

  @column()
  public lng:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(datasetrowdata: DatasetRowDatum){
    datasetrowdata.uuid = uuid()
  }
}
