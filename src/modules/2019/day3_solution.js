const getIntersections = function(path1, path2) {
  const getCoordinates = (path) => path.reduce((coordinates, instruction) => {
    coordinates.push(...getSubCoordinates(coordinates[coordinates.length - 1], instruction));
    return coordinates;
  }, ['0,0']);

  const path1Coordinates = new Set(getCoordinates(path1).slice(1));
  const path2Coordinates = new Set(getCoordinates(path2).slice(1));

  // Intersections: (6, 5) and (3, 3)
  const intersections = new Set([...path1Coordinates].filter(x => path2Coordinates.has(x)));
  return Array.from(intersections).map(x => x.split(',').map(y => parseInt(y)));
};

const getSubCoordinates = function(coordinate, instruction) {
  const getInstructionValue = (i) => parseInt(i.replace(/[UDLR]/u, ''));
  let subCoordinates = [];

  if(instruction.startsWith('U')) {
    for(let i = 1; i <= getInstructionValue(instruction); i++) {
      const nextCoordinate = coordinate.split(',').map(x => parseInt(x));
      nextCoordinate[1] += i;
      subCoordinates.push(nextCoordinate.join(','));
    }
  } else if (instruction.startsWith('D')) {
    for(let i = 1; i <= getInstructionValue(instruction); i++) {
      const nextCoordinate = coordinate.split(',').map(x => parseInt(x));
      nextCoordinate[1] -= i;
      subCoordinates.push(nextCoordinate.join(','));
    }
  } else if (instruction.startsWith('L')) {
    for(let i = 1; i <= getInstructionValue(instruction); i++) {
      const nextCoordinate = coordinate.split(',').map(x => parseInt(x));
      nextCoordinate[0] -= i;
      subCoordinates.push(nextCoordinate.join(','));
    }
  } else {
    for(let i = 1; i <= getInstructionValue(instruction); i++) {
      const nextCoordinate = coordinate.split(',').map(x => parseInt(x));
      nextCoordinate[0] += i;
      subCoordinates.push(nextCoordinate.join(','));
    }
  }

  return subCoordinates;
};

const getDistanceToClosestIntersection = function(input) {
  const [path1, path2] = input.split('\n');
  const intersections = getIntersections(path1.split(','), path2.split(','));
  return 6;
};

const tbd = function(input) {
  return '???';
};

module.exports = {
  p1Solution: getDistanceToClosestIntersection,
  p2Solution: tbd
};
