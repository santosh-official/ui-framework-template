import { Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';
import isBool from './is-boolean-decorator';

@Component({
  selector: 'cargill-datepicker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CargillDatepickerComponent),
      multi: true
    }
  ],
  template: `
    <div class="form-group">
      <label *ngIf="label">{{ label }}</label>
      <div class="inner-addon right-addon">
          <i class="fa fa-lg fa-calendar" style="color: #ced4da"></i>
          <input class="form-control {{ isError || error ? 'border-color' : ' ' }}" placeholder="{{ placeholder }}"
              [(ngModel)]="value" autocomplete="{{ autocomplete }}" (focusout)="onTouched()" (click)="d.toggle()"
              (ngModelChange)="inputChange(value)" [disabled]="disabled ? true : false" ngbDatepicker
              #d="ngbDatepicker" />
      </div>
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
    .inner-addon .fa { position: absolute; padding: 10px; pointer-events: none }
    .right-addon .fa { right: 0px }
    .inner-addon { position: relative }
  `]
})
export class CargillDatepickerComponent implements OnInit, ControlValueAccessor {

  @Input() label!: string;
  @Input() error: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() autocomplete: 'on' | 'off' = 'on';
  @isBool @Input() disabled: boolean = false;
  @isBool @Input() required: boolean = false;
  @isBool @Input() readonly: boolean = false;
  @isBool @Input() isSubmitted: boolean = false;
  @Input() formControlName!: string;
  @Output('change') changeEvent = new EventEmitter();
  empty!: boolean;
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

  set setValue(newValue: any) {
    this.changeEvent.emit(newValue);
    this._onChange(moment(newValue).format('DD/MM/YYYY'));
  }

  onTouched() {
    this._onTouched();
  }

  inputChange(value: any) {
    if (value !== null) {
      this.setValue = new Date(value.year, value.month - 1, value.day);
    }
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
