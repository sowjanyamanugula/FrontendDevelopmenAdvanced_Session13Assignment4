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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var UsersComponent = (function () {
    function UsersComponent(router) {
        this.router = router;
        this.userList = [
            { name: "Avnesh Shakya", id: 1, profession: "Employee" },
            { name: "Adam", id: 2, profession: "Employee" },
            { name: "Eve", id: 3, profession: "Employee" },
            { name: "Mohan", id: 4, profession: "Employee" },
            { name: "Sohan", id: 5, profession: "Employee" },
        ];
    }
    UsersComponent.prototype.onSelect = function (user) {
        this.router.navigate(['/users', user.id]);
    };
    UsersComponent = __decorate([
        core_1.Component({
            template: "<h1>Users Component</h1>\n             <ul *ngFor=\"let user of userList\">\n                <li (click)=\"onSelect(user)\">{{user.name}}</li>\n              </ul>",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map