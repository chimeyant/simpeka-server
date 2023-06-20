import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DatasetDetail from 'App/Models/DatasetDetail'
import DatasetDetailValidator from 'App/Validators/Manajemen/DatasetDetailValidator'
import Env from "@ioc:Adonis/Core/Env"
import Application from "@ioc:Adonis/Core/Application"
import *  as XLSX from "xlsx"
import DatasetHeader from 'App/Models/DatasetHeader'
import axios from "axios"
import Dataset from 'App/Models/Dataset'


export default class DatasetDetailsController {
  public async index({params}: HttpContextContract) {
    const {dataset_uuid, method} = params

    const datas:{}[]=[]

    if(method =='api'){
      const dataset = await Dataset.findBy("uuid", dataset_uuid)
      let config ={
        timeout:10000,
        headers:{
          'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMmRiYTEzMTNjNjI3NGNlOGY2ZDQ1ODhlMjQxMWI3MWQzMzVlZGM3MTYwODVkMzk3ZGNmYTQ0MTBhMDgwNDJiYjE1NTdhNGQ2NWMxODRjYTUiLCJpYXQiOjE2NDg0MzUzODQuNDQ3NTgsIm5iZiI6MTY0ODQzNTM4NC40NDc1ODIsImV4cCI6MTY3OTk3MTM4NC40NDQ5Nywic3ViIjoiMSIsInNjb3BlcyI6W119.J1gDVYQLNHxhBpJ-nW1p-JlgTU6NyxQgolxzkAF6drpbWuFXYUH6fUF35-nfv43S2RvGCgB90eEzMzc8mmY12wuCfI8bBgdiHyzd_0Jr9maC-hMOFod2EuRWY8gIKwwGpXrp_D-RThIhkx8KAxkRDHWT0ooDJYcbHKgiXDMKxd9AdwaeLXYP9dH25XsuT7kfF7Vh1ESNX8e3w2_oT8sTxu4dwEEFEzZS66083RZtW3TqeESVVkkUy40QNzjONclgsDEaWanvwtqS_3n95P5TkWoNOL6nGPzuCfL5Q9X02T5JeAdJ0IExyixzTrn25AIC4gcpTXR2XWylef5DqbhNk4h0Q4hn2kZg3JwJmiUvoFqoE0-ksCS_nHejDbiE-_8j_QkTNQ5EUOdg0g-b1KhJqpYO6Zw17Z4dq7InCHk3XRn4Xyqy8sxVamBawbLvB_OYoh_0-jrobbIbHtL512cg4juM1dC8GlD3Xt91iqHe41RE7Y2mndbIiqa7oti3dsokyhty1ULR3VzyyhxsQsrcYCqUJyytr_bJZFMiTluDd2cDTUWvbHJ-6UEl_IivLCbXGf4-mXwl_4B1KaKSwldMdF3GRSMXpERrVwE5cQL8Ylr03iuAOy7aS3Y7Hax1vjPBe4x7pjEuuF8Zv3osGqhuL2u8qprY1YATb0UFb99ldIk'
        }
      }

      let {data:{data}} = await axios.get(dataset?.apiPath+ dataset?.apiParam, config)

      return data;

    }else{
      const datasetdetails = await DatasetDetail.query().preload("regency").where("dataset_uuid", dataset_uuid).orderBy("id",'asc')
      datasetdetails.forEach(element => {
        if(!element.apiKey){
          Object.assign(element.body, {id: element.uuid})
          datas.push(element.body)
        }else{
          const row ={}
          row['id']= element.uuid
          row['regency_uuid'] =element.regencyUuid
          row['code']= element.regency.code
          row['regency_name'] = element.regency.name
          row['tahun']= element.tahun
          datas.push(row)
        }
      });
    }

    return datas;
  }

  public async create({}: HttpContextContract) {}

