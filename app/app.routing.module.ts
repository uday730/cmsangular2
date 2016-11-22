import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {LoginComponent} from '../src/login.component';
import {AppComponent} from './app.component';

const routes:Routes=[
    { path: 'login', component: LoginComponent },
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}