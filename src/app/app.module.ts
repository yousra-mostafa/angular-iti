import { NgModule } from "@angular/core";// core make the creation
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavComponent } from './Components/Nav/Nav.component';

import { FooterComponent } from './Components/Footer/Footer.component';
import { ProductComponent } from './Components/product/product.component';
import { FormsModule } from "@angular/forms";
import { RateComponent } from "./Components/rate/rate.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import {ProductDetailsComponent} from "./Components/product-details/product-details.component"

@NgModule({
  declarations: [		//child declarations
    AppComponent, //need browsermodule to show on browser
    NavComponent,
    FooterComponent,
    ProductComponent,
    RateComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]//start componant we can change it put don't
  // forget to change the componant name <app-root></app-root> to new name
  // <app-home>


})


export class AppModule {

}
