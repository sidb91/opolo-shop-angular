
export interface LoginDetailsInf{
    roles: string[];
    userEmail: string;
    userName: string;
    isAuthenticated: boolean;
    hasValidRole: boolean;
    loading: boolean;
    loaded: boolean;
    error: boolean;
    accountPayload: any;
}