
function makeCar(accelerateRate, brakeRaterate) {
  return { speed: 0,
    rate: accelerateRate,
    brakeRate: brakeRaterate,

    accelerate() {
      this.speed += this.rate;
    },

    break() {
      this.speed -= this.brakeRate
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}


let sedan = makeCar(8, 6);

sedan.accelerate();
sedan.break();
sedan.break();
console.log(sedan.speed);
