import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, column, beforeCreate, computed, belongsTo, BelongsTo, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Organization from './Organization'
import Topic from './Topic'
import DataCounter from './DataCounter'
import DatasetMeta from './DatasetMeta'

export default class Dataset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public groupDataUuid:string

  @column()
  public organizationUuid:string

  @column()
  public topicUuid:string

  @column()
  public kodefikasi:string

  @column()
  public kodefikasi1:string

  @column()
  public kodefikasi2:string

  @column()
  public kodefikasi3:string

  @column()
  public title:string

  @column()
  public description:string

  @column()
  public homeView:boolean

  @column()
  public method:string

  @column()
  public apiPath:string

  @column()
  public apiParam:string

  @column()
  public updatedBy: string

  @column()
  public createdBy:string

  @column()
  public counter:number

  @column()
  public tag:string

  @column()
  public status:boolean

  @column()
  public mapType:string

  @column()
  public mapUrl:string

  @column()
  public deleteAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(dataset:Dataset){
    dataset.uuid = uuid()
  }

  @belongsTo(()=> Organization,{foreignKey:"organizationUuid", localKey:"uuid"})
  public organization:BelongsTo <typeof Organization>

  @belongsTo(()=> Topic,{foreignKey:'topicUuid', localKey:"uuid"})
  public topic:BelongsTo<typeof Topic>

  @hasMany(()=> DataCounter,{localKey:"uuid",foreignKey:"refUuid"})
  public datacounters:HasMany<typeof DataCounter>

  @hasOne(()=> DatasetMeta,{localKey: "uuid", foreignKey:"datasetUuid"})
  public datasetmeta:HasOne<typeof DatasetMeta>


  @computed()
  public get datarecord(){
    return {
      id: this.uuid,
      group_data_uuid: this.groupDataUuid,
      topic_uuid : this.topicUuid,
      organization_uuid: this.organizationUuid,
      kodefikasi: this.kodefikasi,
      kodefikasi2:this.kodefikasi2,
      kodefikasi3: this.kodefikasi3,
      title: this.title,
      description: this.description,
      tag: this.tag,
      map_type:this.mapType,
      map_url:this.mapUrl,
    }
  }

  @computed()
  public get dataview(){
    return {
      id:this.uuid,
      kodefikasi: this.kodefikasi,
      title: this.title,
      description: this.description,
      status: this.status ? {color:'green',text:"Publish"}:{color:'red',text:'UnPublish'}
    }
  }

}
