import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FirstLettreUpperCasePipe } from './first-lettre-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FirstLettreUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
