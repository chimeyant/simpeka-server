import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Catalog from 'App/Helpers/Catalog';
import Document from 'App/Models/Document'

export default class DocumentsController {
  public async index({}: HttpContextContract) {
    const documents = await Document.query().preload('downloads').orderBy("created_at","desc")

    const datas:{}[]=[]

    documents.forEach(element => {
      const row ={}
      row['id'] = element.uuid
      row['name']= {text: element.name,counter:element.downloads.length }
      row['thumbnail'] = ""
      row['status']= element.status ? {color:'green',text:"Publish"}:{color:'red',text:'UnPublish'}
      datas.push(row)
    });

    return datas;
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    const {name, group_data_uuid,topic_uuid, organization_uuid, description, filename,tag}= request.all()

    try {
      const document = new Document
      document.name = name
      document.groupDataUuid = group_data_uuid
      document.topicUuid = topic_uuid
      document.organizationUuid = organization_uuid
      document.description = description
      document.filename = filename
      document.tag = tag
      await document.save()

      const catalog = new Catalog
      catalog.store(group_data_uuid,topic_uuid,organization_uuid,"document",document.uuid, name,tag,false)

      return response.status(200).json({
        success: true,
        code:200,
        message:"Proses tambah data berhasil..!",
        data:{}
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

    const document = await Document.findBy("uuid",id)

    return document?.datarecord;
  }

  public async edit({}: HttpContextContract) {}

  public async update({params, response, request}: HttpContextContract) {
    const {id}= params
    const {name, group_data_uuid,topic_uuid, organization_uuid, description, filename,tag}= request.all()

    try {
      const document = await Document.findBy("uuid",id)
      document?.merge({name:name, groupDataUuid:group_data_uuid, topicUuid:topic_uuid, organizationUuid:organization_uuid, description:description, filename:filename, tag:tag})

      await document?.save()

      //update catalog
      const catalog = new Catalog
      catalog.update(group_data_uuid,topic_uuid,organization_uuid,"document",document?.uuid, name,tag,false)

      return response.status(200).json({
        success: true,
        code:200,
        message:"Proses ubah data berhasil..!",
        data:document
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

  public async destroy({params, response}: HttpContextContract) {
    const {id}= params
    try {
      const catalog = new Catalog
      await catalog.delete(id)

      const document = await Document.findBy("uuid",id)
      await document?.delete()

      return response.status(200).json({
        success:true,
        code:200,
        message:"Proses hapus data berhasil",
        data:{
          data:id
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
}
