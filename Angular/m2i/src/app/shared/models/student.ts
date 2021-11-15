export class Student {
  name: string;
  age: number;
  constructor(student?: any) {
    student = student || {};
    this.name = student.name || '';
    this.age = student.age || 0;
  }
}
