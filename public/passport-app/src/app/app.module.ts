import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

import { HomeService } from "./home/home.service";

import { UserResolver } from "./home/home-resolver.service";

import { AppRouting } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRouting
  ],
  providers: [
    HomeService,
    UserResolver,
    { provide: "API_URL", useValue: "http://localhost:3000" },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
