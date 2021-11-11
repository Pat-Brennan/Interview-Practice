function upperStr(str) {
    if (str === "") {
      return "";
    }
    const newChar = str[0].toUpperCase(); // capitalize the first letter of our string
  ​
    // Concatenate new data with reduced string for next iteration...
    return newChar + upperStr(str.slice(1));
  }
  console.log(upperStr("hello"));
  ​
  // first iteration
  // upperStr("hello")
  // const newChar = "H"
  // return "H" + upperStr("ello") => "HELLO"
  ​
  // second iteration
  // upperStr("ello")
  // const newChar = "E"
  // return "E" + upperStr("llo") => "ELLO"
  ​
  // third iteration
  // upperStr("llo")
  // const newChar = "L"
  // return "L" + upperStr("lo") => "L" + "LO" => "LLO"
  ​
  // fourth iteration
  // upperStr("lo")
  // const newChar = "L"
  // return "L" + upperStr("o") => "L" + "O" => "LO"
  ​
  // fifth iteration
  // upperStr("o")
  // const newChar = "O"
  // return "O" + upperStr("") => "O" + "" => "O"
  ​
  // sixth iteration
  // upperStr("")
  // return ""
  ​
  // callstack
  ​
  // 247
  ​
  // 100 10 1
  ​
  // 2 4 7 === (2 * 100) + (4 * 10) + (7 * 1) = 247
  ​
  // 10^0 = 1
  // 10^1 = 10
  // 10^2 = 100
  // 10^3 = 1000
  // 10^4 = 10000
  // ...
  ​
  // Binary is similar to decimal but represented as a power of 2
  ​
  // 2^0 = 1
  // 2^1 = 2
  // 2^2 = 4
  // 2^3 = 8
  // 2^4 = 16
  // 2^5 = 32
  // 2^6 = 64
  // 2^7 = 128
  // 2^8 = 256
  ​
  // 247
  // 247 - (128 * 1) = 119 - (64 * 1) = 55 - (32 * 1) = 23 - (16 * 1) = 7 - (8 * 0) = 7 - (4 * 1) = 3 - (2 * 1) = 1 - (1 * 1) = 0
  ​
  // 11110111 === 247