import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit {

  formGroup!: FormGroup;
  formGroupChangePassword!: FormGroup;
  formError = "";
  formChangePasswordError = "";
  hash = "";

  constructor(
    private formBuilder:FormBuilder,
    private loginService: LoginService,
    private activateRoute: ActivatedRoute,
    private SnackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.formGroupChangePassword = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
    this.hash = this.activateRoute.snapshot.params['hash'];
  }

  send() {
    if(this.formGroup.valid) {
      this.loginService.lostPassword(this.formGroup.value)
        .subscribe({
          next: result => {
            this.formError = "";
            this.formGroup.reset();
            this.SnackBar.open("email z linkiem został wysłany", "", {duration: 3000, panelClass: "snack-bar-bg-color-ok"});
          },
          error: error => this.formError = error.error.message
        });
    }
  }

  sendChangePassword() {
      if(this.formGroupChangePassword.valid && this.passwordIdentical(this.formGroupChangePassword.value)) {
        this.loginService.changePassword({
          password: this.formGroupChangePassword.get("password")?.value,
          repeatPassword: this.formGroupChangePassword.get("repeatPassword")?.value,
          hash: this.hash
        }).subscribe({
          next: () => {
          this.formGroupChangePassword.reset();
          this.SnackBar.open('haslo zostało zmienione', '', {
            duration: 3000, panelClass: "snack-bar-bg-color-ok"});
        },
        error: error => this.formChangePasswordError = error.error.message
        });
      }
  }

  passwordIdentical(changePassword: any) {
    if(changePassword.password === changePassword.repeatPassword) {
      this.formChangePasswordError = "";
      return true;
    } 
    this.formChangePasswordError = "Hasła nie są identyczne";
    return false;
  }

}
