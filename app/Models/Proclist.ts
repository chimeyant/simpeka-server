import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import {compose} from "@ioc:Adonis/Core/Helpers"
import { BaseModel, HasMany, beforeCreate, column, computed, hasMany, scope } from '@ioc:Adonis/Lucid/Orm'
import TransactionProclist from './TransactionProclist'

export default class Proclist extends compose(BaseModel, SoftDeletes) {
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


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(proclist:Proclist){
    proclist.uuid  = uuid()
  }

  @hasMany(()=> TransactionProclist,{localKey:"code",foreignKey:"code"})
  public transactionproclist:HasMany<typeof TransactionProclist>

  @computed()
  public get datadisplay(){
    return {
      code:this.code,
      name: this.name
    }
  }

  @computed()
  public get datarecord(){
    return{
      code:this.code,
      name:this.name
    }
  }

  public static filterOn = scope((query, request)=>{
    const {search, sortBy, sortDesc} = request.only(['search','sortBy', 'sortDesc'])
    //const {search : string ,sortBy, sortDesc}= request.all();
    const qsortBy = sortBy? sortBy : 'code'
    const qsortDesc = sortDesc? 'desc': 'asc'
    query.select('uuid','name','code')

    if(search){
      query.whereRaw('lower(name) like ?',['%'+ search.toLowerCase()+'%'] );
    }

    query.orderBy(qsortBy,qsortDesc)

    return query;
  })
}
