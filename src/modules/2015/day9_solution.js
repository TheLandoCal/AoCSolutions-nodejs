const permutations = function(sequence, excludeReverse = false) {
  let result = [];

  // Based on Heap's Algorithm
  // Wikipedia: https://en.wikipedia.org/wiki/Heap%27s_algorithm
  // Original Article: https://academic.oup.com/comjnl/article/6/3/293/360213
  const generate = (idx, values) => {
    if (idx == 1) {
      // Only get forward permutation if excludeReverse is flagged
      // Example: Skip 3, 2, 1 since 1, 2, 3 will be equivalent
      if (!excludeReverse || (excludeReverse && values[0] < values[values.length - 1])) {
        result.push([...values]); // Use spread notation because values are not immutable
      }
      return values;
    }

    generate(idx - 1, values);

    for (let i = 0; i < idx - 1; i++) {
      const swapIdx = idx % 2 == 0 ? i : 0;
      [values[swapIdx], values[idx - 1]] = [values[idx - 1], values[swapIdx]];
      generate(idx - 1, values);
    }
  };

  generate(sequence.length, sequence);

  return result;
};

const getRoutes = function(rawData) {
  return rawData.split('\n').map(path => {
    const pathData = path.split(' ');
    return { source: pathData[0], destination: pathData[2], distance: parseInt(pathData[4]) };
  });
};

const getListOfCities = function(routes) {
  return Array.from(
    routes.reduce((acc, route) => {
      Object.entries(route).forEach(([key, value]) => {
        if (key === 'source' || key === 'destination') {
          acc.add(value);
        }
      });
      return acc;
    }, new Set())
  );
};

const getTotalDistance = function(path, routes) {
    let distance = 0;
    for (let i = 1; i < path.length; i++) {
      distance += routes.find(
        route =>
          (route.source === path[i - 1] && route.destination === path[i]) ||
          (route.source === path[i] && route.destination === path[i - 1])
      ).distance;
    }
    return distance;
};

const calculateShortestRoute = function(input) {
  const routes = getRoutes(input);
  const cities = getListOfCities(routes);
  const paths = permutations(cities, true);

  return paths.reduce((shortestRoute, path) => {
    const totalDistance = getTotalDistance(path, routes);
    return totalDistance < shortestRoute ? totalDistance : shortestRoute;
  }, Number.MAX_SAFE_INTEGER);
};

const calculateLongestRoute = function(input) {
  const routes = getRoutes(input);
  const cities = getListOfCities(routes);
  const allPaths = permutations(cities, true);

  return allPaths.reduce((shortestRoute, path) => {
    const totalDistance = getTotalDistance(path, routes);
    return totalDistance > shortestRoute ? totalDistance : shortestRoute;
  }, Number.MIN_SAFE_INTEGER);
};

module.exports = {
  permutations,
  p1Solution: calculateShortestRoute,
  p2Solution: calculateLongestRoute
};
