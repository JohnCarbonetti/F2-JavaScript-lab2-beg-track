var hello = {
  klingon: 'nuqneH',  
  romulan: 'Jolan\'tru', 
  'federation standard': 'hello' 
};

function SentientBeing (planet, language) {
  this.planet = planet;
  this.language = language;
}

SentientBeing.prototype.sayHello = function(sb) {
    console.log(hello[this.language]);
        return(hello[sb.language]);
}

function Klingon() {}

Klingon.prototype = new SentientBeing()


var klingon = new Klingon('Qo\'nos', 'klingon'); 
var romulan = new Romulan('Romulus', 'romulan');
var human = new Human('Earth', 'federation standard'); 

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
