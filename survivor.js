class Survivor {
  constructor(name) {
    this.name = name;
    this.wounds = 0;
  }

  getsWounded(n) {
    return (this.wounds += n);
  }
}

module.exports = Survivor;
