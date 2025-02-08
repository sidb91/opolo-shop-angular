import { NgModule } from "@angular/core";

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OpoloLoaderComponent } from "./components/opolo-loader/opolo-loader.component";


@NgModule({
    declarations:[OpoloLoaderComponent],
    imports:[ProgressSpinnerModule],
    exports:[OpoloLoaderComponent],
    providers: []
})
export class CommonComponentsModule{}