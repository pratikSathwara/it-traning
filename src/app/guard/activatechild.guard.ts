import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardsService } from './guards.service';

@Injectable({
  providedIn: 'root'
})
export class ActivatechildGuard implements CanActivateChild {
  constructor(private gaurdsservice:GuardsService,private router:Router){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
    if(this.gaurdsservice.ischildrights()){
      return true;
    }else {
      alert("you have don't permission");
      this.router.navigate(['admin']);
      return false
    }
    throw new Error('Method not implemented.');


  }
  
  
}
