import { __decorate, __param, __metadata } from 'tslib';
import { Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
let MyLibService = class MyLibService {
    constructor(document) {
        this.document = document;
    }
};
MyLibService.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(ɵngcc0.ɵɵinject(DOCUMENT)); };
MyLibService.ctorParameters = () => [
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MyLibService.ɵprov = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(ɵɵinject(DOCUMENT)); }, token: MyLibService, providedIn: "root" });
MyLibService = __decorate([ __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Document])
], MyLibService);

let MyLibComponent = class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyLibComponent.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); };
MyLibComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " my-lib works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
MyLibComponent = __decorate([ __metadata("design:paramtypes", [])
], MyLibComponent);

let MyLibModule = class MyLibModule {
};
MyLibModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MyLibModule });
MyLibModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MyLibModule_Factory(t) { return new (t || MyLibModule)(); }, imports: [[]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MyLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MyLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-lib',
                template: `
    <p>
      my-lib works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent], exports: [MyLibComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MyLibModule, [{
        type: NgModule,
        args: [{
                declarations: [MyLibComponent],
                imports: [],
                exports: [MyLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };

//# sourceMappingURL=my-lib.js.map