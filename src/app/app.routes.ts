import { Routes } from '@angular/router';
import { CutomerComponent } from './component/cutomer/cutomer.component';

export const routes: Routes = [
    { path: '', component: CutomerComponent },
    {
        path: 'customer', 
        loadComponent: () => import('./component/cutomer/cutomer.component').then(m => m.CutomerComponent),
    },
    {
        path: 'customer/add', 
        loadComponent: () => import('./component/addcustomer/addcustomer.component').then(m => m.AddcustomerComponent),
    },
    {
        path: 'customer/edit/:id', 
        loadComponent: () => import('./component/addcustomer/addcustomer.component').then(m => m.AddcustomerComponent),
    },
];
