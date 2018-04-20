import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule, routingComponents } from './routing.module.1'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
