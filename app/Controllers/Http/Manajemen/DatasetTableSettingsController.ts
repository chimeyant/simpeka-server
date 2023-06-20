import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DatasetHeader from 'App/Models/DatasetHeader'

export default class DatasetTableSettingsController {
  public async index({params}: HttpContextContract) {
    const {dataset_uuid} = params


    const datasetheaders = await DatasetHeader.query().where("dataset_uuid", dataset_uuid).orderBy("id",'asc')

    const datas:{}[]=[]
    datasetheaders.forEach(element => {
      const row = {}
      row['id']= element.uuid
      row['text']= element.text
      row['width']= element.width
      row['align']= element.align
      row['sortable']= element.sortable ? {color:'green',text:"YES"}:{color:'red', text:'NO'}
      row['visible']= element.visible ? {color:'green',text:"YES"}:{color:'red', text:'NO'}
      datas.push(row)
    });

    return datas;
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({params}: HttpContextContract) {
    const {id}= params
    const datasetrowheader = await DatasetHeader.findBy("uuid",id)

    const data ={}
    data['id']= datasetrowheader?.uuid
    data['text']= datasetrowheader?.text
    data['width']= datasetrowheader?.width
    data['align']= datasetrowheader?.align
    data['visible']= datasetrowheader?.visible

    return data;
  }

  public async edit({}: HttpContextContract) {}

  public async update({params, request, response}: HttpContextContract) {
    const {id}= params
    const {text, width, align, visible} = request.all()

    try {
      const datarowheader = await DatasetHeader.findBy("uuid", id)
      datarowheader?.merge({text:text, width:width, align:align, visible:visible})
      await datarowheader?.save()

      return response.status(200).json({
        success:true,
        code : 200,
        message:"Proses ubah data berhasil..!",
        data: {
          id: datarowheader?.uuid,
          text: datarowheader?.text,
          width: datarowheader?.width,
          align: datarowheader?.align,
          visible: datarowheader?.visible ? {color:'green',text:'YES'} : {color:'red',text:'NO'}
        }
      })

    } catch (error) {

    }
  }

  public async destroy({}: HttpContextContract) {}
}