  public async store({params, request, response, auth}: HttpContextContract) {
    const {dataset_uuid}= params
    const { regency_uuid, tahun, type,apipath ,api_key}= request.all()

    await request.validate(DatasetDetailValidator)

    try {
        const user = auth.user

        let config ={
          timeout:5000,
          headers:{
            'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMmRiYTEzMTNjNjI3NGNlOGY2ZDQ1ODhlMjQxMWI3MWQzMzVlZGM3MTYwODVkMzk3ZGNmYTQ0MTBhMDgwNDJiYjE1NTdhNGQ2NWMxODRjYTUiLCJpYXQiOjE2NDg0MzUzODQuNDQ3NTgsIm5iZiI6MTY0ODQzNTM4NC40NDc1ODIsImV4cCI6MTY3OTk3MTM4NC40NDQ5Nywic3ViIjoiMSIsInNjb3BlcyI6W119.J1gDVYQLNHxhBpJ-nW1p-JlgTU6NyxQgolxzkAF6drpbWuFXYUH6fUF35-nfv43S2RvGCgB90eEzMzc8mmY12wuCfI8bBgdiHyzd_0Jr9maC-hMOFod2EuRWY8gIKwwGpXrp_D-RThIhkx8KAxkRDHWT0ooDJYcbHKgiXDMKxd9AdwaeLXYP9dH25XsuT7kfF7Vh1ESNX8e3w2_oT8sTxu4dwEEFEzZS66083RZtW3TqeESVVkkUy40QNzjONclgsDEaWanvwtqS_3n95P5TkWoNOL6nGPzuCfL5Q9X02T5JeAdJ0IExyixzTrn25AIC4gcpTXR2XWylef5DqbhNk4h0Q4hn2kZg3JwJmiUvoFqoE0-ksCS_nHejDbiE-_8j_QkTNQ5EUOdg0g-b1KhJqpYO6Zw17Z4dq7InCHk3XRn4Xyqy8sxVamBawbLvB_OYoh_0-jrobbIbHtL512cg4juM1dC8GlD3Xt91iqHe41RE7Y2mndbIiqa7oti3dsokyhty1ULR3VzyyhxsQsrcYCqUJyytr_bJZFMiTluDd2cDTUWvbHJ-6UEl_IivLCbXGf4-mXwl_4B1KaKSwldMdF3GRSMXpERrVwE5cQL8Ylr03iuAOy7aS3Y7Hax1vjPBe4x7pjEuuF8Zv3osGqhuL2u8qprY1YATb0UFb99ldIk'
          }
        }

        let {data}= await  axios.get(apipath + api_key, config)

        //create header

        //set header
        let dataheaders:{}[]= []
        data.metadata.forEach(element => {
          const row =[]
          row['text']= element
          row['value']= element
          row['width']='auto'
          row['align']='start'
          row['sortable']=true
          row['visible']=true
          dataheaders.push(row)
        });


        //import body
        let i =0
        data.data.forEach(element => {
          if(i==0){
            const entities = Object.entries(element)
            entities.forEach(cols => {
              const headername = cols[0]
              headers.push(headername)
            });
          }
          i++
        });

        return response.status(200).json({
          success:true,
          code:200,
          message:"Proses tambah dataset detail berhasil",
          data:{
            id:datasetdetail.uuid,
            regency_uuid: datasetdetail.regencyUuid,
            tahun: datasetdetail.tahun,
          }
        })
    } catch (error) {
      return response.status(500).json({
          success:false,
          code:500,
          message:"Opps..., terjadi kesalahan ",
          errors:error
      })
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params, response}: HttpContextContract) {
    const {id}= params

    try {
      const datasetdetail = await DatasetDetail.findBy("uuid", id)

      //delete dataset detail
      await datasetdetail?.delete()

      return response.status(200).json({
        success:true,
        message:'Proses hapus data berhasil...!',
        data: {
          id:id
        }
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        code:500,
        message:"Opps..., terjadi kesalahan ",
        errors:error
      })
    }
  }

  public async import({params, request,response, auth}:HttpContextContract){
    const {dataset_uuid}= params
    const {filename}= request.all()

    try {

        let  pathfile =""
        if(Env.get("NODE_ENV")=='development'){
          pathfile = Application.publicPath("../storage/datasets/"+ filename)
        }else{
          pathfile = Application.publicPath("../../storage/datasets/"+ filename)
        }

        const dt = await XLSX.readFile(pathfile)
        const first_worksheet = dt.Sheets[dt.SheetNames[0]];
        const jsonheaders =  XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
        const jsonbodys = XLSX.utils.sheet_to_json(first_worksheet)
        const headers = jsonheaders.shift()
        const jsondatabodys = JSON.stringify(jsonbodys)


        const databody:{}[]=[]

        jsonbodys.forEach(async element => {
          //fine regency id
          //const regency = await Regency.findBy("code", element.kode_kabkota)
          const row ={}
          row['dataset_uuid']= dataset_uuid
          row['province_uuid']= element.kode_provinsi
          row['regency_uuid']= element.kode_kabkota
          row['tahun']= element.tahun
          row['body']= element
          row['type']= "dataset"
          row['filename']= filename

          databody.push(row)
        });

        //save to dataset DETAIL
        await DatasetDetail.createMany(databody)


        const dataheaders:{}[]=[]
         headers.forEach ( element => {
          const row ={}
          row['dataset_uuid']= dataset_uuid
          row['text']= element
          row['value']=element
          row['width']= 'auto'
          row['align']= 'start'
          row['sortable']= true
          row['visible']= true
           dataheaders.push(row)
        });

        const rowaksi ={}
        rowaksi['dataset_uuid']= dataset_uuid
        rowaksi['text']= "AKSI"
        rowaksi['value']="id"
        rowaksi['width']= "85"
        rowaksi['align']= 'center'
        rowaksi['sortable']= false
        rowaksi['visible']= true
        dataheaders.push(rowaksi)

        //delete header if exits
        await DatasetHeader.query().where("dataset_uuid", dataset_uuid).delete()

        //save to header
        await DatasetHeader.createMany(dataheaders)

        return response.status(200).json({
          success:true,
          code:200,
          message:"Proses import data berhasil"
        })

    } catch (error) {
      return response.status(500).json({
        success: false,
        code:500,
        message:"Opps..., terjadi kesalahan",
        errors:error
      })
    }

  }

  public async initheaders({params}:HttpContextContract){
    const {dataset_uuid}= params
    const headers =await DatasetHeader.query().where("dataset_uuid",dataset_uuid ).where('visible',true).orderBy("id",'asc')
    if(!headers.length>0){
      const datas = [
        {
          text:'KODE',
          value:'code',
          width:100,
          sortable:false,
          align:'start'
        },
        {
          text:'KAB/KOTA',
          value:'regency_name',
          width:null,
          sortable:false,
          align:'start'
        },
        {
          text:'TAHUN',
          value:'tahun',
          width:100,
          sortable:false,
          align:'center'
        },
        {
          text:'AKSI',
          value:'id',
          width:'85',
          sortable:false,
          align:'center'
        }
      ]

      return datas;
    }else{
      return headers
    }


  }


}
