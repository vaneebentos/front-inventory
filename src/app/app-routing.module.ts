import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/pages/dashboard-routing.module';

/* cuando la ruta este vacio redirige en dashboard */

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {enableTracing: false , useHash:true}  
    ),
  DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
