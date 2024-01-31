class Survivor {
  constructor(name) {
    this.name = name;
    this.wounds = 0;
    this.alive = true
  }

  getsWounded(n) {
    this.wounds += n
    if(this.wounds >= 2) {
        this.alive = false
        this.wounds = 2
    }
    return (this.wounds);
  }

  isAlive() {
    return this.alive;
  }
}

module.exports = Survivor;
