import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, column, computed,beforeCreate, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Env from "@ioc:Adonis/Core/Env"
import Drive from '@ioc:Adonis/Core/Drive'
import Organization from './Organization'

export default class Visualization extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public groupDataUuid: string

  @column()
  public topicUuid: string

  @column()
  public organizationUuid: string

  @column()
  public datasetUuid:string

  @column()
  public name:string

  @column()
  public descriptions:string

  @column()
  public thumbnail:string

  @column()
  public createdBy:uuid

  @column()
  public updatedBy:uuid

  @column()
  public counter:number

  @column()
  public tag:string

  @column()
  public status:boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(visualization:Visualization){
    visualization.uuid = uuid()
  }


  @computed()
  public get datarecord(){
    return {
      id:this.uuid,
      group_data_uuid:this.groupDataUuid,
      topic_uuid: this.topicUuid,
      organization_uuid: this.organizationUuid,
      name:this.name,
      descriptions:this.descriptions,
      thumbnail:this.thumbnail,
      tag:this.tag
    }
  }

  @computed()
  public  get  dataview(){
    return {
      id:this.uuid,
      group_data_uuid:this.groupDataUuid,
      topic_uuid: this.topicUuid,
      organization_uuid: this.organizationUuid,
      name:{text: this.name, counter:this.counter},
      descriptions:this.descriptions,

    }
  }
}
