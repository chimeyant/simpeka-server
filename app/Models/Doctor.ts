import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import { compose } from "@ioc:Adonis/Core/Helpers";
import { BaseModel, HasMany, beforeCreate, column, computed, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Transaction from './Transaction';

export default class Doctor extends compose(BaseModel,SoftDeletes) {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public name:string

  @column()
  public code:string

  @column()
  public deletedAt:DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(doctor:Doctor){
    doctor.uuid = uuid()
  }

  @computed()
  public get datadisplay(){
    return{
      id:this.uuid,
      code:this.code,
      name:this.name
    }
  }

  @computed()
  public get datarecord(){
    return{
      id:this.uuid,
      code: this.code,
      name: this.name
    }
  }

  @hasMany(()=> Transaction,{localKey:"uuid",foreignKey:"doctorUuid"})
  public transactions: HasMany<typeof Transaction>
}
