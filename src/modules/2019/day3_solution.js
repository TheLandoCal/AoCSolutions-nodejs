const getCoordinates = function(path) {
  return path.reduce(
    (coordinates, instruction) => {
      coordinates.push(...getSubCoordinates(coordinates[coordinates.length - 1], instruction));
      return coordinates;
    },
    ['0,0']
  );
};

const getIntersections = function(path1, path2) {
  const path1Coordinates = new Set(getCoordinates(path1).slice(1));
  const path2Coordinates = new Set(getCoordinates(path2).slice(1));

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
  const [path1, path2] = input.split('\n');
  const intersections = getIntersections(path1.split(','), path2.split(','));

  return intersections.reduce((shortestDistance, location) => {
    const currentDistance = location.reduce((acc, val) => Math.abs(acc) + Math.abs(val));
    return currentDistance < shortestDistance ? currentDistance : shortestDistance;
  }, Number.MAX_SAFE_INTEGER);
};

const tbd = function(input) {
  return '???';
};

module.exports = {
  p1Solution: getDistanceToClosestIntersection,
  p2Solution: tbd
};
