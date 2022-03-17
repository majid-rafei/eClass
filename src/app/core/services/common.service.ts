import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CommonService {
    
    private regexp: RegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    public isEmail(email: string): boolean {
        return this.regexp.test(email);
    }
}