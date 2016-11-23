import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {LoginComponent} from '../src/login.component';
import {DashboardComponent} from '../src/Dashboard/dashboard.component';
import {AppComponent} from './app.component';


const routes:Routes=[
     { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}