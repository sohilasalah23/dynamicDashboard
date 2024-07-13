import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from 'src/core/guard/auth.guard';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { BrandDetialsComponent } from './brand-detials/brand-detials.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllordersComponent } from './allorders/allorders.component';

const routes: Routes = [ {path:"",redirectTo:"login",pathMatch:"full"},

{path:"login",component:LoginComponent,title:"LogIn"},
{path:"register",component:RegisterComponent,title:"register"},
{path:"home", canActivate:[authGuard],component:HomeComponent,title:"Home"},
{path:"brand", canActivate:[authGuard],component:BrandComponent,title:"Brand"},
{path:"category", canActivate:[authGuard],component:CategoryComponent,title:"category"},
{path:"allorders", canActivate:[authGuard],component:AllordersComponent,title:"allOrders"},
{path:"checkout/:cartId", canActivate:[authGuard],component:CheckOutComponent,title:"checkOut"},
{path:"productDetials/:id", canActivate:[authGuard],component:ProductDetialsComponent,title:"productDetials"},
{path:"brandDetials/:id", canActivate:[authGuard],component:BrandDetialsComponent,title:"brandDetials"},

{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },











{path:"**",component:NotFoundComponent,title:"NotFounded"},];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
