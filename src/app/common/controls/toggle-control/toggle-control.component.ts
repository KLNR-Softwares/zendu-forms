import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
    selector: 'app-toggle-control',
    templateUrl: './toggle-control.component.html',
    styleUrls: ['./toggle-control.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: ToggleControlComponent
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: ToggleControlComponent
        }
    ]
})
export class ToggleControlComponent implements ControlValueAccessor, Validator {
    @Input() options: any[] = [];
    @Input() display: any = null;
    @Input() value: any = null;

    @Input() selected: any = "";

    @Output() toggled: EventEmitter<any> = new EventEmitter();

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
    toggleValue(value: any) {
        this.selected = value
        this.onChange(this.selected)
        this.toggled.emit(this.selected);
    }

}
