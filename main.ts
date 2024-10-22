// Définir l'interface Véhicule
interface Véhicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implémenter la classe Auto
class Auto implements Véhicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Créer une instance de la classe Auto et appeler la méthode start
const maNouvelleVoiture = new Auto("Toyota", "Corolla", 2020);
maNouvelleVoiture.start(); // Devrait enregistrer "Car engine started" dans la console
