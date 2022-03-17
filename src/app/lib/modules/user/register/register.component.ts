import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {RegisterDataInterface} from "../../../../core/interfaces/auth.interface";
import {CommonService} from "../../../../core/services/common.service";
import {UserService} from "../../../../core/services/user.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
    public registerData: RegisterDataInterface = {
        email: '',
        password: '',
    };
    public confirmPassword: string = '';
    
    constructor(
        private userService: UserService,
        private commonService: CommonService,
    ) {
    }
    
    ngOnInit(): void {
    }
    
    /**
     * Calls register method of AuthService for a new register.
     */
    register() {
        if (! this.commonService.isEmail(this.registerData.email)) {
            alert('Email is not valid! Please check it.');
            return false;
        }
        if (this.registerData.password !== this.confirmPassword) {
            alert('Password and Confirm Password are not equal!');
            return false;
        }
        if (this.registerData.password.length < AuthService.passwordLength) {
            alert(`Password length should be at least ${AuthService.passwordLength} character.`);
            return false;
        }
        return this.userService.manageRegister(this.registerData)
    }
}
