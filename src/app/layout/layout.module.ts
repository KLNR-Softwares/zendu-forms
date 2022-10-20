import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'submissions'
            },
            {
                path: 'submissions',
                loadChildren: () => import('@app-modules/submission/submission.module').then(res => res.SubmissionModule)
            }
        ]
    }
];

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class LayoutModule {
}
