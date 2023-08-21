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
         <circle cx="130" cy="100" r="100" fill="${this.fill}"/>
         <text x="130" y="110" text-anchor="middle" font-size="60" font-weight="400" 
         fill="${this.text} ">${this.textColor}</text>'
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
         <polygon points= "250, 100, 100, 400, 400, 400" fill="${this.fill}"/>
         <text x="250" y="185" text-anchor="middle" font-size="40" font-weight="400" 
         fill="${this.text} ">${this.textColor}</text>'
         </svg>`
    }
}
class Square extends shapes {
    constructor(fill, text, textColor) {
        super(fill, text, textColor);
    }
    renderSquare() {
        return `<svg version ="1.1"
         width="300px" height="200px"
         xmlns="http://www.w3.org/2000/svg">
         <rect x="90" y= "40" width="500px" height="500px" fill="${this.fill}"/>
       <text x="180" y="10" text-anchor="middle" font-size="60" font-weight="400" 
       fill="${this.text} ">${this.textColor}</text>'
         </svg>`
    }
}



//export
module.exports = { shapes, Circle, Triangle, Square }



// dominant-baseline="middle"