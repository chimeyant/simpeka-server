import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Perusahaan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public name:string

  @column()
  public color:string

  @column()
  public icon:string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(perusahaan : Perusahaan){
    perusahaan.uuid = uuid()
  }

  @computed()
  public  get  record(){
    return  {
      id:this.uuid,
      name:this.name,
      icon:this.icon

    }
  }
}
