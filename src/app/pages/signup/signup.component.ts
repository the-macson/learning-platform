import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    const { email, password } = form.value;
    this.auth.signUp(email, password)
      .then((res) => {
        this.router.navigate(['/']);
        this.toastr.success('Sign In Successful');
      })
      .catch((err) => {
        this.toastr.error(err.message);
      })
  }
}
