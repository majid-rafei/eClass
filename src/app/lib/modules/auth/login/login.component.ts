import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {LoginSentInterface} from "../../../../core/interfaces/auth.interface";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    @Output() loginForm: any = new EventEmitter();
    loginData: LoginSentInterface = {
        email: '',
        password: '',
    }
    
    constructor(
        private authService: AuthService,
    ) {
    }
    
    ngOnInit(): void {
    }
    
    login(loginData: LoginSentInterface) {
        this.authService.manageLogin(loginData);
    }
}
