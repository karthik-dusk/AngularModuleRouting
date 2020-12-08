import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashoneComponent } from './dashone/dashone.component';
import { DashtwoComponent } from './dashtwo/dashtwo.component';

@NgModule({
    declarations: [DashoneComponent, DashtwoComponent],
    imports: [
        RouterModule,
        CommonModule,
        DashboardRoutingModule
    ],
    providers: [],
    bootstrap:[]
})
export class DashboardModule {

}