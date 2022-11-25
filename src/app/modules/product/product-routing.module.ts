import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';

const routes: Routes = [
  // '' => after loadChildren it's '/product'
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // 'dashboard' => after loadChildren it's '/product/dashboard'
  { path: 'dashboard', component: ProductDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
