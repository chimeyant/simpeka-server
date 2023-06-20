import { DateTime } from 'luxon'
import {v4 as uuid } from "uuid"
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class DatasetRowHeader extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public datasetRowDataUuid:string

  @column()
  public text:string

  @column()
  public value:string

  @column()
  public width:string

  @column()
  public align:string

  @column()
  public visible:boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(header: DatasetRowHeader){
    header.uuid = uuid()
  }
}
