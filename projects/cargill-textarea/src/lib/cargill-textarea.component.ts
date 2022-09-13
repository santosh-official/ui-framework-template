import { Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import isBool from './is-boolean-decorator';

@Component({
  selector: 'cargill-textarea',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CargillTextareaComponent),
      multi: true
    }
  ],
  template: `
    <div class="form-group">
      <label *ngIf="label">{{ label }}</label>
      <textarea class="form-control {{ isError || error ? 'border-color' : ' ' }}" placeholder="{{ placeholder }}"
          [disabled]="disabled" [(ngModel)]="value" autocomplete="{{ autocomplete }}" [attr.maxlength]="maxlength"
          [attr.minlength]="minlength" [required]="required ? true : false" (focusout)="onTouched()"
          (input)="OnInputChange($event)" [readonly]="readonly ? true : false"
          [disabled]="disabled ? true : false"> </textarea>
      <div *ngIf="isError && !error">
          <span class="error-message" *ngIf="control.errors.required">
              {{ label }} is required</span>
      </div>
    </div>
  `,
  styles: [`
    .border-color { border: 1px solid red; border-radius: 5px }
    .error-message { color: red }
    .form-control { box-shadow: none!important; font-size: 0.9rem }
    .form-control:focus { box-shadow: none; border-color: #003641 }
  `]
})
export class CargillTextareaComponent implements OnInit, ControlValueAccessor {

  @Input() label!: string;
  @Input() error: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() autocomplete: 'on' | 'off' = 'on';
  @Input() maxlength!: number;
  @Input() minlength!: number;
  @isBool @Input() disabled: boolean = false;
  @isBool @Input() required: boolean = false;
  @isBool @Input() readonly: boolean = false;
  @isBool @Input() isSubmitted: boolean = false;
  @Input() formControlName!: string;
  @Output('change') changeEvent = new EventEmitter();
  private inputControl: any;
  private _onChange: any = () => { }
  private _onTouched: any = () => { }

  constructor(@Optional() @Host() @SkipSelf() private controlContainer: ControlContainer) { }

  ngOnInit(): void {
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
    if (this.required === true) {
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

  set setValue(newValue: string) {
    this.value = newValue
    this.changeEvent.emit(this.value);
    this._onChange(this.value)
  }

  onTouched() {
    this._onTouched();
  }

  OnInputChange(event: any) {
    this.setValue = event.target.value;
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
