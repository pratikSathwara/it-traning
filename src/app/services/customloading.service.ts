import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/operator';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomloadingService implements PreloadingStrategy{

  constructor() { }
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']){
      console.log('preload path : ' + route.path);
      return load();
    }else{
      
      return of(null);
    }
    
    throw new Error('Method not implemented.');
  }
}
