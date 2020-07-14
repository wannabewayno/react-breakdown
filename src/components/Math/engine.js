const calculate = MathString => {
   const [ operator ] = MathString.match(/[/+\-*]/g);
   const [ num1, num2 ] = MathString.match(/\d+/g).map(number => Number(number));
   console.log(operator);
   console.log(num1);
   console.log(num2);

   let result;
   switch(operator){
      case'+':
          result = num1+num2;
          break;
      case'-':
          result = num1-num2;
          break;
      case'/':
          result = num1/num2;
          break;
      case'*':
          result = num1*num2;
          break;
      default:
          throw new Error('undefined operator')
  }
   return result;
}

// const result = calculate('5 + 9');

// console.log(result);

module.exports = calculate;

