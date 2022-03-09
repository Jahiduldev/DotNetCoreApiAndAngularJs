import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
  // { path: 'Dashboard', component: AdminDashboardComponent  },
  // { path: 'Distributor', loadChildren: './distributor/distributor.module#DistributorModule' },
  // { path: 'Dso',  loadChildren: './dso/dso.module#DsoModule' },
  // { path: 'EMoneyTransfer',   loadChildren: './e-money-transfer/e-money-transfer.module#EMoneyTransferModule' },
  // { path: 'Mapping',   loadChildren: './mapping/mapping.module#MappingModule' },
  // { path: 'PullEMoney',  loadChildren: './pull-e-money/pull-e-money.module#PullEMoneyModule' },
  // { path: 'RegistrationRequest',  loadChildren: './registration-request/registration-request.module#RegistrationRequestModule' },
  // { path: 'ReportPortal',   loadChildren: './report-portal/report-portal.module#ReportPortalModule' },
  // { path: 'Return',   loadChildren: './return/return.module#ReturnModule' },
  // { path: 'ServiceProvider',  loadChildren: './service-provider/service-provider.module#ServiceProviderModule' },
  // { path: 'Setting',  loadChildren: './setting/setting.module#SettingModule' },
  // { path: 'TransactionProfile',   loadChildren: './transaction-profile/transaction-profile.module#TransactionProfileModule' },
  // { path: 'Agent',   loadChildren: './agent/agent.module#AgentModule' },
  // { path: 'Customer',   loadChildren: './customer/customer.module#CustomerModule' },
  // { path: 'Profile', component: ProfileComponent  },
];

@NgModule({
  declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendRoutingModule { }



