import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

    baseUrl = 'https://5b3254ed82407e001413f1a5.mockapi.io/api/login';

    constructor(private http: HttpClient) {

    }

    getUsers() {
        return this.http.get(this.baseUrl);
    }

}
