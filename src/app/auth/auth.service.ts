import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: "root"})
export class AuthService{


constructor(private http: HttpClient, private router:Router){}

login(){
    this.router.navigate(['/']);
}

signup(){
    this.router.navigate(['/']);
}


}