class Centaur {
    constructor({ name, type, cranky = false, standing = true, count = 0, layingDown = false }) {
      this._name = name;
      this._type = type;
      this._cranky = cranky;
      this._standing = standing;
      this._count = count
      this._layingDown = layingDown
    }
  
    get name() {
      return this._name;
    }
  
    get breed() {
      return this._type;
    }
  
    get cranky() {
      return this._cranky;
    }
  
    get standing() {
      return this._standing
    }
  
    get layingDown() {
      return this._layingDown
    }
  
    shoot() {
        if(this._cranky === true) {
            return 'NO!'
        }
        else {
            this._cranky = true
            return 'Twang!!!'
        }
}
  
    run() {
        if(this._cranky === true) {
            return 'NO!'
        }
        else {
            this._cranky = true
            return 'Clop clop clop clop!!!'
        }
     }
       
    

  
    sleep() {
        if(this._cranky === true) {
            this._cranky = false
            return 'ZZZZ'
        }
        else{
            return 'NO!'
        }
    }
  
    layDown() {
        this._standing = false
        this._layingDown = true
        this._cranky = true
    }
  
    standUp() {
        this._standing = true
        this._layingDown = false
    }
  
    drinkPotion() {
        if(this._cranky === true) {
            this._cranky = false
            return 'Not while I\'m laying down!'
        }
        else {
            this._cranky = true
        }
    }
  }

  module.exports = Centaur