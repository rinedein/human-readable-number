module.exports = function toReadable (number) {
    if (number < 0 || number > 999) {
        return "Invalid input. Please enter a number between 0 and 999.";
      }
      let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
      let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
      let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    
      let output = "";
    
      if (number === 0) {
        return "zero";
      }
      if (number >= 100) {
        output += ones[Math.floor(number / 100)] + " hundred ";
        number %= 100;
      }
    
      if (number >= 10 && number < 20) {
        output += teens[number - 10] + " ";
      } else {
        if (number >= 10) {
          output += tens[Math.floor(number / 10)] + " ";
          number %= 10;
        }
        output += ones[number];
      }
    
      return output.trim();
  
}
