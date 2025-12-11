import { Routes } from '@angular/router';
import { Home } from './employee/home/home';

export const routes: Routes = [
    {path: "employee/home", component:Home},
    {path: "employee", redirectTo:"employee/home", pathMatch:"full"},
    {path: "", redirectTo:"employee/home", pathMatch:"full"},
];
