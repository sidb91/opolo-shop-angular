import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromCustomerDetailsStore from '../../shared-services/store';

@Component({
    selector: "opolo-dashboard",
    templateUrl: "./opolo-dashboard.container.html"
})
export class OpoloDashboardContainer implements OnInit {

    constructor(readonly store: Store){}

    ngOnInit(): void {
        this.loadServiceCalls();
    }

    loadServiceCalls(): void {
        let requestBody = {
            "firstName": "John",
            "lastName": "Doe",
            "customerId": "12345",
            "email": "abc@test.com",
            "mobile": "7876876875"
        }

        this.store.dispatch(new fromCustomerDetailsStore.FetchCustomerDetails(requestBody));
    }
}