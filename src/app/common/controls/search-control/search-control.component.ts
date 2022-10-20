import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
    selector: 'app-search-control',
    templateUrl: './search-control.component.html',
    styleUrls: ['./search-control.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SearchControlComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: SearchControlComponent
        }
    ]
})
export class SearchControlComponent implements ControlValueAccessor, Validator {
    @Input() placeholder: string = "Search...";

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
