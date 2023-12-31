import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App//Models/User"
import UserValidator from 'App/Validators/MasterData/UserValidator'
import UpdateProfilValidator from 'App/Validators/Utility/UpdateProfilValidator'
import Env from "@ioc:Adonis/Core/Env"
import Drive from "@ioc:Adonis/Core/Drive"

export default class UsersController {
  public async index({request,response}: HttpContextContract) {
    const {page, itemsPerPage}= request.only(['page','itemsPerPage'])

    const users = await User.query().withScopes((scopes)=> scopes.filterOn(request)).paginate(page,itemsPerPage)

    return users;
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
    const {name, email, authent,status} = request.all()

    await request.validate(UserValidator)

    try {
      const user = new User()
      user.name = name
      user.email = email
      user.password = "12345678"
      user.authent = authent
      user.status = status
      await user.save()

      return response.json({
        code:200,
        success:true,
        message:"Tambah pengguna berhasil",
        data: user
      })
    } catch (error) {
      return response.status(500).json({
        code :500,
        success: false,
        message:"Opps..., terjadi kesalahan "+ error
      })
    }

  }

  public async show({params}: HttpContextContract) {
    const {id}= params
    const user = await User.query().select('id','name','email','authent','status').where('id',id).first()

    return user;
  }

  public async edit({}: HttpContextContract) {}

  public async update({params, request,response}: HttpContextContract) {
    const {id}= params


    const {name,authent, status, phone, recieve_message, reset}= request.all()

    await request.validate(UserValidator)

    try {
      const user = await User.findOrFail(id)
      user.name = name
      user.authent =authent
      user.status = status
      user.phone = phone
      user.recieveMessage = recieve_message
      if(reset){
        user.password = "12345678"
      }
      await user?.save()

      return response.json({
        code:200,
        success:true,
        message:"Proses ubah data berhasil",
        data: user
      })
    } catch (error) {
      return response.json({
        status:false,
        message:"Opps..., terjadi kesalahan "+ error
      })
    }
  }

  public async destroy({params, request,response}: HttpContextContract) {
    const {id}= params
    try {
      const user = await User.findBy('id',id)
      await user?.delete()
      return response.json({
        code :200,
        success:true,
        message:"Proses hapus data berhasil...",
        data:{
          id:id
        }
      })
    } catch (error) {
      return response.status(500).json({
        code:500,
        success:false,
        message:"Opps..., terjadi kesalahan "+ error,
        data:{}
      })
    }
  }

  public async userInfo({request,response,auth}: HttpContextContract){
    const user = await auth.user;
    const data ={}
    data['id']= user?.id
    data['name']= user?.name
    data['email']= user?.email
    data['authent']= user?.authent
    data['avatar']= user?.avatar
    data['avatar_path'] = user?.avatar ? Env.get("BASE_URL")+ await Drive.getSignedUrl( "images/avatars/"+ user?.avatar):  Env.get("BASE_URL")+ await Drive.getSignedUrl( "images/avatars/avatar.png")
    return data;
  }

  public async updateProfil({request,response,auth}:HttpContextContract){
    const user = await auth.user
    const data = request.only(['name','avatar']);


    //validasi form
    await request.validate(UpdateProfilValidator)

    try {
      const profil = await User.findBy("id", user?.id)
      profil?.merge(data)
      await profil?.save()

      return response.json({
        status:true,
        message:"Proses ubah profil berhasil..."
      })
    } catch (error) {
      return response.json({
        status:false,
        message: "Opps..., terjadi kesalahan "+ error
      })
    }
  }

  public async changePwd({request,response,auth}:HttpContextContract){
    const authuser = await auth.user
    const data = request.only(['password']);
    try {
      const user = await User.findBy('id', authuser?.id)
      user?.merge(data)
      await user?.save()

      return response.json({
        status:true,
        message:"Proses ubah kata sandi berhasil..."
      })
    } catch (error) {
      return response.json({
        status:false,
        message:"Opps..., terjadi kesalahan "+ error
      })
    }
  }
}
