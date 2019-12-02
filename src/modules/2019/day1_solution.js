const getMassFuelRequirement = function(mass) {
  return Math.floor(mass / 3) - 2;
};

const getRecursiveMassFuelRequirement = function(mass) {
  let totalFuel = 0;
  let fuelRequirement = getMassFuelRequirement(mass);
  while (fuelRequirement > 0) {
    totalFuel += fuelRequirement;
    fuelRequirement = getMassFuelRequirement(fuelRequirement);
  }

  return totalFuel;
}

const calculateFuelRequirement = function(input) {
  const masses = input.split('\n');
  return masses.reduce((acc, val) => acc + getMassFuelRequirement(parseInt(val)), 0);
};

const calculateRecursiveFuelRequirement = function(input) {
  const masses = input.split('\n');
  return masses.reduce((acc, val) => acc + getRecursiveMassFuelRequirement(parseInt(val)), 0);
};

module.exports = {
  p1Solution: calculateFuelRequirement,
  p2Solution: calculateRecursiveFuelRequirement
};
