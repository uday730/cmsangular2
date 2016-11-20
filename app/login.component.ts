import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'login',
    //templateUrl: 'login.component.html'
    template:'<div #dataContainer></div>'
})


export class LoginComponent implements OnInit {
    constructor() { }
    @ViewChild('dataContainer') dataContainer: ElementRef;

    ngOnInit() { 
        this.loadData('<h1>Testing</h1>')
    }
    loadData(data) {
        this.dataContainer.nativeElement.innerHTML = data;
        console.log(data);
    }
}