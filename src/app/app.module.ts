import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { ViewAvailabilityComponent } from './view-availability/view-availability.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckAvailabilityComponent,
    ViewAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
