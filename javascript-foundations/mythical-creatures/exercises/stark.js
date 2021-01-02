class Stark {
    constructor(name, location = "Winterfell") {
        this._name = name;
        this._location = location;
    }

    get name() {
        return this._name
    }

    get location() {
        return this._location
    }

}

