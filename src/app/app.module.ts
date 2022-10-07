import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';

@NgModule({
  declarations: [
    AppComponent,
    RestuarantsListComponent,
    HeaderComponent,
    FooterComponent,
    ViewRestuarantComponent,
    AddRestuarantComponent,
    UpdateRestuarantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
