import { __decorate, __param, __metadata } from 'tslib';
import { Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

var MyLibService = /** @class */ (function () {
    function MyLibService(document) {
        this.document = document;
    }
    MyLibService.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MyLibService.ɵprov = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(ɵɵinject(DOCUMENT)); }, token: MyLibService, providedIn: "root" });
    MyLibService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Document])
    ], MyLibService);
    return MyLibService;
}());

var MyLibComponent = /** @class */ (function () {
    function MyLibComponent() {
    }
    MyLibComponent.prototype.ngOnInit = function () {
    };
    MyLibComponent = __decorate([
        Component({
            selector: 'lib-my-lib',
            template: "\n    <p>\n      my-lib works!\n    </p>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], MyLibComponent);
    return MyLibComponent;
}());

var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule = __decorate([
        NgModule({
            declarations: [MyLibComponent],
            imports: [],
            exports: [MyLibComponent]
        })
    ], MyLibModule);
    return MyLibModule;
}());

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.js.map
