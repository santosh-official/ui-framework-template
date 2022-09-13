import { Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cargill-radio-button',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CargillRadioButtonComponent),
      multi: true
    }
  ],
  template: `
    <div class="form-check">
      <span *ngFor="let item of radioButtons; let i = index">
          <input class="form-check-input" name="{{name}}" type="radio" id="{{item.id ? item.id : 'radio_'+tempId+i}}"
              value="{{item.value}}" [checked]="value === item.value"
              [attr.disabled]="item.disabled ? item.disabled  : null" (input)="OnInputChange($event)">
          <label for="{{item.id ? item.id : 'radio_'+tempId+i}}" class="d-block form-check-label">{{item.label}}</label>
      </span>
    </div>
  `,
  styles: [`
    input[type="radio"] { -webkit-appearance: none; -moz-appearance: none; appearance: none; width: 15px; height: 15px; padding: 2px; margin-top: 3px; background-clip: content-box; border: 1px solid #bbbbbb; background-color: #e7e6e7; border-radius: 15px }
    input[type="radio"]:checked { background-color: #003641 }
  `]
})
export class CargillRadioButtonComponent implements OnInit, ControlValueAccessor {

  @Input() radioButtons: any = [];
  @Input() name!: string;
  error: string = '';
  @Input() isSubmitted: boolean = false;
  disabled: boolean = false;
  @Input() value!: string;
  @Input() formControlName!: string;
  @Output('change') changeEvent = new EventEmitter();
  private inputControl: any;
  private _onChange: any = () => { }
  private _onTouched: any = () => { }
  tempId!: string;

  constructor(@Optional() @Host() @SkipSelf() private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.tempId = Math.random().toString(36).substring(7);
    if (this.controlContainer) {
      if (this.formControlName) {
        this.inputControl = this.controlContainer.control?.get(this.formControlName);
      }
    }
  }

  get isError() {
    if (!this.inputControl) {
      return false;
    }
    if (this.inputControl.errors) {
      if (this.isSubmitted) {
        return true;
      }
      if (this.inputControl.touched) {
        return true;
      }
      return false;
    }
    return false;
  }

  get control() {
    return this.inputControl;
  }

  set setValue(newValue: any) {
    this.value = newValue;
    this.changeEvent.emit(this.value);
    this._onChange(this.value);
  }

  onTouched() {
    this._onTouched();
  }

  OnInputChange(event: any) {
    this.onTouched();
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
