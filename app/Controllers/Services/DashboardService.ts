import Transaction from "App/Models/Transaction";
import I18n from "@ioc:Adonis/Addons/I18n";
import Doctor from "App/Models/Doctor";
import Diaglist from "App/Models/Diaglist";
import TransactionDiaglist from "App/Models/TransactionDiaglist";
import TransactionProclist from "App/Models/TransactionProclist";
import Category from "App/Models/Category";

class DashboardService {
  public async recap_monthly(year:number){

    const datas:[]=[];

    //cari rekap bulan januari
    const month01 = year + "-"+ "01" +"%"
    const model01 = await Transaction.query().whereRaw("discharge_date::text like ?",[month01]).getCount()
    datas.push(Number(model01))

    //cari rekap bulan pebruari
    const month02 = year + "-"+ "02" +"%"
    const model02 = await Transaction.query().whereRaw("discharge_date::text like ?",[month02]).getCount()
    datas.push(Number(model02))

    //cari rekap bulan maret
    const month03 = year + "-"+ "03" +"%"
    const model03 = await Transaction.query().whereRaw("discharge_date::text like ?",[month03]).getCount()
    datas.push(Number(model03))

    //cari rekap bulan april
    const month04 = year + "-"+ "04" +"%"
    const model04 = await Transaction.query().whereRaw("discharge_date::text like ?",[month04]).getCount()
    datas.push(Number(model04))

    //cari rekap bulan mei
    const month05 = year + "-"+ "05" +"%"
    const model05 = await Transaction.query().whereRaw("discharge_date::text like ?",[month05]).getCount()
    datas.push(Number(model05))

    //cari rekap bulan junio
    const month06 = year + "-"+ "06" +"%"
    const model06 = await Transaction.query().whereRaw("discharge_date::text like ?",[month06]).getCount()
    datas.push(Number(model06))

    //cari rekap bulan juli
    const month07 = year + "-"+ "07" +"%"
    const model07 = await Transaction.query().whereRaw("discharge_date::text like ?",[month07]).getCount()
    datas.push(Number(model07))

    //cari rekap bulan agustus
    const month08 = year + "-"+ "08" +"%"
    const model08 = await Transaction.query().whereRaw("discharge_date::text like ?",[month08]).getCount()
    datas.push(Number(model08))

    //cari rekap bulan september
    const month09 = year + "-"+ "09" +"%"
    const model09 = await Transaction.query().whereRaw("discharge_date::text like ?",[month09]).getCount()
    datas.push(Number(model09))

    //cari rekap bulan oktober
    const month10 = year + "-"+ "10" +"%"
    const model10 = await Transaction.query().whereRaw("discharge_date::text like ?",[month10]).getCount()
    datas.push(Number(model10))

    //cari rekap bulan nopmber
    const month11 = year + "-"+ "11" +"%"
    const model11 = await Transaction.query().whereRaw("discharge_date::text like ?",[month11]).getCount()
    datas.push(Number(model11))

    //cari rekap bulan desember
    const month12 = year + "-"+ "12" +"%"
    const model12 = await Transaction.query().whereRaw("discharge_date::text like ?",[month12]).getCount()
    datas.push(Number(model12))


    return datas;
  }

  public async per_jenis_pengobatan(year:string){
    const tahun = year + "%"
    const jmlrawatjalan = await Transaction.query().where("rawat_jalan",true).whereRaw("discharge_date::text like ?",[tahun] ).getCount()
    const jmlrawatinap = await Transaction.query().where("rawat_jalan",false).whereRaw("discharge_date::text like ?",[tahun] ).getCount()

    const datas:[]=[]

    datas.push(Number(jmlrawatinap))
    datas.push(Number(jmlrawatjalan))

    return datas;

  }

  public async recap_pending_claim_monthly(bulan:string){
    const bulantahun = bulan + "%"
    const jmlpertahun = await Transaction.query().whereRaw('discharge_date::text like ?',[bulantahun]).getCount()

    return jmlpertahun;
  }

  public async total_tarif_rs_per_tahun(){
    const currdate = new Date
    const year = 2022+"-10%"

    const jmlpertahun = await Transaction.query().knexQuery.sum("tarif_rs").whereRaw('discharge_date::text like ?',[year])

    return jmlpertahun[0].sum;
  }

  public async total_tarif_rs_monthly(bulan){
    const bulantahun  = bulan + "%"

    const jmlperbulan = await Transaction.query().knexQuery.sum("tarif_rs").whereRaw('discharge_date::text like ?',[bulantahun])

    const jumlah = I18n.locale("id").formatCurrency(jmlperbulan[0].sum,{currency:"IDR"} )
    return jumlah;
  }

  public async total_tarif_total_monthly(bulan){
    const bulantahun  = bulan + "%"

    const jmlperbulan = await Transaction.query().knexQuery.sum("total_tarif").whereRaw('discharge_date::text like ?',[bulantahun])

    const jumlah = I18n.locale("id").formatCurrency(jmlperbulan[0].sum,{currency:"IDR"} )
    return jumlah;
  }

  public async recap_pending_claim_by_doctor(bulan){
    const bulantahun = bulan + "%"
    const model = await Doctor.query().preload('transactions',(trxQuery)=>{
      trxQuery.whereRaw('discharge_date::text like ?',[bulantahun])
    }).orderBy("name",'asc')

    const datas:{}[]= []

    let i =0
    model.forEach(async element => {
      const row ={}
      if(Number(element.transactions.length) > 0){
        row['nomor']= i +=1
        row['code']= element.code
        row['name']= element.name
        row['jml']= element.transactions.length
        datas.push(row)
      }
    });

    return datas;
  }

  public async recap_pending_claim_by_kategori(bulan:string){
    const bulantahun = bulan + "%"
    const model = await Category.query().preload("transactions",(trxQuery)=>{
      trxQuery.whereRaw("discharge_date::text like ? ",[bulantahun])
    }).orderBy('code','asc')

    const labels:{}[]=[]
    const datas:{}[]=[]

    model.forEach(element => {
      labels.push(element.name)
      datas.push(Number(element.transactions.length))
    });

    return{
      labels:labels,
      data:datas
    }
  }

  public async recap_pending_claim_by_diagnostic(bulan:string){
    const bulantahun = bulan + "%"
    const model = await TransactionDiaglist.query().knexQuery.select('code').count('code').whereRaw('discharge_date::text like ?',[bulantahun]).orderBy('count','desc').groupBy('code').limit(10)


    const labels:{}[]=[]
    const datas:{}[]=[]

    model.forEach(element => {
      labels.push(element.code)
      datas.push(Number(element.count))

    });

    return {
      labels:labels,
      data:datas,
    };
  }

  public async recap_pending_by_tindakan(bulan:string){
    const bulantahun = bulan + "%"
    const model = await TransactionProclist.query().knexQuery.select('code').count('code').whereRaw('discharge_date::text like ?',[bulantahun]).orderBy('count','desc').groupBy('code').limit(10)

    const labels:{}[]=[]
    const datas:{}[]=[]

    model.forEach(element => {
      labels.push(element.code)
      datas.push(Number(element.count))
    });

    return {
      labels:labels,
      data:datas,
    };
  }
}

export default new DashboardService
