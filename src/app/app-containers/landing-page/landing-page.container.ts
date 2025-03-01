import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { Observable, Subject, takeUntil } from "rxjs";

import * as fromRootStore from "@app/store";

import * as fromAuthStore from "@auth/store";
import { SYSTEM_ADMIN_ROLES } from "@app/auth/roles";
import { PAGES } from "@app/app-services/enum/page-path.enum";


@Component({
    selector: 'landing-page-container',
    templateUrl: './landing-page.container.html'
})
export class LandingPageContainer implements OnInit{

    destroy$: Subject<boolean> = new Subject<boolean>();

    userRoles$!: Observable<string[]>;
    userRoles!: string[];


    constructor(readonly store: Store<any>){}

    ngOnInit(): void {
        this.store.dispatch(new fromAuthStore.Login(""));
        this.subscribeToUserRoles();
    }

    subscribeToUserRoles(){
        this.userRoles$ = this.store.select(fromAuthStore.userRoles);

        this.userRoles$.pipe(takeUntil(this.destroy$)).subscribe((userRoles: string[]) => {
            if(userRoles){
                console.log("invoked role based navigation: ", userRoles);
                this.roleBasedNavigation(userRoles);
            }        
        });
    }

    roleBasedNavigation(userRoles: string[]): void {
        
        if(this.hasRole(userRoles, SYSTEM_ADMIN_ROLES)){
            console.log('system admin roles');
            this.store.dispatch(new fromRootStore.Go({
                path: [PAGES.dashboard]
            }));
        } else {
            console.log('other roles show error page');
            this.store.dispatch(new fromRootStore.Go({
                path: [PAGES.pageError]
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