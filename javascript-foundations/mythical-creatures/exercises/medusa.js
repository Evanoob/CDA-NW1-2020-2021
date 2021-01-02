class Medusa {
    constructor(name, statues = []) {
        this._name = name;
        this._statues = statues
    }

    get name() {
        return this._name
    }

    get statues() {
        return this._statues
    }

    stare(victim) {
        victim._stoned = true
        if (this._statues.length < 3) {
          this._statues.push(victim)
          
        } else {
          this._statues[0]._stoned = false
          this._statues.push(victim)
          this._statues.shift()
        }
    }
    
}



module.exports = Medusa;