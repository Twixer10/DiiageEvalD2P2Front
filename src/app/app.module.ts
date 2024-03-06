import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Add this import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEventComponent } from './list-event/list-event.component';

@NgModule({
  declarations: [AppComponent, ListEventComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], // Add HttpClientModule to the imports array
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
