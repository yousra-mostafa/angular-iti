import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductComponent } from './Components/product/product.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/About/About.component';

export const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products',component:ProductComponent},
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:"**", redirectTo: "home",pathMatch:"full"} //if path not found


];
