var solutions = require('./day10_solution'),
  countMaxDetectableAsteroids = solutions.p1Solution,
  tbd2 = solutions.p2Solution;

describe('#countMaxDetectableAsteroids', function() {
  it('Tests that the result from initial example is 8', function() {
    const input = '.#..#\n.....\n#####\n....#\n...##';
    countMaxDetectableAsteroids(input).should.equal(8);
  });

  it('Tests that the result from larger example 1 is 33', function() {
    const input = '......#.#.\n#..#.#....\n..#######.\n.#.#.###..\n.#..#.....\n..#....#.#\n#..#....#.\n.##.#..###\n##...#..#.\n.#....####';
    countMaxDetectableAsteroids(input).should.equal(33);
  });

  it('Tests that the result from larger example 2 is 35', function() {
    const input = '#.#...#.#.\n.###....#.\n.#....#...\n##.#.#.#.#\n....#.#.#.\n.##..###.#\n..#...##..\n..##....##\n......#...\n.####.###.';
    countMaxDetectableAsteroids(input).should.equal(35);
  });

  it('Tests that the result from larger example 3 is 41', function() {
    const input = '.#..#..###\n####.###.#\n....###.#.\n..###.##.#\n##.##.#.#.\n....###..#\n..#.#..#.#\n#..#.#.###\n.##...##.#\n.....#.#..';
    countMaxDetectableAsteroids(input).should.equal(41);
  });

  it('Tests that the result from larger example 4 is 210', function() {
    const input = '.#..##.###...#######\n##.############..##.\n.#.######.########.#\n.###.#######.####.#.\n#####.##.#.##.###.##\n..#####..#.#########\n####################\n#.####....###.#.#.##\n##.#################\n#####.##.###..####..\n..######..##.#######\n####.##.####...##..#\n.#####..#.######.###\n##...#.##########...\n#.##########.#######\n.####.#.###.###.#.##\n....##.##.###..#####\n.#.#.###########.###\n#.#.#.#####.####.###\n###.##.####.##.#..##';
    countMaxDetectableAsteroids(input).should.equal(210);
  });
});


describe('#tbd2', function() {
  it('Tests that the result from some input is some value', function() {
    tbd2('some input').should.equal('???');
  });
});
