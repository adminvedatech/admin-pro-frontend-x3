import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // menu: any[] = [];

  menu: any = [
    {
      titulo: 'Bancos',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo : 'ProgressBar', url: '/progress' },
        { titulo: 'Gráficas', url: '/graphics' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'RxJs', url: '/rxjs' }
      ]
    }]
  //   {
  //     titulo: 'Mantenimientos',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: '/usuarios' },
  //       { titulo: 'Hospitales', url: '/hospitales' },
  //       { titulo: 'Médicos', url: '/medicos' }
  //     ]
  //   }
  // ];

  // constructor(
  //   // public _usuarioService: UsuarioService
  // ) { }

  // cargarMenu() {
  //   // this.menu = this._usuarioService.menu;
  // }
  }


