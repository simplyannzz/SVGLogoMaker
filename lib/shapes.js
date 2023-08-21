class shapes {
    fill;
    text;
    textColor;
    constructor(fill, textColor, text) {
        this.fill = fill;
        this.text = text;
        this.textColor = textColor;
    }
    setText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font=size="50px" font-weight="400" 
    fill="${this.textColor}">${this.text}</text>`
    }
}
class Circle extends shapes {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
    }
    rendercircle() {
        return `<svg version ="1.1"
         width="300px" height="200px"
         xmlns="http://www.w3.org/2000/svg">
         <circle r="50px" cx="250" cy="250" fill="${this.fill}"/>
         ${super.setText()}
         </svg>`
    }
}
class Triangle extends shapes {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
    }
    renderTriangle() {
        return `<svg version ="1.1"
         width="300px" height="200px"
         xmlns="http://www.w3.org/2000/svg">
         <polygon points= "250, 60, 100, 400, 400, 400" fill="${this.fill}"/>
         ${super.setText()}
         </svg>`
    }
}
class Square extends shapes {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
    }
    renderSquare() {
        return `<svg version ="1.1"
         width="1750px" height="1750px"
         xmlns="http://www.w3.org/2000/svg">
         <react width="500px" height="500px" fill="${this.fill}"/>
       <text x="${xEl}" y="${yEl}" dominant-baseline="middle" text-anchor="middle" font=size="50px" font-weight="400" 
       fill="${this.textColor}">${this.text}</text>'
         </svg>`
    }
}



//export
module.exports = { shapes, Circle, Triangle, Square }