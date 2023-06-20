import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Catalog from 'App/Helpers/Catalog';
import Dataset from 'App/Models/Dataset'
import DatasetHeader from 'App/Models/DatasetHeader';
import DatasetMeta from 'App/Models/DatasetMeta';
import axios from 'axios';

export default class DatasetsController {
  public async index({}: HttpContextContract) {
    const datasets = await Dataset.query().orderBy("id","desc")

    const datas:{}[]= []
    datasets.forEach(element => {
      const row = {}
      row['id']= element.uuid
      row['kodefikasi']= element.kodefikasi
      row['title']= element.title
      row['description']= element.description
      row['status']= element.status ? {color:'green',text:"Publish"}:{color:'red',text:'UnPublish'}
      row['aksi']= {id: element.uuid, method: element.method}
      datas.push(row)
    });

    return datas;
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response, auth}: HttpContextContract) {
    const {group_data_uuid, topic_uuid, organization_uuid, kodefikasi, kodefikasi2,kodefikasi3, title, description,method, api_path,api_param, tag,map_type,map_url, pengukuran,tingkat, cakupan, produsen, bidang, penanggungjawab, kontakprodusen, kodeindikator, bidangurusan, satuandataset, frequensi, catatan, dimensi }= request.all()

    try {
      const user = auth.user
      const dataset = new Dataset
      dataset.groupDataUuid = group_data_uuid
      dataset.topicUuid = topic_uuid
      dataset.organizationUuid = organization_uuid
      dataset.kodefikasi = kodefikasi
      dataset.kodefikasi2 = kodefikasi2
      dataset.kodefikasi3 = kodefikasi3
      dataset.title = title
      dataset.description = description
      dataset.createdBy = user?.id
      dataset.method = method
      dataset.apiPath = api_path
      dataset.apiParam = api_param
      dataset.tag = tag
      dataset.mapType = map_type
      dataset.mapUrl = map_url
      dataset.status = false
      await dataset.save()

      if(method=='api'){

        //get token
        let {data:{ access_token}}= await axios.post("https://apimanager.dev.bantenprov.go.id/api/oauth/token",{grant_type: 'password', client_id:1, client_secret:'Nvhu5tnjFKWWCDzNQR6jxrnfQKaB3Q22PbO4RoWP'})

        let config ={
          timeout:5000,
          headers:{
            'Authorization':'Bearer '+ access_token
          }
        }

        let {data}= await  axios.get(api_path + api_param, config)

        const dataheaders:{}[]=[]
        data.metadata.forEach(element => {
          const row= {}
          row['dataset_uuid']= dataset.uuid
          row['text']= element
          row['value']= element
          row['width']= 'auto'
          row['align']= 'start'
          row['sortable']= true
          row['visible']=true
          dataheaders.push(row)
        });

        //save to Dataset Headers
        await DatasetHeader.createMany(dataheaders)
      }

      //save metadata
      const metadata = new DatasetMeta
      metadata.datasetUuid = dataset.uuid
      metadata.pengukuran = pengukuran
      metadata.tingkat = tingkat
      metadata.cakupan = cakupan
      metadata.produsen = produsen
      metadata.bidang = bidang
      metadata.penanggungjawab = penanggungjawab
      metadata.kontakprodusen = kontakprodusen
      metadata.kodeindikator = kodeindikator
      metadata.bidangurusan = bidangurusan
      metadata.satuandataset = satuandataset
      metadata.frequensi = frequensi
      metadata.catatan = catatan
      metadata.dimensi = dimensi
      await metadata.save()

      //save ke catalog
      const catalog = new Catalog
      await catalog.store(group_data_uuid, topic_uuid, organization_uuid, "dataset",dataset.uuid, title, tag,false)

      return response.status(200).json({
        success:true,
        code:200,
        message:"Proses tambah dataset header berhasil..!",
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

  public async show({params}: HttpContextContract) {
    const {id}= params

    const dataset = await Dataset.findBy("uuid",id)

    const data ={}
    data['id']= dataset?.uuid
    data['group_data_uuid']= dataset?.groupDataUuid
    data['topic_uuid']= dataset?.topicUuid
    data['organization_uuid']= dataset?.organizationUuid
    data['kodefikasi']= dataset?.kodefikasi
    data['kodefikasi2']= dataset?.kodefikasi2
    data['kodefikasi3']= dataset?.kodefikasi3
    data['title']= dataset?.title
    data['description']= dataset?.description
    data['method']= dataset?.method
    data['tag']= dataset?.tag
    data['api_path'] = dataset?.apiPath
    data['api_param']= dataset?.apiParam
    data['map_type']= dataset?.mapType
    data['map_url']= dataset?.mapUrl

    //const datameta
    const datameta = await DatasetMeta.findBy("dataset_uuid", id)
    data['pengukuran'] = datameta?.pengukuran
    data['tingkat'] = datameta?.tingkat
    data['cakupan'] = datameta?.cakupan
    data['produsen']= datameta?.produsen
    data['bidang']= datameta?.bidang
    data['penanggungjawab']= datameta?.penanggungjawab
    data['kontakprodusen']= datameta?.kontakprodusen
    data['kodeindikator']= datameta?.kodeindikator
    data['bidangurusan']= datameta?.bidangurusan
    data['satuandataset']= datameta?.satuandataset
    data['frequensi']= datameta?.frequensi
    data['catatan']= datameta?.catatan
    data['dimensi']= datameta?.dimensi

    return data
  }

  public async edit({}: HttpContextContract) {}

  public async update({params, request, response, auth}: HttpContextContract) {
    const {id}= params

    const {group_data_uuid, topic_uuid, organization_uuid, kodefikasi, kodefikasi2,kodefikasi3, title, method,api_path,api_param, description, tag,map_type,map_url, pengukuran,tingkat, cakupan, produsen, bidang, penanggungjawab, kontakprodusen, kodeindikator, bidangurusan, satuandataset, frequensi, catatan, dimensi}= request.all()

    try {
      const dataset = await  Dataset.findBy("uuid",id)
      dataset?.merge({groupDataUuid: group_data_uuid, organizationUuid:organization_uuid, topicUuid:topic_uuid, kodefikasi:kodefikasi, kodefikasi2:kodefikasi2, kodefikasi3:kodefikasi3,title:title, description:description, method:method,apiPath:api_path,apiParam:api_param, tag:tag,mapType:map_type, mapUrl:map_url})

      await dataset?.save()

        //update to catalog
        const catalog = new Catalog
        await catalog.update(group_data_uuid, topic_uuid, organization_uuid, "dataset",dataset?.uuid, title, tag,false)

      //update meta data
      const metadata =  await DatasetMeta.findBy("dataset_uuid",id)

      metadata?.merge({pengukuran:pengukuran, tingkat:tingkat, cakupan:cakupan, produsen:produsen, bidang:bidang, penanggungjawab:penanggungjawab, kontakprodusen:kontakprodusen, kodeindikator:kodeindikator, bidangurusan:bidangurusan, satuandataset:satuandataset, frequensi:frequensi, catatan:catatan, dimensi})

      await metadata?.save()

      return response.status(200).json({
        success:true,
        code:200,
        message:"Proses ubah dataset  berhasil..!",
        data: {}
      })

    } catch (error) {
      return response.status(500).json({
        success:false,
        code:500,
        message:"Opps.., terjadi kesalahan ",
        errors:error
      })
    }

  }

  public async destroy({params, response}: HttpContextContract) {
    const {id}= params

    try {
      const dataset = await Dataset.findBy("uuid",id)
      await dataset?.delete()

      const catalog = new Catalog
      await catalog.delete(id)

      return response.status(200).json({
        success:true,
        code: 200,
        message:"Proses hapus data berhasil..!",
        data:{
          id:id
        }
      })
    } catch (error) {
      return response.status(500).json({
        success:false,
        code:200,
        message:"Opps..., terjadi kesalahan ",
        errors:error
      })
    }
  }
}
