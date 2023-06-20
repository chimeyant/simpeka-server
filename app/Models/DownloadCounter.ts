import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class DownloadCounter extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public refUuid:string

  @column()
  public groupDataUuid:string

  @column()
  public topicUuid:string

  @column()
  public ipadd:string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static createUUID(downloadcounter:DownloadCounter){
    downloadcounter.uuid = uuid()
  }
}
