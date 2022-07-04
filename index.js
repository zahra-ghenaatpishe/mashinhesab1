const leftHand = +prompt('left hand number');
const operator = prompt('operator');
const rightHand = +prompt('right hand number');

let result= 0;

switch(operator){ 
    case '*': 
    result =leftHand*rightHand
    break;
    case '+':
        result = leftHand+rightHand
        break;
     case '-':
        result = leftHand-rightHand
        break;
      case '/':
        result = leftHand/rightHand
        break;
        default:
            result = 'Error'
            break;


}

console.log(leftHand);
console.log(operator);
console.log(rightHand);
console.log(result);