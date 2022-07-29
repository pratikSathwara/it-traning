import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardsService {

  constructor() { }
  ischildrights(): boolean{
    return true;
  }
}
