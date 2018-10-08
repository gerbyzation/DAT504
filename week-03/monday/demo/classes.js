class Car {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`${this.name} does "vroom" when you drive around town`)
  }
}

const peugeot = new Car('peugeot')
peugeot.drive()

class RaceCar extends Car {
  drive () {
    console.log(`${this.name} does "VROOOOOOOM" when you drive around town`)
  }
}

const f1 = new RaceCar('Formula 1')


class Button extends Component{
  constuctor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
}
