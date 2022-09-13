import { Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import isBool from './is-boolean-decorator';

@Component({
  selector: 'cargill-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CargillSelectComponent),
      multi: true,
    },
  ],
  template: `
    <div class="form-group">
      <label *ngIf="label">{{ label }}</label>
      <ng-select [ngClass]="isError || error ? 'custom border-color' : ' ' " [loading]="isLoading" [virtualScroll]="true"
          [items]="options" [searchable]="search" [selectOnTab]="true" [(ngModel)]="value"
          placeholder="{{ placeholder ? 'Select' : label }}" (close)="onTouched()" [disabled]="disabled" [required]="required ? true : false"
          [dropdownPosition]="'bottom'" (change)="onChange($event)">
          <ng-template ng-option-tmp let-item="item">
              <div [title]="item.label">{{item.label}}</div>
          </ng-template>
      </ng-select>
      <div *ngIf="isError && !error">
          <span class="error-message" *ngIf="control.errors.required">
              {{ label }} is required</span>
      </div>
    </div>
  `,
  styles: [`
    .ng-select.ng-select-focused:not(.ng-select-opened)::ng-deep .ng-select-container { border: 1px solid #003641; box-shadow: none }
    .ng-select::ng-deep .ng-clear-wrapper { display: none }
    .ng-select.custom::ng-deep .ng-select-container  { border: red }
    .border-color { border: 1px solid red; border-radius: 5px }
  `]
})
export class CargillSelectComponent implements OnInit, ControlValueAccessor {

  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() error!: string;
  @Input() options!: any[];
  @Input() value: any;
  @isBool @Input() search: boolean = false;
  @isBool @Input() isSubmitted: boolean = false;
  @isBool @Input() disabled: boolean = false;
  @isBool @Input() required: boolean = false;
  @Input() formControlName: string | undefined;
  @Output("change") changeEvent = new EventEmitter();
  private inputControl: any;
  private _onChange: any = () => { };
  private _onTouched: any = () => { };
  isLoading = false;

  constructor(@Optional() @Host() @SkipSelf() private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.inputControl = this.controlContainer.control?.get(
          this.formControlName
        );
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

  onChange($event: any) {
    this.setValue = $event.value;
  }

  set setValue(newValue: any) {
    this._onChange(newValue);
    this.changeEvent.emit(newValue);
  }

  onTouched() {
    this._onTouched();
  }

  writeValue(value: any): void {
    this.value = value;
    this.setValue = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
