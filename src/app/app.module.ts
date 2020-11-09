import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SocketioService} from './socketio.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  FirstComponent,
  SecondComponent,
  LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
