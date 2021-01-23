import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduceComponent } from './client-side/introduce/introduce.component';
import { HttpService } from './Service/http.service';
import { CommonModule } from '@angular/common';
import { ClientSideComponent } from './client-side/client-side.component';
import { QuestionsComponent } from './client-side/questions/questions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroduceComponent,
    ClientSideComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
