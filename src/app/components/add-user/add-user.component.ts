import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() addUser: EventEmitter<any> = new EventEmitter();
  passwordForm: FormGroup;
  nameForm: FormGroup;
  show: boolean;
  passwordIsValid = false;
  msg:string;


  constructor(private fb: FormBuilder, private cdRef:ChangeDetectorRef) { this.show = false; }

  ngOnInit(): void {
    this.msg = ''
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
    });

    this.nameForm = this.fb.group({
      name: [''],
    });

  }

  passwordValid(event) {
    this.passwordIsValid = event;
    this.cdRef.detectChanges();
  }

  onSubmit() {
    if (this.nameForm.value.name != '') {
    const user = {
      name: this.nameForm.value.name,
      password: this.passwordForm.value.password
    };
    this.addUser.emit(user);
    } else {
      this.msg = 'please provide a name'
    }
  }

  showPass() {
    this.show = !this.show;
  }
}
