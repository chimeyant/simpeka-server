import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'

export default class Permohonan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public noregister:string

  @column()
  public name:string

  @column()
  public telp:string

  @column()
  public email:string

  @column()
  public pekerjaan:string

  @column()
  public kebutuhan:string

  @column()
  public isOpd:boolean

  @column()
  public opdUuid:string

  @column()
  public keterangan:string

  @column()
  public tujuan:string

  @column()
  public status:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(permohonan:Permohonan){
    permohonan.uuid = uuid()
  }
}
