// Функція для обчислення суми двох чисел
function add(a: number, b: number): number {
    return a + b;
}

console.log('Sum of 5 and 3:', add(5, 3));

interface Person {
    name: string;
    age: number;
    greet: () => string;
}

const person: Person = {
    name: "Alice",
    age: 30,
    greet: function (): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    },
};

console.log(person.greet());

const numbers: number[] = [10, 20, 30, 40, 50];

function calculateAverage(arr: number[]): number {
    const sum = arr.reduce((acc: number, num: number) => acc + num, 0);
    return sum / arr.length;
}

console.log('Average of numbers:', calculateAverage(numbers));


class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(10, 5);
console.log('Rectangle Area:', rectangle.getArea());
console.log('Rectangle Perimeter:', rectangle.getPerimeter());

function printMessage(message: string): void {
    console.log('Message:', message);
}

printMessage('Hello, TypeScript is coming!');


interface User {
    name: string;
    age: number;
}

const users: User[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 35 },
    { name: "Mike", age: 29 },
];

const filteredUsers = users.filter(user => user.age > 30);
console.log('Users older than 30:', filteredUsers);
