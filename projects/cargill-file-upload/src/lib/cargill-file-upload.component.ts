import { Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import isBool from './is-boolean-decorator';

@Component({
  selector: 'cargill-file-upload',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CargillFileUploadComponent),
      multi: true
    }
  ],
  template: `
    <div app-upload (fileDropped)="onFileDropped($event)">
      <div class="text-center p-4 upload">
          <input type="file" class="form-control" [(ngModel)]="value" #fileDropRef id="fileDropRef" multiple
              (input)="OnInputChange($event)" />
          <i class="fas fa-upload fa-3x" style="color: #003641;" aria-hidden="true"></i>
          <br><br>
          <span>Drag and drop file here</span>
          <br><br>
          <button class="btn" type="submit" for="fileDropRef">Browse for file</button>
      </div>
    </div>
    <div class="files-list">
      <div class="single-file" *ngFor="let file of files; let i = index">
          <i class="fas fa-file-signature fa-2x" style="color: #003641;" aria-hidden="true"></i>
          <div class="info">
              <h4 class="name ml-4">
                  {{ file?.name }}
              </h4>
          </div>
      </div>
    </div>
  `,
  styles: [`
    input { opacity: 0; position: absolute; z-index: 2; width: 100%; height: 100%; top: 0; left: 0 }
    .btn { background-color: #003641; padding: 0.275rem 0.5rem }
    .fileover { animation: shake 1s; animation-iteration-count: infinite }
    .files-list { margin-top: 1.5rem }
    .files-list .single-file { display: flex; padding: 1rem; justify-content: space-between; align-items: center; border: 1px solid #ced4da; border-radius: 5px; margin-bottom: 1rem; flex-grow: 1 }
    .files-list .single-file .delete { display: flex; margin-left: 0.5rem; cursor: pointer; align-self: flex-end }
    .files-list .single-file .name { font-size: 14px; font-weight: 500; color: #353f4a; margin: 0 }
    .files-list .single-file .size { font-size: 12px; font-weight: 500; color: #a4a4a4; margin: 0; margin-bottom: 0.25rem }
    .files-list .single-file .info { width: 100% }
    .upload { border: 1px solid #ced4da; border-radius: 5px }
    .upload:hover { background-color: #e6eaee; border: 1px solid #e6eaee }
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg) }
        10% { transform: translate(-1px, -2px) rotate(-1deg) }
        20% { transform: translate(-3px, 0px) rotate(1deg) }
        30% { transform: translate(3px, 2px) rotate(0deg) }
        40% { transform: translate(1px, -1px) rotate(1deg) }
        50% { transform: translate(-1px, 2px) rotate(-1deg) }
        60% { transform: translate(-3px, 1px) rotate(0deg) }
        70% { transform: translate(3px, 1px) rotate(-1deg) }
        80% { transform: translate(-1px, -1px) rotate(1deg) }
        90% { transform: translate(1px, 2px) rotate(0deg) }
        100% { transform: translate(1px, -2px) rotate(-1deg) }
    }
  `]
})
export class CargillFileUploadComponent implements OnInit, ControlValueAccessor {

  files: any[] = [];
  @Input() value!: FileList;
  @isBool @Input() disabled: boolean = false;
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

  set setValue(newValue: FileList) {
    this.value = newValue
    this.changeEvent.emit(this.value);
    this._onChange(this.value)
  }

  onTouched() {
    this._onTouched();
  }

  OnInputChange(event: any) {
    this.prepareFilesList(event.target.files);
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

  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }
}
