import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'dashboard',
    templateUrl:'dashboard.component.html'
})

export class DashboardComponent implements OnInit
{
    constructor(public router:Router){}
    ngOnInit():void{
        var user =localStorage.getItem('currentUser'); 
        if(user!=='true')
        {
                this.router.navigate(['/login']);
        }
    }

}