class Direwolf {
    constructor(name, home = "Beyond the Wall", size = "Massive") {
        this._name = name;
        this._home = home;
        this._size = size
    }

get name() {
    return this._name
}

get home() {
    return this._home
}

get size() {
    return this._size
}

}

module.exports = Direwolf