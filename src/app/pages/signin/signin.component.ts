import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth:AuthService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    const {email, password} = form.value;
    this.auth.signIn(email, password).then(res => {
      this.toastr.success('Sign In Successfully');
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.toastr.error(err.message);
    })
  }
}
