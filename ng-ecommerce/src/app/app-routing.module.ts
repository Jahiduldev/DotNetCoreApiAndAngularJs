import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '',loadChildren: () => import('./home/frontend/frontend.module').then(m => m.FrontendModule) },
  { path: 'admin', loadChildren: () => import('./home/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [CommonModule,RouterModule]
})
export class AppRoutingModule { }



