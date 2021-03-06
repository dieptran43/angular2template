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
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.cone = true;
        this.ctwo = true;
        this.style = "italic";
        this.size = "30px";
    }
    TutorialComponent.prototype.toggle = function () {
        this.cone = !this.cone;
        this.ctwo = !this.ctwo;
    };
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my_tutorial',
            template: "\n        <h2>This is template tutorial of TutorialComponent</h2>\n        <p [ngClass]=\"{classOne:cone, classTwo:ctwo}\">This is <strong>ngClass nhe ku </strong> apply style</p>\n        <button (click)=\"toggle()\">Click toggle</button>\n        <h1>Cai Directive ngStyle nay laf style inline</h1>\n        <p [ngStyle]=\"{'font-style':style, 'font-size':size}\"> Noi dung muon hien thi inline ne</p>\n        <my_stuctualDirectives></my_stuctualDirectives>\n    ",
            styles: [
                "\n            .classOne{\n                color: blue;\n            }\n            .classTwo{\n                background-color: red;\n            }\n        "
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map