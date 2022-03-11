import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {UserInterface} from "../interfaces/user.interface";
import {Subscription} from "rxjs";


@Injectable()
export class UserService {
    
    constructor(
        private http: HttpService,
    ) {
    }
    
    /**
     * TODO: To get user data
     */
    getUserData(): Subscription {
        return this.http
            .get({}, 'getUser')
            .subscribe((user: UserInterface) => {
                return user;
            })
    }
}