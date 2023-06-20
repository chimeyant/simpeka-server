import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Organization extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public name:string

  @column()
  public slug:string

  @column()
  public hierarchy:number

  @column()
  public icon:string

  @column()
  public description:string

  @column()
  public integration:boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(organization:Organization){
    organization.uuid = uuid()
  }

  @computed()
  public get datarecord(){
    return {
      id: this.uuid,
      name:this.name,
      description: this.description,
      icon: this.icon,
    }
  }

  @computed()
  public get dataview(){
    return {
      id: this.uuid,
      name: this.name,
      description: this.description
    }

  }
}
