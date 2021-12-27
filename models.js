"use strict";
exports.__esModule = true;
exports.Joueur = exports.Etudiant = void 0;
var Etudiant = /** @class */ (function () {
    // private nom:string;
    // private age:number;
    /*public constructor()
    {

    }*/
    function Etudiant(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    Etudiant.prototype.info = function () {
        console.log("Nom = " + this.nom + " Age = " + this.age);
    };
    return Etudiant;
}());
exports.Etudiant = Etudiant;
var Joueur = /** @class */ (function () {
    function Joueur(nom, numero, equipe) {
        this.nom = nom;
        this.numero = numero;
        this.equipe = equipe;
    }
    Joueur.prototype.infoJoeur = function (tab) {
        tab.forEach(function (element) {
            console.log(element.nom + " " + element.numero + " " + element.equipe.nom + " " + element.equipe.pays);
        });
    };
    return Joueur;
}());
exports.Joueur = Joueur;
