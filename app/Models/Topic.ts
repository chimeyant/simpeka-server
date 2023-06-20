import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, HasMany, beforeCreate, column, computed, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Catalog from './Catalog'

export default class Topic extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public name:string

  @column()
  public slug:string

  @column()
  public icon:string

  @column()
  public hierarchy:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(topic : Topic){
    topic.uuid = uuid()
  }

  @hasMany(()=> Catalog, {localKey:"uuid",foreignKey:"topicUuid"})
  public catalogs:HasMany<typeof Catalog>

  @computed()
  public get datarecord(){
    return {
      id:this.uuid,
      name:this.name,
      icon: this.icon,
      hierarchy: this.hierarchy
    }
  }

  @computed()
  public get dataview(){
    return {
      id:this.uuid,
      name: this.name,
      icon: this.icon,
    }
  }

}
