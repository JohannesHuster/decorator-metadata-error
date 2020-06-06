import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor(@Inject(DOCUMENT) private document: Document) { }
}
