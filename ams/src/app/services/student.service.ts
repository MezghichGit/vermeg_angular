import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getInfo()
  {
    return "Vous êtes un excellent etudiant";
  }
}
