import { Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import isBool from './is-boolean-decorator';
import isRequired from './is-required-decorator';

@Component({
  selector: 'cargill-checkbox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CargillCheckboxComponent),
      multi: true
    }
  ],
  template: `
    <div class="form-check">
      <input class="form-check-input" name="{{name}}" type="checkbox" [ngModel]="checked" [id]="'checkbox_'+tempId"
          [attr.disabled]="disabled ? disabled : null" (ngModelChange)="modelChange($event)"
          [required]="required ? true : false">
      <label class="form-check-label {{ isError || error ? 'error-message' : ' ' }}"
          for="{{'checkbox_'+tempId}}">{{label}}</label>
      </div>
  `,
  styles: [`
    input[type='checkbox'] { accent-color: #003641 }
  `]
})
export class CargillCheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() name!: string;
  @Input() items!: any[];
  @isRequired @Input() label!: string;
  @Input() error: string = '';
  @isBool @Input() checked: boolean = false;
  @isBool @Input() disabled: boolean = false;
  @isBool @Input() isSubmitted: boolean = false;
  @isBool @Input() isMultiple: boolean = false;
  @isBool @Input() required: boolean = false;
  @Input() formControlName!: string;
  @Output('change') changeEvent = new EventEmitter();
  private inputControl: any;
  private _onChange: any = () => { }
  private _onTouched: any = () => { }
  tempId!: string;
  value: boolean = false;

  constructor(@Optional() @Host() @SkipSelf() private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.tempId = Math.random().toString(36).substring(7);
    if (this.controlContainer) {
      if (this.formControlName) {
        this.inputControl = this.controlContainer.control?.get(this.formControlName);
      }
    }
  }

  get control() {
    return this.inputControl;
  }

  get isError() {
    if (!this.inputControl) {
      return false;
    }
    if(this.required === true) {
      if (this.inputControl.errors) {
        if (this.isSubmitted) {
          return true;
        }
        if (this.inputControl.touched) {
          return true;
        }
        return false;
      }
    }
    return false;
  }

  set setValue(newValue: any) {
    if (newValue === true) {
      this.value = true;
    } else {
      this.value = false;
    }
    this._onChange(this.value);
    this.changeEvent.emit(this.value);
  }

  onTouched() {
    this._onTouched();
  }

  modelChange(event: any) {
    this.checked = event;
    this._onChange(event);
  }

  writeValue(value: any) {
    this.setValue = value;
  }

  registerOnChange(fn: any) {
    this._onChange = fn
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
