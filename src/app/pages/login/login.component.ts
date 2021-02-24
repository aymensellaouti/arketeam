import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('token', data.id);
        this.toastr.success(`Bienvenu chez vous :D`);
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toastr.error(`Veuillez vérifier vos credentials`);
        console.log(erreur);
      }
    );
  }
}
