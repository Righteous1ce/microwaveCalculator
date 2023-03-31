


function calculateNewCookingTime(currentWatt, newWatt, originalCookingTime) {
  let ratio = currentWatt / newWatt;
  let newTimeInMinutes = originalCookingTime * ratio;
  let wholeMinutes = Math.floor(newTimeInMinutes);
  let seconds = Math.round((newTimeInMinutes - wholeMinutes) * 60);
  return (wholeMinutes + seconds / 100).toFixed(2);
}

let newCookingTime = calculateNewCookingTime(850, 1000, 6.30);
console.log("New cooking time:", newCookingTime, "mins");



