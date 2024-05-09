function calculadora(chain) {
  let delimiters = [',', '-', /[,|-]/];
  let numbersString = chain;
  let totalSum = 0;
  const customDelimiterMatch = chain.match(/^\/\/\[(.)\]/);

  if(customDelimiterMatch){
    const delimiter = customDelimiterMatch[1];
    delimiters.pop();
    delimiters.push(new RegExp(`[${delimiter}|,|-]`));
    numbersString = chain.slice(customDelimiterMatch[0].length +3 );
  }

  numbersString = chain.split(delimiters[2]);

  if(chain === "")
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
