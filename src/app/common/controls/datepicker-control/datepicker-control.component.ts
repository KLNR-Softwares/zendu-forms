import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
    selector: 'app-datepicker-control',
    templateUrl: './datepicker-control.component.html',
    styleUrls: ['./datepicker-control.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: DatePickerControlComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: DatePickerControlComponent
        }
    ]
})
export class DatePickerControlComponent implements ControlValueAccessor, Validator {
    @Input() placeholder: string = 'DD/MM/YYYY';
    @Input() format: string = 'DD/MM/YYYY';
    datePickerConfig: any = {
        format: this.format
    };

    value: any;
    onChange = (value: any) => { };
    onTouched = () => { };
    onValidatorChange = () => { };
    constructor() {
    }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        let error: ValidationErrors | null = null;
        return error;
    }

    registerOnValidatorChange?(onValidatorChange: () => void): void {
        this.onValidatorChange = onValidatorChange;
    }
    writeValue(value: any) {
        this.value = value;
    }
    registerOnChange(onChange: any) {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched: any) {
        this.onTouched = onTouched;
    }
    markAsTouched() {
        this.onTouched();
    }
    onValueChange() {
        this.onChange(this.value);
    }

}
