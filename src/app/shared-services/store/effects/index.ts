import { AlertEffects } from "./alert.effects";
import { CustomerDetailsEffects } from "./customer-details.effect";
import { LoaderEffects } from "./loader.effects";

export const effects: any = [
    LoaderEffects,
    AlertEffects,
    CustomerDetailsEffects
];

export * from "./loader.effects";
export * from "./alert.effects";
export * from "./customer-details.effect";