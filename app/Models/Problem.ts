import { DateTime } from 'luxon'
import {v4 as uuid}from "uuid"
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import {compose} from "@ioc:Adonis/Core/Helpers"
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column, computed, scope } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class Problem extends compose(BaseModel, SoftDeletes) {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public categoryUuid:string

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
  public static async createUUID(problem:Problem){
    problem.uuid = uuid()
  }

  public static filterOn = scope((query,request)=>{
    const {search, sortBy, sortDesc} = request.only(['search','sortBy', 'sortDesc'])
    //const {search : string ,sortBy, sortDesc}= request.all();
    const qsortBy = sortBy? sortBy : 'code'
    const qsortDesc = sortDesc? 'desc': 'asc'
    query.select('uuid','code','name' ,'status')

    if(search){
      query.whereRaw('lower(name) like ?',['%'+ search.toLowerCase()+'%'] );
    }

    query.orderBy(qsortBy,qsortDesc)

    return query;
  })

  @belongsTo(()=> Category,{foreignKey:'categoryUuid', localKey:'uuid' })
  public category:BelongsTo<typeof Category>

  @computed()
  public get datadisplay(){
    return{
      id: this.uuid,
      category: this.category.name,
      name: this.name
    }
  }

  @computed()
  public get datarecord(){
    return {
      id: this.uuid,
      category_uuid: this.categoryUuid,
      code:this.code,
      name: this.name
    }
  }
}
