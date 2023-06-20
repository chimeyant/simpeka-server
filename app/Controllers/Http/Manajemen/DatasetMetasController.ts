import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DatasetMeta from 'App/Models/DatasetMeta'

export default class DatasetMetasController {
  public async index({params}: HttpContextContract) {
    const {dataset_uuid}= params

    const datasetmeta = await DatasetMeta.findBy("dataset_uuid", dataset_uuid)

    return datasetmeta;
  }

  public async create({}: HttpContextContract) {}

  public async store({params, request, response}: HttpContextContract) {
    const {dataset_uuid}= params

  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
