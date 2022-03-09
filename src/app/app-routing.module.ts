import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./lib/modules/main-app/main-app.module').then(m => m.MainAppModule)
    },
    {
        path: 'eclass',
        loadChildren: () => import('./lib/modules/eclass/eclass.module').then(m => m.EclassModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}