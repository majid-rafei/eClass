import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginGuard} from "./core/guards/login.guard";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./lib/modules/main-app/main-app.module').then(m => m.MainAppModule)
    },
    {
        path: 'eclass',
        loadChildren: () => import('./lib/modules/eclass/eclass.module').then(m => m.EclassModule),
        canActivate: [
            LoginGuard,
        ],
    },
    {
        path: 'auth',
        loadChildren: () => import('./lib/modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./lib/modules/user/user.module').then(m => m.UserModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}