"use strict";
exports.__esModule = true;
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
var models_1 = require("./models");
var e1 = new models_1.Joueur("souhe", 12, {
    nom: "etoile",
    pays: "Tunisia"
});
var e2 = new models_1.Joueur("mimi", 12, {
    nom: "etoile",
    pays: "Tunisia"
});
var e3 = new models_1.Joueur("ali", 12, {
    nom: "etoile",
    pays: "Tunisia"
});
var tab = [e1, e2, e3];
e1.infoJoeur(tab);
