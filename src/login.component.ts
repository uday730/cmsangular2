import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
//import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html' 
    //template:'<div #dataContainer></div>'
})


export class LoginComponent implements OnInit {
     public UserId:string;
    public Pwd:string;

    constructor(public router:Router) { }
    @ViewChild('dataContainer') dataContainer: ElementRef;

    ngOnInit() { 
        this.loadData('<h1>Testing</h1>')
    }
    loadData(data) {
       // this.dataContainer.nativeElement.innerHTML = data;
       // console.log(data);
    }

     public Login=()=>{
        if(this.UserId==="test" && this.Pwd==="test")
        {
            localStorage.setItem('currentUser','true');
            this.router.navigate(['/dashboard']);
        }
    }

    public LogOut =()=>{
        localStorage.removeItem('currentUser');
    }
}