import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
formation : string="Spring Boot Angular";
students : string[] = ["oumaima","saif","wifek","malek"];
nbreClick:number = 0;
test : boolean = false;
cours : string = "Spring";
resultat : any;
divZero:boolean = false;
urlImageError="https://www.virages.com/Images/Categorie_A1/B1_Zoom.gif";
srcImage:string ="data:image/png;base64,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";
  constructor(private service : StudentService) {
    //console.log("Constructeur");
  }

  ngOnInit(): void {
    //console.log("ngOnInit");
    console.log(this.service.getInfo());
  }
  incrementation(){
    this.nbreClick++;
    this.test = ! this.test;
  }

  onSubmit(inscription)
  {
    alert("vous avez taper : "+ inscription.value.nom +" "+inscription.value.ecole);
  }

  calcul(calculatrice){
    if(calculatrice.value.y == 0)
    {
        this.divZero = true;
        this.resultat = "Opération impossible";
    }
    else{

      this.resultat = calculatrice.value.x/calculatrice.value.y;
    }

  }
}
