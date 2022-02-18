"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Parallelogram = exports.Triangle = void 0;
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    perimeter() {
        return this.side1 + this.side2 + this.side3;
    }
    area() {
        const semiperimeter = this.perimeter() / 2;
        return Math.sqrt(semiperimeter * (semiperimeter - this.side1) * (semiperimeter - this.side2) * (semiperimeter - this.side3));
    }
}
exports.Triangle = Triangle;
class Parallelogram {
    constructor(side1, side2) {
        this.side1 = side1;
        this.side2 = side2;
    }
    perimeter() {
        return this.side1 * 2 + this.side2 * 2;
    }
    area() {
        return this.side1 * this.side2;
    }
}
exports.Parallelogram = Parallelogram;
class Square extends Parallelogram {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}
exports.Square = Square;
var t = new Triangle(20, 20, 20);
console.log('Triangolo:');
console.log(t.perimeter());
console.log(t.area());
var s = new Square(10);
console.log(s.perimeter());
