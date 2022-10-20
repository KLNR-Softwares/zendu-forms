import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
    selector: 'app-dropdown-control',
    templateUrl: './dropdown-control.component.html',
    styleUrls: ['./dropdown-control.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: DropdownControlComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: DropdownControlComponent
        }
    ]
})
export class DropdownControlComponent implements ControlValueAccessor, Validator {
    @Input() placeholder: string = "Please choose";
    @Input() options: any[] = [];
    @Input() display: any = null;
    @Input() value: any = null;

    @Input() selected: any = "";

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
        this.selected = value;
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
        this.onChange(this.selected);
    }

}
