const { shapes, Circle, Triangle, Square } = require('./shapes');

describe('shapes', () => {
    test('should return a shape', () => {
        const shape = new shapes();
        expect(shape.fill).toBe('pink');
        expect(shape.text).toBe('Hello');
        expect(shape.textColor).toBe('white');
    });
    test(' text is in shape', () => {
        const shape = new shapes('pink', 'white', 'Hello');
        expect(shape.setText).toBe(`<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font=size="50px" font-weight="400" 
    fill="white">Hello</text>`);
    });
});
describe('circle', () => {
    test('should return a circle', () => {
        const circle = new Circle('pink', 'white', 'Hello');
        expect(circle.fill).toBe('pink');
        expect(circle.text).toBe('Hello');
        expect(circle.textColor).toBe('white');
    });
    test(' circle is render with text', () => {
        const circle = new Circle('pink', 'white', 'Hello');
        expect(circle.renderCircle()).toBe(`<svg version ="1.1"
        width="300px" height="200px"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="130" cy="100" r="100" fill="pink"/>
        <text x="130" y="110" text-anchor="middle" font-size="60" font-weight="400" 
        fill="white">Hello</text>'
        </svg>` );
    });
});
describe('triangle', () => {
    test('should return a triangle', () => {
        const triangle = new Triangle('pink', 'white', 'Hello',);
        expect(triangle.fill).toBe('pink');
        expect(triangle.text).toBe('Hello');
        expect(triangle.textColor).toBe('white');
    });
    test('triangle is render with text', () => {
        const triangle = new Triangle('pink', 'white', 'Hello',);
        expect(triangle.renderTriangle()).toBe(`<svg version ="1.1"
            width="300px" height="200px"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points= "250, 100, 100, 400, 400, 400" fill="pink"/>
            <text x="250" y="185" text-anchor="middle" font-size="40" font-weight="400" 
            fill="white ">Hello</text>'
            </svg>`);
    });
});
describe('square', () => {
    test('should return a square', () => {
        const square = new Square('pink', 'Hello', 'white');
        expect(square.fill).toBe('pink');
        expect(square.text).toBe('Hello');
        expect(square.textColor).toBe('white');
    });
    test('square is render with text', () => {
        const square = new Square('pink', 'Hello', 'white');
        expect(square.renderSquare()).toBe(`<svg version ="1.1"
                width="300px" height="200px"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="90" y= "40" width="500px" height="500px" fill="pink"/>
              <text x="180" y="110" text-anchor="middle" font-size="60" font-weight="400" 
              fill="white ">Hello</text>'
                </svg>`);
    });
});



