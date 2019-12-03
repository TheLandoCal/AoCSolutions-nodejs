const getCoordinates = function(path) {
  return path.reduce(
    (coordinates, instruction) => {
      coordinates.push(...getSubCoordinates(coordinates[coordinates.length - 1], instruction));
      return coordinates;
    },
    ['0,0']
  );
};

const getIntersections = function(path1Coordinates, path2Coordinates) {
  const intersections = new Set([...path1Coordinates].filter(x => path2Coordinates.has(x)));
  return Array.from(intersections).map(x => x.split(',').map(y => parseInt(y)));
};

const getSubCoordinates = function(coordinate, instruction) {
  const getInstructionValue = i => parseInt(i.replace(/[UDLR]/u, ''));

  const calculateSubCoordinates = (coordinate, coordinateIdx, instruction, shouldNegate) => {
    let subCoordinates = [];
    for (let i = 1; i <= getInstructionValue(instruction); i++) {
      const nextCoordinate = coordinate.split(',').map(x => parseInt(x));
      nextCoordinate[coordinateIdx] += shouldNegate ? i * -1 : i;
      subCoordinates.push(nextCoordinate.join(','));
    }
    return subCoordinates;
  };

  if (instruction.startsWith('U')) {
    return calculateSubCoordinates(coordinate, 1, instruction, false);
  } else if (instruction.startsWith('D')) {
    return calculateSubCoordinates(coordinate, 1, instruction, true);
  } else if (instruction.startsWith('L')) {
    return calculateSubCoordinates(coordinate, 0, instruction, true);
  } else {
    return calculateSubCoordinates(coordinate, 0, instruction, false);
  }
};

const getDistanceToClosestIntersection = function(input) {
  const [path1Coordinates, path2Coordinates] = input.split('\n').map(x => getCoordinates(x.split(',')).slice(1));
  const intersections = getIntersections(new Set(path1Coordinates), new Set(path2Coordinates));

  return intersections.reduce((shortestDistance, location) => {
    const currentDistance = location.reduce((acc, val) => Math.abs(acc) + Math.abs(val));
    return currentDistance < shortestDistance ? currentDistance : shortestDistance;
  }, Number.MAX_SAFE_INTEGER);
};

const getFewestCombinedSteps = function(input) {
  const [path1Coordinates, path2Coordinates] = input.split('\n').map(x => getCoordinates(x.split(',')).slice(1));
  const intersections = getIntersections(new Set(path1Coordinates), new Set(path2Coordinates));

  return intersections.reduce((fewestSteps, intersection) => {
    const currentSteps = (path1Coordinates.indexOf(intersection.join(',')) + 1) + (path2Coordinates.indexOf(intersection.join(',')) + 1);
    return currentSteps < fewestSteps ? currentSteps : fewestSteps;
  }, Number.MAX_SAFE_INTEGER);
};

module.exports = {
  p1Solution: getDistanceToClosestIntersection,
  p2Solution: getFewestCombinedSteps
};
