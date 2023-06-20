import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Visualization from 'App/Models/Visualization'
import VisualizationValidator from 'App/Validators/Manajemen/VisualizationValidator';
import Catalog from 'App/Helpers/Catalog';
import Env from "@ioc:Adonis/Core/Env"
import Drive from '@ioc:Adonis/Core/Drive'

export default class VisualizationsController {
  public async index({}: HttpContextContract) {
    const visualizations = await Visualization.query().orderBy("created_at",'desc')

    const datas:{}[]= []

    visualizations.forEach(async element => {
      const row={}
      row['id']= element.uuid
      row['name']= {text: element.name, counter:element.counter}
      row['thumbnail']= Env.get("BASE_URL")+  await Drive.getSignedUrl("images/visualizations/"+ element.thumbnail)
      row['counter']= element.counter
      row['status']= element.status ? {color:'green',text:"Publish"}:{color:'red',text:'UnPublish'}
      datas.push(row)
    });

    return datas;
  }

  public async create({}: HttpContextContract) {}

  public async store({request, response, auth}: HttpContextContract) {
    const {name, group_data_uuid,topic_uuid, organization_uuid, descriptions, thumbnail,tag}= request.all()

    await request.validate(VisualizationValidator)

    try {
      const user =  auth.user
      const visualization = new Visualization
      visualization.name = name
      visualization.groupDataUuid = group_data_uuid
      visualization.topicUuid = topic_uuid
      visualization.organizationUuid = organization_uuid
      visualization.descriptions = descriptions
      visualization.thumbnail = thumbnail
      visualization.createdBy = user?.id
      visualization.tag = tag
      await visualization.save()

      const catalog = new Catalog()
      await catalog.store(group_data_uuid,topic_uuid, organization_uuid,"visualisasi",visualization.uuid, name, tag, false)

      return response.status(200).json({
        success:true,
        code:200,
        message:"Proses tambah data visualisasi berhasil..!",
        data: {
          id:visualization.uuid,
          group_data_uuid:visualization.groupDataUuid,
          topic_uuid: visualization.topicUuid,
          organization_uuid: visualization.organizationUuid,
          name:{text: visualization.name, counter:visualization.counter},
          descriptions:visualization.descriptions,
          thumbnail: Env.get("BASE_URL")+ await Drive.getSignedUrl("images/visualizations/"+ visualization.thumbnail)
        }
      })

    } catch (error) {
      return response.status(500).json({
        success:false,
        code:500,
        message:"Opps..., terjadi kesalahan..!",
        errors:error
      })
    }

  }

  public async show({params}: HttpContextContract) {
    const {id}= params
    const visualization = await Visualization.findBy('uuid', id)

    return visualization?.datarecord
  }

  public async edit({}: HttpContextContract) {}

  public async update({params, request, response,auth}: HttpContextContract) {
    const {id}= params
    const {name, group_data_uuid,topic_uuid, organization_uuid, descriptions, thumbnail,tag}= request.all()

    await request.validate(VisualizationValidator)

    try {
      const user =  auth.user
      const visualization = await Visualization.findBy("uuid",id)
      visualization?.merge({name:name, groupDataUuid:group_data_uuid,topicUuid:topic_uuid,organizationUuid:organization_uuid,descriptions:descriptions,thumbnail:thumbnail,tag:tag})

      await visualization?.save()

      const catalog = new Catalog()
      await catalog.store(group_data_uuid,topic_uuid, organization_uuid,"visualisasi",visualization?.uuid, name, tag, false)

      return response.status(200).json({
        success:true,
        code:200,
        message:"Proses tambah data visualisasi berhasil..!",
        data: {
          id:visualization?.uuid,
          group_data_uuid:visualization?.groupDataUuid,
          topic_uuid: visualization?.topicUuid,
          organization_uuid: visualization?.organizationUuid,
          name:{text: visualization?.name, counter:visualization?.counter},
          descriptions:visualization?.descriptions,
          thumbnail: Env.get("BASE_URL")+ await Drive.getSignedUrl("images/visualizations/"+ visualization?.thumbnail)
        }
      })

    } catch (error) {
      return response.status(500).json({
        success:false,
        code:500,
        message:"Opps..., terjadi kesalahan..!",
        errors:error
      })
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    const {id}= params

    try {
      const catalog = new Catalog()
      await catalog.delete(id)

      const visualisasi = await Visualization.findBy("uuid",id)
      await visualisasi?.delete()

      return response.status(200).json({
        success:true,
        code:200,
        message:"Proses hapus data berhasil..",
        data:{
          id:id
        }

      })

    } catch (error) {
      return response.status(500).json({
        success: false,
        code:500,
        message:"Opps..., terjadi kesalahan ",
        errors:error
      })
    }
  }
}
