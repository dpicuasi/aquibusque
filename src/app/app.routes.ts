import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home',redirectTo:'', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
];
