import { Injectable } from '@angular/core';
import { Etudiant } from '../entities';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  tab:Etudiant[]=[
    {"id":2,"nom":"Ahmed","poste":"Prof"},
    {"id":3,"nom":"Ali","poste":"Chef"},
    {"id":5,"nom":"Mahdi","poste":"Ing"}
  ];
  constructor() { }

  getInfo()
  {
    return "Vous êtes un excellent etudiant";
  }
  getStudentList()
  {
    return this.tab;
  }
}
