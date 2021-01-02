class Vampire {
    constructor(name, pet = "bat") {
        this._name = name;
        this._pet = pet;
        this._thirsty = true;
    }

    get name() {
        return this._name
    }

    get pet() {
        return this._pet
    }
    get thirsty() {
        return this._thirsty
    }

    drink() {
      return this._thirsty = false
    }

}

module.exports = Vampire;