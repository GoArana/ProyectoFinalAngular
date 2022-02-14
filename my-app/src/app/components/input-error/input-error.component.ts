import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css'],
})
export class InputErrorComponent implements OnInit {
  constructor() {}

  @Input() formControl: AbstractControl;
  @Input() label: string;

  ngOnInit(): void {}

  mustShow() {
    return (
      this.formControl.invalid &&
      (this.formControl.dirty || this.formControl.touched)
    );
  }

  getError() {
    if (this.formControl.hasError('required')) {
      return `El campo ${this.label} es requerido`;
    } else if (this.formControl.hasError('email')) {
      return `Ingrese un email valido`;
    }
    return '';
  }
}
