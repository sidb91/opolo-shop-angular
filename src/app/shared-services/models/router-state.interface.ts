import { Params } from "@angular/router";

//custom interface for router state
export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}