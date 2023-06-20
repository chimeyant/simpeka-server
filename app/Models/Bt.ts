import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Bts from 'Database/migrations/1679960103153_bts'
import Regency from './Regency'
import Perusahaan from './Perusahaan'

export default class Bt extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public name:string

  @column()
  public provinceUuid:string

  @column()
  public provinceCode:string

  @column()
  public regencyUuid:string

  @column()
  public regencyCode:string


  @column()
  public districtUuid:string

  @column()
  public districtCode:string

  @column()
  public villageUuid:string

  @column()
  public villageCode:string

  @column()
  public perusahaanUuid:string

  @column()
  public perusahaanName:string

  @column()
  public radius:number

  @column()
  public lat:string

  @column()
  public lng:string

  @column()
  public note:string

  @column()
  public status:boolean

  @column()
  public address:string

  @column()
  public photo:string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(bts:Bt){
    bts.uuid = uuid()
  }

  @belongsTo(()=> Regency,{localKey:"code", foreignKey:"regencyCode"})
  public regency:BelongsTo<typeof Regency>

  @belongsTo(()=> Perusahaan,{localKey:"uuid", foreignKey:"perusahaanUuid"})
  public perusahaan:BelongsTo<typeof Perusahaan>
}
