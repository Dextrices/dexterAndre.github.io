/*
    Luma - LudoMath's math library. 
    Dexter André Osiander - 2019
*/



// 0        Parsing
//      https://www.freecodecamp.org/news/how-to-build-a-math-expression-tokenizer-using-javascript-3638d4e5fbe9/
// 0.0      Lexer
// 0.1          Lexer
//      Token class
function Token(_type, _value)
{
    this.type = _type;
    this.value = _value;
}
//      Tokenization function
function tokenize(str)
{
    var result = [];
    str.replace(/\s+/g, "");
    str = str.split("");
    str.forEach(function (char, idx) 
    {
        if (isDigit(char))
        {
            result.push(new Token("Literal", char));
        }
        else if (isLetter(char))
        {
            result.push(new Token("Variable", char));
        }
        else if (isOperator(char))
        {
            result.push(new Token("Operator", char));
        }
        else if (isLeftParenthesis(char))
        {
            result.push(new Token("Left Parenthesis", char));
        }
        else if (isRightParenthesis(char))
        {
            result.push(new Token("Right Parenthesis", char));
        }
        else if (isComma(char))
        {
            result.push(new Token("Function Argument Separator", char));
        }
    }
    );
    
    return result;
}
//      Utilities
function isDigit(char) 
{
    return /\d/.test(char);
}
function isLetter(char)
{
    return /[a-z]/i.test(char);
}
function isOperator(char)
{
    return /\+|-|\*|\/|\^/.test(char);
}
function isLeftParenthesis(char)
{
    return (char === "(");
}
function isRightParenthesis(char)
{
    return (char === ")");
}
function isComma(char)
{
    return (char === ",");
}

var string = "33+2";
console.log(tokenize(string));
// 1            Geometry
// 1.1          Measurement
// 1.1.1        Angles
function RadToDeg(radians)
{
    
}
function DegToRad(degrees)
{
    
}
// 
// 1.2          Geometric Objects
// 1.3          Intersection Testing
