import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTypeCreateComponent } from './product-type-create/product-type-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: 'index.html', component: ProductListComponent },
  {path:'productType', component: ProductTypeCreateComponent},
  { path: 'products', component: ProductCreateComponent },
  { path: 'products/:id', component: ProductEditComponent },
  { path: '', redirectTo: '/index.html', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
