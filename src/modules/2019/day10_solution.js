const reduceFraction = function(numerator, denominator) {
  // Based on a StackOverflow answer from Phrogz
  // See: https://stackoverflow.com/a/4652513/3361852
  const findGcd = (a, b) => {
    return b ? findGcd(b, a % b) : a;
  };

  const gcd = findGcd(numerator, denominator);
  return [numerator, denominator].map(x => x / gcd);
};

const isReducible = function(slope) {
  const [reducedRise, reducedRun] = reduceFraction(slope.rise, slope.run);
  return reducedRise < slope.rise && reducedRun < slope.run;
};

const countInlineAsteroids = function(asteroidMap, slope, x, y, asteroidsVisible) {
  const width = asteroidMap[0].length;
  const height = asteroidMap.length;
  while (0 <= x && x < width && 0 <= y && y < height) {
    const position = asteroidMap[y][x];
    if (position === '#') {
      asteroidsVisible.add(`${x},${y}`);
      break;
    }
    x += slope.run;
    y += slope.rise;
  }
};

const getStartingPoint = function(slope, x, y) {
  return [x + slope.run, y + slope.rise];
};

const countAsteroidsBySlope = function(asteroidMap, slope, x, y, asteroidsVisible) {
  if (!isReducible(slope)) {
    let inlineX;
    let inlineY;
    let inlineSlope;

    // Original Slope
    inlineSlope = { ...slope };
    [inlineX, inlineY] = getStartingPoint(inlineSlope, x, y);
    countInlineAsteroids(asteroidMap, inlineSlope, inlineX, inlineY, asteroidsVisible);

    inlineSlope = { rise: -slope.rise, run: -slope.run };
    [inlineX, inlineY] = getStartingPoint(inlineSlope, x, y);
    countInlineAsteroids(asteroidMap, inlineSlope, inlineX, inlineY, asteroidsVisible);

    // Inverse Slope
    inlineSlope = { rise: slope.rise, run: -slope.run };
    [inlineX, inlineY] = getStartingPoint(inlineSlope, x, y);
    countInlineAsteroids(asteroidMap, inlineSlope, inlineX, inlineY, asteroidsVisible);

    inlineSlope = { rise: -slope.rise, run: slope.run };
    [inlineX, inlineY] = getStartingPoint(inlineSlope, x, y);
    countInlineAsteroids(asteroidMap, inlineSlope, inlineX, inlineY, asteroidsVisible);

    if (slope.rise !== slope.run) {
      // Reciprocal Slope
      inlineSlope = { rise: slope.run, run: slope.rise };
      [inlineX, inlineY] = getStartingPoint(inlineSlope, x, y);
      countInlineAsteroids(asteroidMap, inlineSlope, inlineX, inlineY, asteroidsVisible);

      inlineSlope = { rise: -slope.run, run: -slope.rise };
      [inlineX, inlineY] = getStartingPoint(inlineSlope, x, y);
      countInlineAsteroids(asteroidMap, inlineSlope, inlineX, inlineY, asteroidsVisible);

      // Inverse Reciprocal Slope
      inlineSlope = { rise: slope.run, run: -slope.rise };
      [inlineX, inlineY] = getStartingPoint(inlineSlope, x, y);
      countInlineAsteroids(asteroidMap, inlineSlope, inlineX, inlineY, asteroidsVisible);

      inlineSlope = { rise: -slope.run, run: slope.rise };
      [inlineX, inlineY] = getStartingPoint(inlineSlope, x, y);
      countInlineAsteroids(asteroidMap, inlineSlope, inlineX, inlineY, asteroidsVisible);
    }
  }
};

const countVisibleAsteroids = function(asteroidMap, x, y) {
  const width = asteroidMap[0].length;
  const height = asteroidMap.length;
  const maxSlope = Math.max(width, height);
  let asteroidCoordinates = new Set();

  for (let i = 0; i < maxSlope; i++) {
    for (let j = 1; j < maxSlope; j++) {
      if (!(j > 1 && (i === 0 || i === j))) {
        const slope = { rise: i, run: j };
        countAsteroidsBySlope(asteroidMap, slope, x, y, asteroidCoordinates);
      }
    }
  }

  return asteroidCoordinates.size;
};

const countMaxDetectableAsteroids = function(input) {
  const asteroidMap = input.split('\n');

  return asteroidMap.reduce((maxDetectableAsteroids, row, y) => {
    row.split('').forEach((position, x) => {
      if (position === '#') {
        const currentDetectableAsteroids = countVisibleAsteroids(asteroidMap, x, y);
        maxDetectableAsteroids = Math.max(maxDetectableAsteroids, currentDetectableAsteroids);
      }
    });
    return maxDetectableAsteroids;
  }, 0);
};

module.exports = {
  p1Solution: countMaxDetectableAsteroids,
  p2Solution: () => '???'
};
