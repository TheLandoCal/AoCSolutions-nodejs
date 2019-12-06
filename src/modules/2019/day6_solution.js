const graphOrbits = function(input) {
  const orbiterDirectGraph = input.split('\n').reduce((graph, orbit) => {
    const [orbitee, orbiter] = orbit.split(')');
    graph[orbiter] = orbitee;
    return graph;
  }, {});

  const orbiterIndirectGraph = Object.keys(orbiterDirectGraph).reduce((graph, orbiter) => {
    graph[orbiter] = populateIndirectOrbits(orbiter, orbiterDirectGraph);
    return graph;
  }, {});

  return orbiterIndirectGraph;
};

const populateIndirectOrbits = function(orbiter, graph) {
  let parents = [];
  while (Object.keys(graph).includes(orbiter)) {
    const parent = graph[orbiter];
    parents.push(parent);
    orbiter = parent;
  }

  return parents;
};

const countTotalOrbits = function(input) {
  const graph = graphOrbits(input);
  return Object.values(graph).flat().length;
};

const p2Solution = function(input) {
  return '???';
};

module.exports = {
  p1Solution: countTotalOrbits,
  p2Solution
};
