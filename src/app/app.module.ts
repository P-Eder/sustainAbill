import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ListOfReceiptsComponent } from "./main/list-of-receipts/list-of-receipts.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./main/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    ListOfReceiptsComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
