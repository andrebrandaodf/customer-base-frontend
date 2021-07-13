import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  hidePassword = true;
  user: User = new User();

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  form: FormGroup = this.formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }
    this.authService.login(this.form.value).subscribe(data => {
      localStorage.setItem('token', data.token)
      console.log("Sucesso! ", data)
      this.router.navigate(['/admin'])
    },
      erro => {
        console.log("Erro ", erro)
      }
    )
  }
}
