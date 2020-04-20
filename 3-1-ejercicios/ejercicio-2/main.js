'use strict';

class Square {
  constructor(culo) {
    this.side = culo;
  }
  perimeter(side) {
    let resultP = parseInt(this.side) * 4;
    console.log('perimeter', resultP);
    return resultP;
  }
  area(side) {
    let resultA = parseInt(this.side) ** 2;
    console.log('area', resultA);
    return resultA;
  }
}

const square1 = new Square(1);
const square2 = new Square(3);
const square3 = new Square(7);

square1.perimeter(this.side);
square1.area(this.side);
square2.perimeter(this.side);
square2.area(this.side);
square3.perimeter(this.side);
square3.area(this.side);

console.log(square1.side, 'esto es side de square1');
console.log(square2.side, 'esto es side de square2');
console.log(square3.side, 'esto es side de square3');
