import { Component } from '@angular/core';
import { UtilidadService } from '../../Reutilizable/utilidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private utilidadService: UtilidadService, private router: Router) { }

  logout() {

    this.utilidadService.eliminarSesionUsuario();


    this.router.navigate(['/login']);
  }
}
