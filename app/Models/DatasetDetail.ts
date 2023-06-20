import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Regency from './Regency'

export default class DatasetDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public datasetUuid:string

  @column()
  public provinceUuid:string

  @column()
  public regencyUuid: string

  @column()
  public tahun:number

  @column()
  public type:string

  @column()
  public apiId: string

  @column()
  public apipath:string

  @column()
  public apiKey:string

  @column()
  public filename:string

  @column()
  public body:string

  @column()
  public createdBy:string

  @column()
  public updatedBy:string

  @column()
  public counter:number

  @column()
  public status:boolean



  @column()
  public deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(datadetail: DatasetDetail){
    datadetail.uuid = uuid()
  }

  @belongsTo(()=> Regency,{ foreignKey:'regencyUuid', localKey:'code' })
  public regency:BelongsTo<typeof Regency>



}
