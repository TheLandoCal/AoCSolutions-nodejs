const getLayers = function(input, width, height) {
  const layerSize = width * height;
  return splitListByDimension(input, layerSize);
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
  return layer.match(digitPattern).length;
};

const getTopVisiblePixel = function(pixel) {
  const excludeTransparentPixelPattern = new RegExp(/[^2]/);
  return pixel.match(excludeTransparentPixelPattern)[0];
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

const getVisiblePixels = function(layers, size) {
  let pixels = [];
  for (let i = 0; i < size; i++) {
    const pixelList = layers.reduce((pixel, layer) => {
      pixel += layer[i];
      return pixel;
    }, '');
    pixels.push(getTopVisiblePixel(pixelList) == 0 ? '█' : ' ');
  }

  return pixels;
};

const printImage = function(input, width, height) {
  const layers = getLayers(input, width, height);
  const layerSize = width * height;
  let pixels = getVisiblePixels(layers, layerSize);

  const border = Array(width + 2).fill('-').join('');
  console.log(border);
  let line = '|';
  pixels.forEach((pixel, idx) => {
    if (idx != 0 && idx % width === 0) {
      console.log(line + '|');
      line = '|';
    }
    line += pixel;
  });
  console.log(line + '|');
  console.log(border);
};

const printImageFor25x6 = function(input) {
  const width = 25;
  const height = 6;
  console.log('Part 2: The puzzle answer is: ');
  printImage(input, width, height);
  return 'available in the console log';
};

module.exports = {
  p1Solution: calculateFewestZerosProductFor25x6,
  p2Solution: printImageFor25x6
};
