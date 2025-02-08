import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "src/app/shared-services/interfaces/common.interface";

interface AppAlertMessage {
    message: string;
    alertType: string;
    show: boolean;
    delay: number;
}

@Component({
    selector: 'opolo-alert',
    templateUrl: 'opolo-alert.component.html'
})
export class OpoloAlertComponent implements OnInit {

    activeAlertMessage$: Observable<Message[]> | undefined;
    activeAlertPage$: Observable<Array<string>> | undefined;

    ngOnInit(): void {}

    @Input()
    activePage: Array<string> | undefined;

    @Input()
    public config: AppAlertMessage = {
        message: 'this is default message',
        alertType: 'danger',
        show: true,
        delay: 5000
    }

}