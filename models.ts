export interface Compte{
    rib:number,
    solde:number
}

export class Etudiant
{
   // private nom:string;
   // private age:number;

    /*public constructor()
    {

    }*/
    public constructor(private nom?:string, private age?:number)
    {
        
    }
    public info()
    {
        console.log("Nom = "+this.nom+" Age = "+this.age);
    }
}

export interface Equipe
{
    
    nom:string,
    pays:string
}
export class Joueur
{
    
    public constructor(private nom?:string,private numero?:number,private equipe?:Equipe)
    {

    }
    public infoJoeur(tab:Joueur[])
    {   tab.forEach(element => {
        console.log(element.nom+" "+element.numero+" "+element.equipe.nom+" "+element.equipe.pays);
    });
    }    
}