import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /**
   * Get Users
   * @returns Array of users
   */
  getUsers(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users').subscribe({
        next: (users) => resolve(users),
        error: () => reject,
      });
    });
  }
}
