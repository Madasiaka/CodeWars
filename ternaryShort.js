//P: age integer
//R: String based on age given
//E: describe(9) => "You're a(n) kid"
//   describe(65) => "You're a(n) elderly"
//   describe(16) => "You're a(n) teenager"

function describeAge(age) {
    // ternary ring
    return age <= 12 ? "You're a(n) kid" : age >= 13 && age <= 17 ? "You're a(n) teenager" : age >= 18 && age <= 64 ? "You're a(n) adult" : "You're a(n) elderly"
  }