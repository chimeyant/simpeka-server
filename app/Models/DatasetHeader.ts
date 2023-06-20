import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class DatasetHeader extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public text:string

  @column()
  public value:string

  @column()
  public width:string

  @column()
  public align:string

  @column()
  public sortable:boolean

  @column()
  public visible:string

  @column()
  public datasetUuid:string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(header:DatasetHeader){
    header.uuid = uuid()
  }
}
