class Pirate {
    constructor(name, job = "scallywag", booty = 0) {
        this._name = name;
        this._job = job;
        this._cursed = false;
        this._booty = booty;
    }

get name() {
    return this._name
}

get job() {
    return this._job
}

get cursed() {
    return this._cursed
}

get booty() {
    return this._booty
}

robShip() {
    this._booty += 100
    return 'YAARRR!'
}

}

module.exports = Pirate;