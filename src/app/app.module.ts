import { NgModule } from "@angular/core";// core make the creation
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavComponent } from './Components/Nav/Nav.component';

import { FooterComponent } from './Components/Footer/Footer.component';
import { ProductComponent } from './Components/product/product.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations:[		//child declarations
    AppComponent, //need browsermodule to show on browser
      NavComponent,
      FooterComponent,
      ProductComponent
   ],
  imports:[
    BrowserModule,
    FormsModule
  ],
  bootstrap:[AppComponent]//start componant we can change it put don't
  // forget to change the componant name <app-root></app-root> to new name
  // <app-home>


})


export class AppModule
{

}
