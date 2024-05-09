function calculadora(inputString) {
  let delimiters = [',', '-', /[,|-]/];
  let numbersString = inputString;
  let totalSum = 0;
  const customDelimiterMatch = inputString.match(/^\/\/\[(.)\]/);

  if(customDelimiterMatch){
    const delimiter = customDelimiterMatch[1];
    delimiters.pop();
    delimiters.push(new RegExp(`[${delimiter}|,|-]`));
    numbersString = inputString.slice(customDelimiterMatch[0].length +3 );
  }

  numbersString = inputString.split(delimiters[2]);

  if(inputString === "")
    return 0;

  if(numbersString.length != 1){
    for(const num of numbersString){
      if(num <= 1000)
        totalSum = totalSum + Number(num);
    }  
    return totalSum;
  }
  
  return Number(numbersString[0]);
}

export default calculadora;
