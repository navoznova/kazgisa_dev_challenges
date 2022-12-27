import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
	isValid: boolean = true;
	inputForm!: FormGroup;
	mask: Array<string | RegExp>

	constructor() {
		this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
	}

	ngOnInit() {
		this.inputForm = new FormGroup({
			"cadastralNumber": new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.pattern("^[0-9]*$")]),
			"telefonNumber": new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.pattern("^[0-9]*$")]),
		})
	}


	onSubmit(): void {
		this.inputForm.valid ? this.isValid = true : this.isValid = false;
	  }
	
	//   markAllFormFieldsAsTouched(formGroup: FormGroup | FormArray): void {
	// 	Object.values(formGroup.controls).forEach(
	// 	  (control) => {
	// 		if (control instanceof FormControl) {
	// 		  control.markAsTouched({onlySelf: true});
	// 		} else if (control instanceof FormGroup || control instanceof FormArray) {
	// 		  this.markAllFormFieldsAsTouched(control);
	// 		}
	// 	  });
	//   }

	// isFieldValid(field: string) {
	// 	return !this.inputForm.get(field)?.valid && this.inputForm.get(field)?.touched;
	//   }
}
