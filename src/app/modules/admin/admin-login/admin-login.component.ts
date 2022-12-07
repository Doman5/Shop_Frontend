import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { JwtService } from '../../common/service/jwt.service';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  formgroup!: FormGroup;
  loginError = false;

  constructor(
    private formBuilder: FormBuilder,
    private adminLoginService: AdminLoginService,
    private jwtService: JwtService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    });
  }


  submit() {
    if(this.formgroup.valid) {
        this.adminLoginService.login(this.formgroup.value)
          .subscribe({
            next: (response) => {
              this.loginError = false;
              this.jwtService.setToken(response.token);
              this.router.navigate(["/admin"]);
            },
            error: () => this.loginError = true,
          })
    }
  }
}
