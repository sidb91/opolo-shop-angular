import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromRootStore from "@app/store";
import * as fromAuthStore from "@auth/store";

import { PAGES } from "src/app/app-services/enum/page-path.enum";
import { SYSTEM_ADMIN_ROLES } from "@auth/roles";
import { combineLatest } from "rxjs";

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit{

    userRoles: string[] = ["OPOLO_DEVELOPER","OPOLO_SYSTEM_ADMIN","OPOLO_TESTER",
        "OPOLO_SUPPORT", "OPOLO_HR", "OPOLO_GUEST_USER"];

    constructor(readonly store: Store<any>){}

    ngOnInit(): void {

        combineLatest([
            this.store.select(fromAuthStore.userRoles),
            this.store.select(fromAuthStore.isManager)
        ]).subscribe(([userRoles, isManager]) => {
            if(userRoles && isManager !== null){
                this.roleBasedNavigation(this.userRoles);
            }
        });
    }

    roleBasedNavigation(userRoles: string[]): void {
        
        if(this.hasRole(userRoles, SYSTEM_ADMIN_ROLES)){
            this.store.dispatch(new fromRootStore.Go({
                path: [PAGES.admin]
            }));
        } else {
            this.store.dispatch(new fromRootStore.Go({
                path: [PAGES.landing]
            }));
        }
    }

    hasRole(userRoles: string[], allowedRoles: string[]): boolean {
        const matchingRoles = userRoles.filter((role: any) =>
            allowedRoles.includes(role)
        );
        return matchingRoles.length > 0;
    }
}