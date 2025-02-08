import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "opolo-loader",
    templateUrl: "./opolo-loader.component.html"
})
export class OpoloLoaderComponent{
    constructor(){}

    @Input()
    showLoader: boolean | undefined;
}