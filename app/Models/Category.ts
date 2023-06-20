import { DateTime } from 'luxon'
import {compose}from "@ioc:Adonis/Core/Helpers"
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Category extends compose(BaseModel, SoftDeletes) {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public code:string

  @column()
  public name:string

  @column()
  public deletedAt:DateTime

  @column()
  public description:string

  @column()
  public status:boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(category:Category){
    category.uuid = uuid()
  }

  @computed()
  public get dataview(){
    return {
      id:this.uuid,
      code:this.code,
      name: this.name,
      description:this.description,
      status:this.status ? {color:'green',text:"Aktif"}:{color:'red',text:"Tidak Aktfi"}
    }
  }

  @computed()
  public get datarecord(){
    return {
      id:this.uuid,
      code: this.code,
      name:this.name,
      description: this.description,
    }
  }
}
