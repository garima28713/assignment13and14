import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_helpers/_models/user'
import {EnvironmentLocal} from '../environment/environment-local'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post(`${EnvironmentLocal.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${EnvironmentLocal.apiUrl}/users`);
    }

    delete(id: number) {
        return this.http.delete(`${EnvironmentLocal.apiUrl}/users/${id}`);
    }

 
}