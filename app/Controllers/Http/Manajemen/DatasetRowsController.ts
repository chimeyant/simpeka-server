import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DatasetRow from "App/Models/DatasetRowDatum"
import DatasetRowHeader from 'App/Models/DatasetRowHeader'

export default class DatasetRowsController {
  public async index({params}: HttpContextContract) {
    const {dataset_detail_uuid}= params

    const datasetrows = await DatasetRow.findBy("dataset_detail_uuid", dataset_detail_uuid)

    return datasetrows?.bodys
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}

  public async headers({params}){
    const {dataset_detail_uuid}= params

    const datasetrows = await DatasetRow.findBy("dataset_detail_uuid", dataset_detail_uuid)

    const datasetrowheaders = await DatasetRowHeader.query().where("dataset_row_data_uuid", datasetrows?.uuid).where('visible',true).orderBy("id","asc")

    const datas:{}[]=[]

    datasetrowheaders.forEach(element => {
      const row ={}
      row['text']= element.text
      row['value']= element.value
      row['width']= element.width
      row['align']= element.align
      datas.push(row)
    });

    return datasetrowheaders
  }
}
