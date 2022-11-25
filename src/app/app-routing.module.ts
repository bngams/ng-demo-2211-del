import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Routes => Route[]
const routes: Routes = [
  // url /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'get-started', component: GetStartedComponent },
  { path: 'event', data: { preload: true }, canLoad: [], loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule)},
  { path: 'product', canLoad: [], loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
  // ** still at the end
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
