export interface AlertMessage {
    message?: Message[];
    alert?: boolean;
    autoDismissible?: boolean;
    autoDismissibleDelay?: number;
    page?: Array<string>;
}

export interface Message {
    severity?: string;
    summary?: string;
    detail?: string;
}