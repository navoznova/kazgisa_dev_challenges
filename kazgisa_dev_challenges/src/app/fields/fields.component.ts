import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-fields',
    templateUrl: './fields.component.html',
    styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
    inputForm!: FormGroup;

    ngOnInit() {
        this.inputForm = new FormGroup({
            number: new FormControl(),
            text: new FormControl(),
            email: new FormControl(),
            radio: new FormControl(),
            file: new FormControl()
        });
    }

    onSubmit() {
        console.log(this.inputForm);
    }

}
