import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';

import { SearchControlComponent } from './search-control';
import { DatePickerControlComponent } from './datepicker-control';
import { DropdownControlComponent } from './dropdown-control';
import { ToggleControlComponent } from './toggle-control';

const CONTROL_COMPONENTS: any[] = [
    SearchControlComponent,
    DatePickerControlComponent,
    DropdownControlComponent,
    ToggleControlComponent
];

const MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule
]

@NgModule({
    declarations: [
        ...CONTROL_COMPONENTS
    ],
    imports: [...MODULES],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...CONTROL_COMPONENTS
    ]
})
export class ControlsModule { }
