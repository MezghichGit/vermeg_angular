import { Compte,Etudiant } from './models';
/*
console.log("Hello Angular");

for(let i = 0; i<10; i++)
{
    console.log("i = "+i);
}*/
//console.log("final i = "+i);
/*
let names:string[]=["anis","siwar","saif"];
let age:number = 20;
let something:any;
let tab:any[]=[20, true,"amine"];
let nom:string="amine";
console.log(nom.toUpperCase());
let formation:any=10;
formation="angular";
console.log((<string>formation).toUpperCase());*/

/*
function doSomething(fname: string, lname: string) {

    console.log(fname + " " + lname);
}
doSomething("Amine", "Mezghich");

let myFunction = (fname,lname)=>console.log(fname + " " + lname);
myFunction("Mohamed Amine", "Mezghich");*/
/*
function infoCompte(compte: Compte) {
    console.log("RIB = "+ compte.rib + " SOLDE =" + compte.solde);
}
infoCompte(
    {
        "rib": 1010,
        "solde": 1000
    }
);

let e1 : Etudiant = new Etudiant();
let e2 : Etudiant = new Etudiant("Saif",22);
e1.info();
e2.info();*/

import {Equipe,Joueur} from './models';
let e1: Joueur =new Joueur("souhe",12,{
    nom:"etoile",
    pays:"Tunisia"
});
let e2: Joueur =new Joueur("mimi",12,{
    nom:"etoile",
    pays:"Tunisia"
});
let e3: Joueur =new Joueur("ali",12,{
    nom:"etoile",
    pays:"Tunisia"
});
let tab:Joueur[]=[e1,e2,e3];
e1.infoJoeur(tab);
