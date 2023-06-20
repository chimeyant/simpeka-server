import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Videographic extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public groupDataUuid:string

  @column()
  public topicUuid:string

  @column()
  public organizationUuid:string

  @column()
  public datasetUuid:string

  @column()
  public name:string

  @column()
  public description:string

  @column()
  public youtubeId:string

  @column()
  public tag:string

  @column()
  public counter:number

  @column()
  public createdBy: string

  @column()
  public updatedBy:string

  @column()
  public status:boolean


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(videographic:Videographic){
    videographic.uuid = uuid()
  }

  @computed()
  public get datarecord(){
    return {
      id:this.uuid,
      group_data_uuid:this.groupDataUuid,
      topic_uuid: this.topicUuid,
      organization_uuid: this.organizationUuid,
      name: this.name,
      description: this.description,
      youtube_id: this.youtubeId,
      tag: this.tag

    }
  }
}
