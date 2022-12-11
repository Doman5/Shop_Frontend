import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullpageModule } from './layouts/fullpage/fullpage.module';
import { FullpageadminModule } from './layouts/fullpageadmin/fullpageadmin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DefaultModule } from './layouts/default/default.module';
import { FullpageadminemptyModule } from './layouts/fullpageadminempty/fullpageadminempty.module';
import { jwtInterceptor } from './modules/common/interceptor/jwt.interceptor';
import { AdminAuthorizationGuard } from './modules/admin/common/quard/adminAuthorizationGuard';
import { LostPasswordComponent } from './modules/login/lost-password/lost-password.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullpageModule,    
    FullpageadminModule,
    FullpageadminemptyModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true },
    AdminAuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
