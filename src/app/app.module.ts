import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from '../app/admin/admin.module';
import { UserModule } from '../app/user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule, UserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
