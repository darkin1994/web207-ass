import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path : 'Detail/:id',
    component : ProductDetailComponent,
    pathMatch: 'full'
  },
  {
    path : 'Edit/:id',
    component : ProductEditComponent
  },
  {
    path : 'Add',
    component : ProductAddComponent
  },
  {
    path : 'Index',
    component : BodyComponent
  },
  {
    path : 'About',
    component : AboutComponent
  },
  {
    path : 'Contact',
    component : ContactComponent
  },
  {
    path : 'Manager',
    component : ProductManagerComponent
  },
  {
    path: '',
    redirectTo: '/Index',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    ProductDetailComponent,
    AboutComponent,
    ProductManagerComponent,
    ProductEditComponent,
    ProductAddComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
