import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Infograpich from 'App/Models/Infograpich'
import Env from "@ioc:Adonis/Core/Env"
import Drive from "@ioc:Adonis/Core/Drive"
import Catalog from 'App/Helpers/Catalog'

export default class InfographicsController {
  public async index({}: HttpContextContract) {
    const infograpiches = await Infograpich.query().orderBy("created_at","desc")

    const datas:{}[]=[]

    infograpiches.forEach(async element => {
      const row={}
      row['id'] = element.uuid
      row['name']= {text: element.name,counter:element.counter }
      row['thumbnail'] = Env.get("BASE_URL")+ await Drive.getSignedUrl("images/infographic/"+ element.thumbnail)
      row['status']= element.status ? {color:'green',text:"Publish"}:{color:'red',text:'UnPublish'}
      datas.push(row)
    });

    return datas;
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    const {name, group_data_uuid,topic_uuid, organization_uuid, description, thumbnail,tag}= request.all()

    try {
      const infographic = new Infograpich
      infographic.name = name
      infographic.groupDataUuid = group_data_uuid
      infographic.topicUuid = topic_uuid
      infographic.organizationUuid = organization_uuid
      infographic.description = description
      infographic.thumbnail = thumbnail
      infographic.tag = tag
      await infographic.save()

      const catalog = new Catalog
      catalog.store(group_data_uuid,topic_uuid,organization_uuid,"infografik",infographic.uuid, name,tag,false)

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

    const infographic = await Infograpich.findBy("uuid",id)
    return infographic?.datarecord
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params, response}: HttpContextContract) {
    const {id}= params

    try {
      const catalog = new Catalog
      await catalog.delete(id)
      const infographic = await Infograpich.findBy("uuid",id)
      await infographic?.delete()

      return response.status(200).json({
        success:true,
        code:200,
        message:"Proses hapus data berhasil..!",
        data:{id:id}
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
