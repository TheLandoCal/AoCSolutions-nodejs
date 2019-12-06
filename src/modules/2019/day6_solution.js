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

const countOrbitalTransfers = function(input) {
  const graph = graphOrbits(input);

  const you = new Set(graph['YOU']);
  const san = new Set(graph['SAN']);

  const youPath = new Set([...you].filter(x => !san.has(x)));
  const sanPath = new Set([...san].filter(x => !you.has(x)));

  return [...youPath, ...sanPath].length;
};

module.exports = {
  p1Solution: countTotalOrbits,
  p2Solution: countOrbitalTransfers
};
