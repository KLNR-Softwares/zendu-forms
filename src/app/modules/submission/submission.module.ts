import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

import { ControlsModule } from '@app/common/controls/controls.module';

import { SubmissionComponent } from './submission.component';

const routes: Routes = [{
    path: '',
    component: SubmissionComponent
}];

@NgModule({
    declarations: [
        SubmissionComponent
    ],
    imports: [
        CommonModule,
        ControlsModule,
        RouterModule.forChild(routes),
        GoogleMapsModule
    ],
    providers: []
})
export class SubmissionModule { }
