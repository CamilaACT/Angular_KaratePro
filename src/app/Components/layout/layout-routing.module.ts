import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { authGuard } from '../../custom/auth.guard';
import { RangoComponent } from './Pages/rango/rango.component';
import { ClubComponent } from './Pages/club/club.component';
import { CompetenciaComponent } from './Pages/competencia/competencia.component';

const routes: Routes = [{
  path:"",
  component:LayoutComponent,
  children:[
    {
      path:'usuarios',
      component:UsuarioComponent,
      canActivate:[authGuard]
    },
    {
      path:'rangos',
      component:RangoComponent,
      canActivate:[authGuard]
    }
    ,
    {
      path:'clubes',
      component:ClubComponent,
      canActivate:[authGuard]
    }
    ,
    {
      path:'competencias',
      component:CompetenciaComponent,
      canActivate:[authGuard]
    }


  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
