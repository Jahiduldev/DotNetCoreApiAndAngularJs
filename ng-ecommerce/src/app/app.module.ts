import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrontendHeaderComponent } from './layout/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './layout/frontend-footer/frontend-footer.component';
import { AdminFooterComponent } from './layout/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './layout/admin-header/admin-header.component';
import { AdminNavbarComponent } from './layout/admin-navbar/admin-navbar.component';
import { FrontendNavbarComponent } from './layout/frontend-navbar/frontend-navbar.component';
import { HomeComponent } from './home/frontend/home/home.component';
import { ShopComponent } from './home/frontend/shop/shop.component';
import { AboutComponent } from './home/frontend/about/about.component';
import { ContactComponent } from './home/frontend/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontendRoutingModule } from './home/frontend/frontend-routing.module';
import { AdminRoutingModule } from './home/admin/admin-routing.module';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { FrontendlayoutComponent } from './layout/frontendlayout/frontendlayout.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendHeaderComponent,
    FrontendFooterComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminNavbarComponent,
    FrontendNavbarComponent,
    HomeComponent,
    ShopComponent,
    //AboutComponent,
    ContactComponent,
    FrontendlayoutComponent,
    AdminlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontendRoutingModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
