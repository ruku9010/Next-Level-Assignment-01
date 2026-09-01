//Question No. 1
function describeValue(value) {
    return `${typeof value} | ${!value === false || 0 || -0 || 0n || "" || null || undefined || NaN && value.length === 0 ? "truthy" : "falsy"}`
}

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

//Question No. 3
function validateUsername(nameOfUser) {
    const userName = nameOfUser.toLowerCase()

    if(userName.length < 4) {
        return "Too Short"
    } else if (userName.includes(" ")) {
        return "No Space Allowed"
    } else if (userName.includes("admin")) {
        return "Reserved Word"
    }

    return "Available"
}

//Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  if (distance <= 2 && isNight && waitingMinutes > o) {
    return 50 + waitingMinutes * 2 + (50 + waitingMinutes * 2) * 0.2;
  } else if (distance <= 2 && isNight) {
    return 50 + 50 * 0.2;
  } else if (distance <= 2 && waitingMinutes > 0) {
    return 50 + waitingMinutes * 2;
  } else if (distance <= 2) {
    return 50;
  } else if (distance > 2 && isNight && waitingMinutes > 0) {
    return (distance - 2) * 15 +
      50 +
      waitingMinutes * 2 +
      ((distance - 2) * 15 + 50 + waitingMinutes * 2) * 0.2;
  } else if (distance > 2 && isNight) {
    return (distance - 2) * 15 + 50 + ((distance - 2) * 15 + 50) * 0.2;
  } else if (distance > 2 && waitingMinutes > 0) {
    return (distance - 2) * 15 + 50 + waitingMinutes * 2;
  } else if (distance > 2) {
    return (distance - 2) * 15 + 50;
  }
}

//Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  let runsNeeded = target - scored;
  let requiredRate = (runsNeeded / ballsLeft) * 6;

  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else if (requiredRate <= 6) {
      return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
  } else if (requiredRate >= 6 && requiredRate <= 12) {
      return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
  } else if (requiredRate > 12) {
      return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
  } 
};
