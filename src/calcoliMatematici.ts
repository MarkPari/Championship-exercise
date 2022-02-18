export interface Shape{
    area: ()=>number;
    perimeter: ()=>number;
}

export class Triangle implements Shape {
    constructor(private side1: number, private side2: number, private side3: number){}

    perimeter(){
        return this.side1+this.side2+this.side3;
    }

    area(){
        const semiperimeter =this.perimeter()/2;
        return Math.sqrt(semiperimeter*(semiperimeter-this.side1)*(semiperimeter-this.side2)*(semiperimeter-this.side3));
    }
}

export class Parallelogram implements Shape{
    constructor(private side1: number, private side2: number){}

    perimeter(){
        return this.side1*2+this.side2*2;
    }

    area(){
        return this.side1*this.side2;
    }
}

export class Square extends Parallelogram{
    constructor(private side: number){
        super(side, side)
    }
}


var t = new Triangle(20,20,20);
console.log('Triangolo:')
console.log(t.perimeter());
console.log(t.area());

var s = new Square(10);
console.log(s.perimeter());