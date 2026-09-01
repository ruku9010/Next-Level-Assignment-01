//Question No. 2

function getDayType(input) {
  const inputDay = input.toLowerCase();

  switch (inputDay) {
    case "friday":
    case "saturday":
      return "Weekend";
      break;
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
      break;
    default:
      return "Invalid Day";
  }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));

// console.log(getDayType("Bandarban"));

// Input day	                                    Returns
// Friday, Saturday	                            "Weekend"
// Sunday, Monday, Tuesday, Wednesday, Thursday	"Working Day"
// anything else	                                "Invalid Day"
