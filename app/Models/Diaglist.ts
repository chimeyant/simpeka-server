import { DateTime } from 'luxon'
import {v4 as uuid } from "uuid"
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import {compose} from "@ioc:Adonis/Core/Helpers"
import { BaseModel, beforeCreate, column, computed, scope } from '@ioc:Adonis/Lucid/Orm'

export default class Diaglist extends compose(BaseModel, SoftDeletes) {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public code:string

  @column()
  public name:string

  @column()
  public status:boolean

  @column()
  public deletedAt:DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(diaglist:Diaglist){
    diaglist.uuid = uuid()
  }

  @computed()
  public get datadisplay(){
    return{
      id: this.uuid,
      code: this.code,
      name:this.name
    }
  }

  @computed()
  public get datarecord(){
    return{
      id:this.uuid,
      code:this.code,
      name:this.name,
      status:this.status
    }
  }

  public static filterOn = scope((query, request)=>{
    const {search, sortBy, sortDesc} = request.only(['search','sortBy', 'sortDesc'])
    //const {search : string ,sortBy, sortDesc}= request.all();
    const qsortBy = sortBy? sortBy : 'code'
    const qsortDesc = sortDesc? 'desc': 'asc'
    query.select('uuid','name','code', 'status')

    if(search){
      query.whereRaw('lower(name) like ?',['%'+ search.toLowerCase()+'%'] );
    }

    query.orderBy(qsortBy,qsortDesc)

    return query;
  })
}
