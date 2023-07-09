import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FakeBackendComponent } from './_helpers/fake-backend/fake-backend.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FakeBackendComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
