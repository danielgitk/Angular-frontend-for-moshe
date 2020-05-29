import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-model.model';

@Injectable({providedIn: "root"})
export class AuthService{


constructor(private http: HttpClient, private router:Router){}

login(){
    this.router.navigate(['/']);
}

signup(email: string, password: string){
    const authData:AuthData = {email: email, password:password};
    // this.http.post("http://localhost:3000/api/user/addadmin",authData)
    // .subscribe(response => {
    //     console.log(response);
    // });
    this.router.navigate(['/']);
}


}