import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
            {path: 'register', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)},
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
