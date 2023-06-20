import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, BelongsTo, belongsTo, column, computed, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Topic from './Topic'
import Organization from './Organization'
import DownloadCounter from './DownloadCounter'

export default class Document extends BaseModel {
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
  public filename:string

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
  public static async createUUID(document :Document){
    document.uuid = uuid()
  }

  @belongsTo(()=> Topic, {localKey:"uuid", foreignKey:"topicUuid"})
  public topic: BelongsTo <typeof Topic>

  @belongsTo(()=>Organization, {localKey:"uuid", foreignKey:"organizationUuid"})
  public organization: BelongsTo <typeof Organization>

  @hasMany(()=> DownloadCounter,{localKey:"uuid",foreignKey:"refUuid"})
  public downloads:HasMany<typeof DownloadCounter>


  @computed()
  public get datarecord(){
    return {
      id:this.uuid,
      group_data_uuid:this.groupDataUuid,
      topic_uuid: this.topicUuid,
      organization_uuid: this.organizationUuid,
      name: this.name,
      description: this.description,
      filename: this.filename,
      tag: this.tag

    }
  }
}
