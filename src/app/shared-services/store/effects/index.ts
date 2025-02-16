import { AlertEffects } from "./alert.effects";
import { LoaderEffects } from "./loader.effects";

export const effects: any = [
    LoaderEffects,
    AlertEffects
];

export * from "./loader.effects";
export * from "./alert.effects";