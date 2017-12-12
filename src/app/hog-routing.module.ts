import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { NavbarComponent }      from './navbar/navbar.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TopupComponent }       from './topup/topup.component';
import { PosComponent }         from './pos/pos.component';
import { StationComponent }     from './station/station.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'topup',
        component: TopupComponent
    },
    {
        path: 'pos',
        component: PosComponent
    },
    {
        path: 'station',
        component: StationComponent
    }
];

@NgModule({
    imports: 
    [ 
        RouterModule.forRoot(routes)
    ],
    exports: 
    [
        RouterModule
    ]
})

export class AppRoutingModule {}