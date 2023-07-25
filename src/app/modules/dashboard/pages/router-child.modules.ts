import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

/* routes, todas las rutas que se define en nuestro modulo,
 es la definicion o asignan  las ruta  */
const childRoutes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'home', component: HomeComponent},
]

/* las rutas hijas  */
@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
   
})
export class RouterChildModule { }
