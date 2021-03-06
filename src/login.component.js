"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
//import { Observable } from 'rxjs/Observable';
let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
        this.Login = () => {
            if (this.UserId === "test" && this.Pwd === "test") {
                localStorage.setItem('currentUser', 'true');
                this.router.navigate(['/dashboard']);
            }
        };
        this.LogOut = () => {
            localStorage.removeItem('currentUser');
        };
    }
    ngOnInit() {
        this.loadData('<h1>Testing</h1>');
    }
    loadData(data) {
        // this.dataContainer.nativeElement.innerHTML = data;
        // console.log(data);
    }
};
__decorate([
    core_1.ViewChild('dataContainer'), 
    __metadata('design:type', core_1.ElementRef)
], LoginComponent.prototype, "dataContainer", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html'
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map