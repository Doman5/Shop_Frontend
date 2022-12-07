import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { JwtService } from "src/app/modules/common/service/jwt.service";

@Injectable()
export class AdminAuthorizationGuard implements CanActivate{
    
    constructor(
        private jwtService: JwtService,
        private router: Router,
        ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.jwtService.isLoggedIn()) {
            this.router.navigate(["/admin/login"]);
        }
        return true;
    }
}