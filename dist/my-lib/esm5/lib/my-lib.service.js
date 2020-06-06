import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var MyLibService = /** @class */ (function () {
    function MyLibService(document) {
        this.document = document;
    }
    MyLibService.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MyLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(i0.ɵɵinject(i1.DOCUMENT)); }, token: MyLibService, providedIn: "root" });
    MyLibService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Document])
    ], MyLibService);
    return MyLibService;
}());
export { MyLibService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1saWIvIiwic291cmNlcyI6WyJsaWIvbXktbGliLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBSzNDO0lBRUUsc0JBQXNDLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDOztnQkFBYixRQUFRLHVCQUEzQyxNQUFNLFNBQUMsUUFBUTs7O0lBRmpCLFlBQVk7UUFIeEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUdhLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3lDQUFtQixRQUFRO09BRjdDLFlBQVksQ0FHeEI7dUJBVEQ7Q0FTQyxBQUhELElBR0M7U0FIWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE15TGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQpIHsgfVxufVxuIl19