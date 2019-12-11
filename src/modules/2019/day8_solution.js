const getLayers = function(input, width, height) {
  const layerSize = width * height;
  const layers = splitListByDimension(input, layerSize);

  return layers.map(layer => {
    return splitListByDimension(layer, height);
  });
};

const splitListByDimension = function(input, dimension) {
  const layerPattern = new RegExp('(\\d{' + dimension + '})');
  return input.split(layerPattern).filter(Boolean);
};

const findLayerWithFewestZeros = function(layers) {
  return layers.reduce(
    (fewestZerosLayer, layer) => {
      const numZeros = getDigitCount(layer, 0);
      if (numZeros < fewestZerosLayer.count) {
        fewestZerosLayer = { count: numZeros, layer };
      }

      return fewestZerosLayer;
    },
    { count: Number.MAX_SAFE_INTEGER, layer: [] }
  ).layer;
};

const getDigitCount = function(layer, digit) {
  const digitPattern = new RegExp(digit, 'g');
  return layer.join('').match(digitPattern).length;
};

const calculateOnesAndTwosProductInLayerWithFewestZeros = function(input, width, height) {
  const layers = getLayers(input, width, height);
  const fewestZerosLayer = findLayerWithFewestZeros(layers);
  return getDigitCount(fewestZerosLayer, 1) * getDigitCount(fewestZerosLayer, 2);
};

const calculateFewestZerosProductFor25x6 = function(input) {
  const width = 25;
  const height = 6;
  return calculateOnesAndTwosProductInLayerWithFewestZeros(input, width, height);
};

module.exports = {
  calculateOnesAndTwosProductInLayerWithFewestZeros,
  p1Solution: calculateFewestZerosProductFor25x6,
  p2Solution: () => '???'
};
