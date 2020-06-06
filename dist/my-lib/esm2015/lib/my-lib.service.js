import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
let MyLibService = class MyLibService {
    constructor(document) {
        this.document = document;
    }
};
MyLibService.ctorParameters = () => [
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MyLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(i0.ɵɵinject(i1.DOCUMENT)); }, token: MyLibService, providedIn: "root" });
MyLibService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Document])
], MyLibService);
export { MyLibService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1saWIvIiwic291cmNlcyI6WyJsaWIvbXktbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBSzNDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFFdkIsWUFBc0MsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7Q0FDOUQsQ0FBQTs7WUFEaUQsUUFBUSx1QkFBM0MsTUFBTSxTQUFDLFFBQVE7OztBQUZqQixZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFHYSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FBbUIsUUFBUTtHQUY3QyxZQUFZLENBR3hCO1NBSFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNeUxpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50KSB7IH1cbn1cbiJdfQ==