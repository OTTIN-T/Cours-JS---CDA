import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string =
    'https://colonie-4eb96-default-rtdb.europe-west1.firebasedatabase.app/students';

  constructor(private http: HttpClient) {}

  getStudents(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}.json`).subscribe({
        next: (students) => {
          students = Object.entries(students).map((student: any[]) => {
            student[1].id = student[0];
            return student[1];
          });
          resolve(students);
        },
        error: (err) => reject(err),
      });
    });
  }

  getStudent(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/${id}.json`).subscribe({
        next: (student) => resolve(student),
        error: (err) => reject(err),
      });
    });
  }

  postStudent(student: Student): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}.json`, student).subscribe({
        next: (student) => resolve(student),
        error: (err) => reject(err),
      });
    });
  }

  putStudent(student: Student): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(`${this.url}/${student.id}.json`, student).subscribe({
        next: (student) => resolve(student),
        error: (err) => reject(err),
      });
    });
  }

  deleteStudent(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.url}/${id}.json`).subscribe({
        next: (student) => resolve(student),
        error: (err) => reject(err),
      });
    });
  }
}
