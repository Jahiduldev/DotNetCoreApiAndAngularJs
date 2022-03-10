import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { FrontendlayoutComponent } from './layout/frontendlayout/frontendlayout.component';

const routes: Routes = [
  { path: '',  component:FrontendlayoutComponent, loadChildren: () => import('./home/frontend/frontend.module').then(m => m.FrontendModule) },
  { path: 'admin', component: AdminHeaderComponent, loadChildren: () => import('./home/admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: "/User/Login", pathMatch: 'full' },
  { path: '**', redirectTo: "/User/Login", pathMatch: 'full' },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [CommonModule,RouterModule]
})
export class AppRoutingModule { }



