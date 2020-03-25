let color_td = "#c4c4";
// This code is the function that generate table length of an array of prime numbers of n (where n is a default number, 10)
const generatePrimeNumbers = n => {
  let primeNumbers = [2, 3, 5, 7];
  if (Number(n) && n > 5) {
    for (let a = 2; primeNumbers.length < n; a++) {
      if (a % 2 !== 0 && a % 3 !== 0 && a % 5 !== 0 && a % 7 !== 0) {
        primeNumbers.push(a);
      }
    }
  }
  return primeNumbers;
};

// This is the function that create a table with <th> and <tr> of prime numbers
const createTable = primeNumbers => {
  document.write(
    "<table border='1px' style='border:1px solid #000; border-collapse: collapse; width:100%; deisplay:inline'>"
  );

  // this will create table header
  document.write(`<th style='height: 30px'></th>`);
  for (let s = 0; s < primeNumbers.length; s++) {
    document.write(`<th style='height: 30px'>  ${primeNumbers[s]}  </th>`);
  }

  // this will create table row
  for (let i = 0; i < primeNumbers.length; i++) {
    document.write("<tr style='width:30px'>");

    document.write(
      `<td style='width:30px; text-align:center 
          '> 
        ${primeNumbers[i]} 
        </td>`
    );
    for (let j = 0; j < primeNumbers.length; j++) {
      // this will create the product of table head and first column
      document.write(
        `<td style='width:30px;background-color:
          ${color_td}; text-align:center 
          '> 
          ${primeNumbers[i] * primeNumbers[j]} 
          </td>`
      );
    }
    document.write("</tr>");
  }
  document.write("</table>");
};

// defines the length of the table
// example 30 gives a multiplication table of first 10 prime numbers
createTable(generatePrimeNumbers(10));

exports.createTable = createTable;
exports.generatePrimeNumbers = generatePrimeNumbers;