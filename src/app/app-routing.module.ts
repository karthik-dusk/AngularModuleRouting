import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApptwoComponent } from './apptwo/apptwo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: ApptwoComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'src/app/dashboard/dashboard-routing.module#DashboardRoutingModule',
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
