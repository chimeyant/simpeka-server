import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import {compose} from "@ioc:Adonis/Core/Helpers"
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class FileManagement extends compose(BaseModel, SoftDeletes) {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public name: string

  @column()
  public ext: string

  @column()
  public size: number

  @column()
  public type:string

  @column()
  public mime:string

  @column()
  public used:boolean

  @column()
  public deletedAt:DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(filemanagement:FileManagement){
    filemanagement.uuid= uuid()
  }
}
