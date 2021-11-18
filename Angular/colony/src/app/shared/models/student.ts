export class Student {
  id: string;
  firstName: string;
  lastName: string;
  gender: object[];
  phone: string;
  address: string;
  city: string;
  state: string;
  picture: string;

  constructor(student?: any) {
    student = student || {};
    this.id = student.id || '';
    this.firstName = student.firstName || '';
    this.lastName = student.lastName || '';
    this.gender = student.gender || [];
    this.address = student.address || '';
    this.city = student.city || '';
    this.phone = student.phone || '';
    this.state = student.state || '';
    this.picture = student.picture || '';
  }
}

// <!-- Nous allons gerer une colonie de vacances
// Une liste de jeune filtrable suivant leur pays et/ou leur age (option)\
// Quand on clique sur un des noms on arrive sur le detail de l enfant
// Dans le detail on a une image de l enfant et toutes les autres proprietes
// Possibilite d ajouter un enfant, de l editer, et de le supprimer -->
