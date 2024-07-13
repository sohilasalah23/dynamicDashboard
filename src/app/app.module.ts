import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrandComponent } from './brand/brand.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrandDetialsComponent } from './brand-detials/brand-detials.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SearchProductPipe } from './search-product.pipe';
import { CheckOutComponent } from './check-out/check-out.component';
import { AllordersComponent } from './allorders/allorders.component';
import { HttpReqInterceptor } from './http-req.interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BrandComponent,
    NavBarComponent,
    CategoryComponent,
    NotFoundComponent,
    FeaturedProductComponent,
    ProductItemComponent,
    ProductDetialsComponent,
    BrandDetialsComponent,
    MainSliderComponent,
    SearchProductPipe,
    CheckOutComponent,
    AllordersComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:HttpReqInterceptor,
     multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
