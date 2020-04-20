// 'use strict';

// ejercicio 1

const side = 9;

class Square {
  perimeter() {
    let result = side * 4;
    console.log('perimeter', result);
    return result;
  }
  area() {
    let result2 = side * side;
    console.log('area', result2);
    return result2;
  }
  sayGoodbye() {
    console.log('goodbye');
  }
}

const square1 = new Square();
const square2 = new Square();

square1.sayHello = () => {
  console.log('hello');
};

square2.sayGoodbye = () => {
  console.log('sayonara');
};

square1.perimeter();
square1.area();
square1.sayHello();
square1.sayGoodbye();

square2.sayGoodbye();
