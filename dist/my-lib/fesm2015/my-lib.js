import { __decorate, __param, __metadata } from 'tslib';
import { Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

let MyLibService = class MyLibService {
    constructor(document) {
        this.document = document;
    }
};
MyLibService.ctorParameters = () => [
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MyLibService.ɵprov = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(ɵɵinject(DOCUMENT)); }, token: MyLibService, providedIn: "root" });
MyLibService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Document])
], MyLibService);

let MyLibComponent = class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyLibComponent = __decorate([
    Component({
        selector: 'lib-my-lib',
        template: `
    <p>
      my-lib works!
    </p>
  `
    }),
    __metadata("design:paramtypes", [])
], MyLibComponent);

let MyLibModule = class MyLibModule {
};
MyLibModule = __decorate([
    NgModule({
        declarations: [MyLibComponent],
        imports: [],
        exports: [MyLibComponent]
    })
], MyLibModule);

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.js.map
