class Werewolf {
    constructor(name) {
        this._name = name;
        this._human = true;
        this._wolf = false
    }

   get name() {
       return this._name
   } 

   get human() {
       return this._human
   }

   get wolf() {
       return this._wolf
   }

   transform() {
       if (this._wolf) {
           this._human = true;
           this._wolf = false;
           this._hungry = false;
           this._ableToEat = false;
       } else {
           this._human = false;
           this._wolf = true;
           this._hungry = true;
           this._ableToEat = true;
       }
   }

   eat() {
       this._human = true;
       this._wolf = false;
       this._hungry = false;
       this._ableToEat = false
   }
}

module.exports = Werewolf