import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class DatasetMeta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public datasetUuid:string

  @column()
  public pengukuran:string

  @column()
  public tingkat:string

  @column()
  public cangkupan:string

  @column()
  public produsen:string

  @column()
  public bidang:string

  @column()
  public penanggungjawab:string

  @column()
  public kontakprodusen:string

  @column()
  public kodeindikator:string

  @column()
  public bidangurusan:string

  @column()
  public satuandataset:string

  @column()
  public cakupan:string


  @column()
  public frequensi:string

  @column()
  public catatan:string

  @column()
  public dimensi:string

  @column()
  public deletedAt:DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(datasetMeta:DatasetMeta){
    datasetMeta.uuid = uuid()
  }
}
