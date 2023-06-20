import { DateTime } from 'luxon'
import {v4 as uuid } from "uuid"
import { BaseModel, beforeCreate, column, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Regency extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public code:string

  @column()
  public name:string

  @column()
  public logo:string

  @column()
  public polygon:string

  @column()
  public integration:boolean

  @column()
  public url:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(regency:Regency){
    regency.uuid = uuid()
  }

  @computed()
  public get datarecord(){
    return {
      id:this.uuid,
      code: this.code,
      name: this.name,
      logo: this.logo,
      url:this.url,
      integration: this.integration
    }
  }

  @computed()
  public get dataview(){
    return {
      id: this.uuid,
      code: this.code,
      name: this.name,
      logo: this.logo,
    }
  }
}
