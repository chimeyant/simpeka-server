import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permohonan from 'App/Models/Permohonan'
import { DateTime } from 'luxon';
import Whatsapp from 'App/Helpers/Whatsapp'

export default class PermohonansController {
  public async index({}: HttpContextContract) {
    const permohonans = await Permohonan.query().orderBy("status",'asc').orderBy("created_at",'asc')

    const datas:{}[]= []

    permohonans.forEach(element => {
      const row ={}
      row['id'] = element.uuid
      row['name']= element.name
      row['permohonan'] = element.kebutuhan
      row['tanggal']= DateTime.fromISO(element.createdAt).toFormat("dd/mm/yyyy  HH:MM:ss") + " WIB"
      row['status']= element.status == '1' ? {color:'orange',text:'Permohonan Baru'} : element.status == '2' ? {color:'blue',text: 'Dalam Proses'} :{ color:'green', text:'Selesai'}
      datas.push(row)
    });

    return datas;
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params, response}: HttpContextContract) {
    const {id}= params

    try {
      const permohonan = await Permohonan.findBy("uuid", id)
      await permohonan?.delete()

      return response.status(200).json({
        code:200,
        success: true,
        message:"Proses hapus data berhasil..!",
        data:{
          id:permohonan?.id
        },
        errors:[]

      })
    } catch (error) {
      return response.status(500).json({
        code:500,
        success:false,
        message:"Ops..., terjadi kesalahan",
        errors: error
      })
    }
  }

  public async setStatus({request, response}:HttpContextContract){
    const {id, status}= request.all()

    try {
      const permohonan = await Permohonan.findBy("uuid",id)
      permohonan?.merge({status:status})
      await permohonan?.save()


      //kirim ke whatapp yang bersangkutan
      //send message via whatsapp
      if(status == 2){
         await Whatsapp.sendMessage(permohonan?.telp, "Hai..., "+ permohonan?.name + ". Permohonan anda dengan nomor registrasi : *" + permohonan?.noregister + "* Telah masuk dalam proses pengerjaan \r\n\r\nTerima Kasih, Salam Satu Data" )
      }else{
        await Whatsapp.sendMessage(permohonan?.telp, "Hai..., "+ permohonan?.name + ". Permohonan anda dengan nomor registrasi *" + permohonan?.noregister + "* Telah  selesai, untuk lebih lengkapnya silahkan anda lihat di website opendata kami \r\n\r\nTerima Kasih, Salam Satu Data" )
      }



      return response.status(200).json({
        code:200,
        success:true,
        message:"Proses update status berhasil",
        data: permohonan
      })

    } catch (error) {
      return response.status(500).json({
        code:500,
        success:false,
        message:"Ops..., terjadi kesalahan ",
      })
    }
  }
}
