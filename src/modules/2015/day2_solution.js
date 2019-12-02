var getSurfaceArea = function(l, w, h) {
    return (2 * l * w) + (2 * w * h) + (2 * h * l);
};

var getSmallestArea = function(l, w, h) {
    return Math.min(l * w, w * h, l * h);
};

var getCubicVolume = function(l, w, h) {
    return l * w * h;
};

var getSmallestPerimeter = function(l, w, h) {
    return Math.min(2 * l + 2 * w, 2 * w + 2 * h, 2 * l + 2 * h);
};

var getTotalWrappingPaperArea = function(input) {
    var dimensions = input.split('\n');

    var totalArea = 0;

    for (var i = 0, len = dimensions.length; i < len; i++) {
        var boxDimensions = dimensions[i].split('x');
        var l = boxDimensions[0],
            w = boxDimensions[1],
            h = boxDimensions[2];

        totalArea += getSurfaceArea(l, w, h) + getSmallestArea(l, w, h);

    }

    return totalArea;
};

var getTotalRibbonLength = function(input) {
    var dimensions = input.split('\n');

    var totalLength = 0;

    for (var i = 0, len = dimensions.length; i < len; i++) {
        var boxDimensions = dimensions[i].split('x');
        var l = boxDimensions[0],
            w = boxDimensions[1],
            h = boxDimensions[2];

        totalLength += getCubicVolume(l, w, h) + getSmallestPerimeter(l, w, h);
    }

    return totalLength;
};

module.exports = {
    p1Solution: getTotalWrappingPaperArea,
    p2Solution: getTotalRibbonLength
};