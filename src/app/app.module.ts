import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

import { DataRepositoryService } from './data-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    LoginComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
