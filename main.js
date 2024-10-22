// Implémenter la classe Voiture
var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
// Créer une instance de la classe Voiture et appeler la méthode start
var maVoiture = new Voiture("Toyota", "Corolla", 2020);
maVoiture.start(); // Devrait enregistrer "Car engine started" dans la console
