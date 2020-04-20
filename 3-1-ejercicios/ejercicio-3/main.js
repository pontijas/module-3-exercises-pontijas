'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    let resultP = this.base * this.numberOfSides;
    // console.log('perimeter', resultP);
    return resultP;
  }
  area() {
    let resultA = this.base * this.height;
    //  console.log('area', resultA);
    return resultA;
  }
}

class Square extends Polygon {
  constructor(side) {
    super();
    this.side = side;
  }
  // me devuelve Nan
}

class Triangle extends Polygon {
  area() {
    return super.area() / 2;
  }
}

const instancePolygon = new Polygon(5, 3, 4);
const instanceSquare = new Square(4, 4, 4);
const instanceTriangle = new Triangle(3, 4, 3);

instanceSquare.perimeter();
instanceTriangle.perimeter();
instanceSquare.area();
instanceTriangle.area();

console.log('polygon perimeter', instancePolygon.perimeter());
console.log('polygon area', instancePolygon.area());
console.log('square perimeter', instanceSquare.perimeter());
console.log('square area', instanceSquare.area());
console.log('triangle perimeter', instanceTriangle.perimeter());
console.log('triangle area', instanceTriangle.area());
