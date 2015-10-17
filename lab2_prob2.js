function Blob(rateOfConsumption){
  this.rateOfConsumption = rateOfConsumption;
}

var blob = new Blob(1);
 
var populationLeft = 1000;

var hours = 0;

while (populationLeft > 0){
  populationLeft = populationLeft - blob.rateOfConsumption;
  blob.rateOfConsumption++;
  hours++;
}
console.log(blob.rateOfConsumption);


var hoursSpentInDowington = hours;


Blob.prototype.hoursToOoze = function(peopleLeft, peoplePerHour) {
    
    var hours = 0;

   while (peopleLeft > 0) {
      peopleLeft = peopleLeft - peoplePerHour;
      peoplePerHour++;
      hours++;
   }
  return hours;
};


var hoursToEatSeattle = blob.hoursToOoze(10000, 5);
var hoursToEatCali = blob.hoursToOoze(100000, hoursToEatSeattle);
console.log(hoursToEatCali)
