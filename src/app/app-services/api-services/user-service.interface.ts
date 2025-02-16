
export interface UserProfileInf{
    first_name: string;
    id: number;
    last_name: string;
    manager: boolean;
    primary_user_group: PrimaryUserGroupInf;
    secondary_user_groups: SecondaryUserGroupInf[];
    servicenow_ticket_number: string;
    user_email: string;
    user_id: string;
}

export interface PrimaryUserGroupInf{
    id?:number;
    primary_user_group_description: string;
    primary_user_group_name: string;
}

export interface SecondaryUserGroupInf{
    id?:number;
    secondary_user_group_description: string;
    secondary_user_group_name: string;
}