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
var employee_service_1 = require('./services/employee.service');
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, router, activatedRouter) {
        this.employeeService = employeeService;
        this.router = router;
        this.activatedRouter = activatedRouter;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.queryParams.subscribe(function (param) {
            _this.currentPage = param['page'] || 1;
            //alert(this.currentPage);
        });
        this.LoadData();
    };
    EmployeeComponent.prototype.Delete = function (id) {
        var _this = this;
        var cofm = confirm("Are you sure to delete this item?");
        if (cofm) {
            this.employeeService.Delete(id).subscribe(function (respone) {
                if (respone) {
                    alert('Chuc mung xoa thanh cong lelelel!@@@@@@@@@');
                    _this.router.navigate(['employee']);
                    _this.LoadData();
                }
            });
        }
    };
    EmployeeComponent.prototype.LoadData = function () {
        var _this = this;
        this.employeeService.GetList().subscribe(function (respone) {
            _this.employees = respone;
        }, function (error) {
            console.log("Loi API");
        });
        this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };
    //Tim kiem
    EmployeeComponent.prototype.Search = function () {
        var _this = this;
        this.employeeService.Search(this.keyWord).subscribe(function (respone) {
            _this.employees = respone;
        }, function (error) {
            console.log("Loi API");
        });
        this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: "my_employee",
            templateUrl: "./app/employee.component.html",
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router, router_1.ActivatedRoute])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map