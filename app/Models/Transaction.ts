import { DateTime } from 'luxon'
import {v4 as uuid} from "uuid"
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import {compose} from "@ioc:Adonis/Core/Helpers"
import { BaseModel, BelongsTo, HasMany, beforeCreate, belongsTo, column, computed, hasMany, scope } from '@ioc:Adonis/Lucid/Orm'
import Doctor from './Doctor'
import TransactionDiaglist from './TransactionDiaglist'
import TransactionProclist from './TransactionProclist'

export default class Transaction extends compose(BaseModel, SoftDeletes) {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid:string

  @column()
  public categoryUuid:string

  @column()
  public problemUuid:string

  @column()
  public bpjsKelasUuid:string

  @column()
  public bpjsKelas:string

  @column()
  public admissionDate: Date

  @column()
  public dischargeDate: Date

  @column()
  public diaglist: string

  @column()
  public proclist:string

  @column()
  public totalTarif:number

  @column()
  public tarifRs:number

  @column()
  public namaPasien:string

  @column()
  public umur:number

  @column()
  public dpjp:string

  @column()
  public doctorUuid:string

  @column()
  public sep:string

  @column()
  public description:string

  @column()
  public rawatJalan:boolean

  @column()
  public process:boolean

  @column()
  public status:boolean

  @column()
  public deletedAt:DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID(transaction: Transaction){
    transaction.uuid= uuid()
  }

  @computed()
  public get datadisplay(){
    return {
      id: this.uuid,
      name: this.namaPasien,
      category: "",
      description: this.description
    }
  }

  public get datarecord(){
    return {
      id:this.uuid,
      nama_pasien: this.namaPasien,
      umur: this.umur,
      bpjs_kelas_uuid: this.bpjsKelasUuid,
      description: this.description,
      doctor_uuid: this.doctorUuid,
      category_uuid: this.categoryUuid,
      total_tarif: this.totalTarif,
      tarif_rs: this.tarifRs,
      diaglist: this.diaglist

    }
  }

  @belongsTo(()=>Doctor,{foreignKey:"doctorUuid", localKey:"uuid"})
  public doctor:BelongsTo<typeof Doctor>

  @hasMany(()=> TransactionDiaglist,{localKey: "uuid", foreignKey:"transactionUuid"})
  public diaglists: HasMany<typeof TransactionDiaglist>

  @hasMany(()=> TransactionProclist, {localKey:"uuid",foreignKey:"transactionUuid"})
  public proclists:HasMany<typeof TransactionProclist>


  public static filterOn= scope((query, request)=>{
    const {search, sortBy, sortDesc} = request.only(['search','sortBy', 'sortDesc'])
    //const {search : string ,sortBy, sortDesc}= request.all();
    const qsortBy = sortBy? sortBy : 'discharge_date'
    const qsortDesc = sortDesc? 'asc': 'desc'
    query.select('uuid','category_uuid','nama_pasien','discharge_date','description','total_tarif', 'tarif_rs' ,"doctor_uuid",'process','status')

    if(search){
      query.whereRaw('lower(nama_pasien) like ?',['%'+ search.toLowerCase()+'%'] );
    }

    query.orderBy(qsortBy,qsortDesc).orderBy("nama_pasien",'asc')

    return query;
  })

}
