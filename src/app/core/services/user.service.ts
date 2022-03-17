import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {UserInterface} from "../interfaces/user.interface";
import {RegisterDataInterface} from "../interfaces/auth.interface";
import {HttpResponse} from "@angular/common/http";
import {ResponseInterface} from "../interfaces/response.interface";
import {UserAPIS} from "../app.api";
import {Router} from "@angular/router";


@Injectable({
    providedIn: "root"
})
export class UserService {
    
    constructor(
        private http: HttpService,
        private router: Router,
    ) {
    }
    
    /**
     * TODO: To get user data
     */
    getUserData(): Promise<UserInterface> {
        return this.http
            .get(UserAPIS.GET_USERS)
            .then((user: UserInterface) => {
                return user;
            })
        ;
    }
    
    /**
     * Registers the user with Email and Password.
     * @param registerData
     */
    public manageRegister(registerData: RegisterDataInterface): Promise<any> {
        return this.http
            .post(registerData, UserAPIS.USER_REGISTER, false)
            .then((response: HttpResponse<any>) => {
                const body: ResponseInterface = Object.assign({}, <any>response.body);
                if (body.done) {
                    alert(body.msg)
                    this.router.navigate(['/auth/login']).then(r => {
                    })
                }
                else {
                    alert(`An error occurred: ${body.msg}`)
                }
            })
        ;
    }
}