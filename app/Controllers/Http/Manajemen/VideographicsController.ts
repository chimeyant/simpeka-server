import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Catalog from 'App/Helpers/Catalog';
import Videographic from 'App/Models/Videographic'

export default class VideographicsController {
  public async index({}: HttpContextContract) {
    const videographics = await Videographic.query().orderBy("created_at",'desc')

    const datas:{}[]=[]
    videographics.forEach(element => {
      const row ={}
      row['id'] = element.uuid
      row['name']= {text: element.name,counter:element.counter }
      row['youtube_id'] = element.youtubeId
      row['status']= element.status ? {color:'green',text:"Publish"}:{color:'red',text:'UnPublish'}
      datas.push(row)
    });

    return datas;
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response}: HttpContextContract) {
    const {group_data_uuid, topic_uuid, organization_uuid, name, description, youtube_id, tag} = request.all()

    try {
      const videographic = new Videographic
      videographic.name = name
      videographic.groupDataUuid = group_data_uuid
      videographic.topicUuid = topic_uuid
      videographic.organizationUuid = organization_uuid
      videographic.description = description
      videographic.youtubeId = youtube_id
      videographic.tag = tag
      await videographic.save()

      const catalog = new Catalog
      catalog.store(group_data_uuid,topic_uuid,organization_uuid,"videografis",videographic.uuid, name,tag,false)

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

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params, response}: HttpContextContract) {
    const {id}= params
    try {
      const catalog = new Catalog
      await catalog.delete(id)

      const videografis = await Videographic.findBy("uuid",id)
      await videografis?.delete()

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
