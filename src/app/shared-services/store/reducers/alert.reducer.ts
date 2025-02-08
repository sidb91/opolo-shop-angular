import { Message } from "../../interfaces/common.interface";

const DELAY = 5000;

export interface AlertState {
    data: Message[];
    alert: boolean;
    autoDismissible: boolean;
    autoDismissibleDelay: number;
    page: Array<string>;
}

export const initialState: AlertState = {
    data: [],
    alert: false,
    autoDismissible: true,
    autoDismissibleDelay: DELAY,
    page: []
}