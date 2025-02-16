import { NgModule } from "@angular/core";

import { FeatureModuleNames } from "@app/app-services/enum/feature-names.enum";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { reducers, effects } from "./store";


@NgModule({
    imports:[
        StoreModule.forFeature(FeatureModuleNames.auth, reducers),
        EffectsModule.forFeature(effects)
    ],
    providers:[]
})
export class AuthModule{}