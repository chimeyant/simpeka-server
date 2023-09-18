import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AppInfo from 'App/Models/AppInfo'
import Env from "@ioc:Adonis/Core/Env"
import Drive from "@ioc:Adonis/Core/Drive"


export default class AppsController {
  async index({}:HttpContextContract){
    const appinfo = await AppInfo.query().first()

    const logourl = await Drive.getSignedUrl("images/apps/"+ appinfo?.app_logo)

   const data = {
    app_name: appinfo?.app_name,
    app_ver: appinfo?.app_ver,
    app_desc: appinfo?.app_desc,
    app_logo: appinfo?.app_logo == 'logo-opendata.png'? Env.get("BASE_URL")+  "/images/apps/"+ appinfo?.app_logo :Env.get("BASE_URL")+ logourl  ,
    app_theme: {
      mode:appinfo?.app_theme,
      color:appinfo?.app_color
    },
    app_background: Env.get("BASE_URL")+ "/images/apps/"+   appinfo?.app_background,
    app_nav : Env.get("BASE_URL")+ "/images/apps/"+   appinfo?.app_nav,
    app_url: appinfo?.app_url,
    app_company: appinfo?.app_company,
    app_slogan: appinfo?.app_slogan,
    app_address: appinfo?.app_address,
    app_wa: appinfo?.app_wa
   }

   return data;
  }

  async menus({auth}: HttpContextContract){
    const user = await auth.user

    const authent = await user?.authent

    let menus :{} = [];

    if(authent == 'superadmin'){
      menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/backend/dashboard",
        },
        {
          title: "",
          type: "divider",
        },
        {
          title: "DATA MASTER",
          icon: "settings",
          route: "/",
          type: "subMenu",
          submenus:[
            {
              title: "Informasi Aplikasi",
              icon: "mdi-desktop-mac-dashboard",
              route: "/backend/master-app-info",
              type: "item",
            },
            {
              title: "Kategori",
              icon: "mdi-widgets",
              route: "/backend/master-category",
              type: "item",
            },
            {
              title: "Dokter",
              icon: "mdi-doctor",
              route: "/backend/master-dokter",
              type: "item",
            },
            {
              title: "Kelas BPJS",
              icon: "mdi-home-floor-1",
              route: "/backend/master-kelas-bpjs",
              type: "item",
            },
            {
              title: "Master Pencarian Penyebab",
              icon: "mdi-book-open-variant",
              route: "/backend/master-problem",
              type: "item",
            },
            {
              title: "Master Diagnosis",
              icon: "mdi-palette-swatch",
              route: "/backend/master-diagnosis",
              type: "item",
            },
            {
              title: "Master Tindakan",
              icon: "mdi-clipboard-list-outline",
              route: "/backend/master-proclist",
              type: "item",
            },
          ]
        },
        { title: "MANAJEMEN", type: "subMenu", route: "/", submenus:[
          {
            title: "Data Klaim",
            icon: "mdi-bullhorn-outline",
            route: "/backend/manajemen-klaim",
            type: "item",
          },

        ] },

        { title: "UTILITAS", type: "subMenu", route: "/" , submenus:[
          {
            title: "Manajemen Pengguna",
            icon: "engineering",
            route: "/backend/user",
            type: "item",
          },
          {
            title: "Profil Pengguna",
            icon: "accessibility",
            route: "/backend/profil-akun",
            type: "item",
          },
          {
            title: "Ganti Kata Sandi",
            icon: "vpn_key",
            route: "/backend/chngpwd",
            type: "item",
          },

        ]},

      ];

      return menus;
    }

    if(authent == 'administrator'){
      menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/backend/dashboard",
        },

        {
          title: "DATA MASTER",
          icon: "settings",
          route: "/",
          type: "subMenu",
          submenus:[

            {
              title: "Kategori",
              icon: "mdi-widgets",
              route: "/backend/master-category",
              type: "item",
            },
            {
              title: "Dokter",
              icon: "mdi-doctor",
              route: "/backend/master-dokter",
              type: "item",
            },
            {
              title: "Kelas BPJS",
              icon: "mdi-home-floor-1",
              route: "/backend/master-kelas-bpjs",
              type: "item",
            },
            {
              title: "Master Pencarian Penyebab",
              icon: "mdi-book-open-variant",
              route: "/backend/master-problem",
              type: "item",
            },
            {
              title: "Master Diagnosis",
              icon: "mdi-palette-swatch",
              route: "/backend/master-diagnosis",
              type: "item",
            },
            {
              title: "Master Tindakan",
              icon: "mdi-clipboard-list-outline",
              route: "/backend/master-proclist",
              type: "item",
            },
          ]
        },

        { title: "MANAJEMEN", type: "subMenu", route: "/", submenus:[
          {
            title: "Data Klaim",
            icon: "mdi-bullhorn-outline",
            route: "/backend/manajemen-klaim",
            type: "item",
          },

        ] },



        { title: "Utility", type: "subheader", route: "/" },

        {
          title: "Akun Aplikasi",
          icon: "engineering",
          route: "/backend/user",
          type: "item",
        },
        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/backend/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/backend/chngpwd",
          type: "item",
        },

        {
          title: "Update History",
          icon: "mdi-update",
          route: "/backend/utility-update-history",
          type: "item",
        },
      ];
      return menus;
    }


    if(authent == 'kepala-rumah-sakit'){
      menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/backend/dashboard",
        },
        { title: "Utility", type: "subheader", route: "/" },
        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/backend/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/backend/chngpwd",
          type: "item",
        },
      ];
      return menus;
    }

    if(authent == 'dokter'){
      menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/backend/dashboard",
        },
        { title: "Utility", type: "subheader", route: "/" },
        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/backend/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/backend/chngpwd",
          type: "item",
        },
      ];
      return menus;
    }

  }
}
