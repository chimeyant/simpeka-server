import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { BaseModel, beforeCreate, column ,belongsTo,BelongsTo, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import Organization from './Organization'
import Topic from './Topic'
import Visualization from './Visualization'
import Infograpich from './Infograpich'
import Videographic from './Videographic'
import DataCounter from 'App/Models/DataCounter'

export default class Catalog extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public groupDataUuid: string

  @column()
  public topicUuid:string

  @column()
  public organizationUuid:string

  @column()
  public tablename:string

  @column()
  public refUuid:string

  @column()
  public title:string

  @column()
  public tag:string

  @column()
  public status:boolean

  @column()
  public meta:Object

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(catalog:Catalog){
    catalog.uuid = uuid()
  }

  @belongsTo(()=> Organization,{localKey:"uuid",foreignKey:"organizationUuid"})
  public organization: BelongsTo <typeof Organization>

  @belongsTo(()=> Topic,{localKey:'uuid', foreignKey:"topicUuid"})
  public topic: BelongsTo<typeof Topic>

  @belongsTo(()=> Visualization, {localKey:"uuid", foreignKey:"refUuid"})
  public visualization: BelongsTo <typeof Visualization>

  @belongsTo(()=> Infograpich, {localKey:"uuid",foreignKey:'refUuid'})
  public infographic: BelongsTo <typeof Infograpich>

  @belongsTo(()=> Videographic,{localKey:'uuid', foreignKey:"refUuid"})
  public videographic: BelongsTo <typeof Videographic>

  @hasMany(()=> DataCounter, {localKey:'refUuid', foreignKey:'refUuid' })
  public datacounters: HasMany <typeof DataCounter>


}
