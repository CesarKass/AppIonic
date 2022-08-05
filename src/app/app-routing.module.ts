import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }, 
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full'
  }, 
  {
    path: 'cars',
    children: [
      {
        path: '',
        loadChildren: () => import('./cars/cars.module').then( m => m.CarsPageModule)
      },
      {
        path: ':carID',
        loadChildren: () => import('./cars/cars-details/cars-details.module').then( m => m.CarsDetailsPageModule)
      }
    ]
  },
  {
    path: 'car-add',
    loadChildren: () => import('./cars/car-add/car-add.module').then( m => m.CarAddPageModule)
  },
  {
    path: 'car-edit/:carID',
    loadChildren: () => import('./cars/car-edit/car-edit.module').then( m => m.CarEditPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
