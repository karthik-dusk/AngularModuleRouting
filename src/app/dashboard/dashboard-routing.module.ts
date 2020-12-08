import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashoneComponent } from './dashone/dashone.component';
import { DashtwoComponent } from './dashtwo/dashtwo.component';

// const routes: Routes = [
//     { path: '', component: DashoneComponent },
//     { path: 'one', component: DashoneComponent },
//     { path: 'two', component: DashtwoComponent }
// ];

const routes: Routes = [
    { path: '',
      children: [
        { path: 'one', component: DashoneComponent },
        { path: 'two', component: DashtwoComponent }
      ]  
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }