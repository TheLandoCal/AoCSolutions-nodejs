var findCircuit = function(key, circuits) {
    if (Number.isInteger(circuits[key])) {
        circuits[key] = circuits[key]; // Dummy expression
    } else if (circuits[key].startsWith('NOT')) {
        var result1 = circuits[key].split(' '),
            wire = result1[1];
        circuits[key] = ~findCircuit(wire, circuits)[0];
    } else if (circuits[key].indexOf(' ') === -1) {
        circuits[key] = findCircuit(circuits[key], circuits)[0];
    } else {
        var result2 = circuits[key].split(' '),
            wire1 = result2[0],
            bitwiseOperator = result2[1],
            wire2 = result2[2];

        switch (bitwiseOperator) {
            case 'AND':
                circuits[key] = (isNaN(wire1) ? findCircuit(wire1, circuits)[0] : parseInt(wire1)) & (isNaN(wire2) ? findCircuit(wire2, circuits)[0] : parseInt(wire2));
                break;
            case 'OR':
                circuits[key] = (isNaN(wire1) ? findCircuit(wire1, circuits)[0] : parseInt(wire1)) | (isNaN(wire2) ? findCircuit(wire2, circuits)[0] : parseInt(wire2));
                break;
            case 'RSHIFT':
                circuits[key] = (isNaN(wire1) ? findCircuit(wire1, circuits)[0] : parseInt(wire1)) >> (isNaN(wire2) ? findCircuit(wire2, circuits)[0] : parseInt(wire2));
                break;
            case 'LSHIFT':
                circuits[key] = (isNaN(wire1) ? findCircuit(wire1, circuits)[0] : parseInt(wire1)) << (isNaN(wire2) ? findCircuit(wire2, circuits)[0] : parseInt(wire2));
                break;
        }
    }
    return [circuits[key], circuits];
};

var evaluateCircuits = function(circuits) {
    Object.keys(circuits).forEach(function(key) {
        var foundCircuit = findCircuit(key, circuits);
        circuits = foundCircuit[1];
        circuits[key] = foundCircuit[0];
        while (circuits[key] < 0) {
            circuits[key] = 65535 + circuits[key] + 1; // Convert to 16-bit
        }
    });

    return circuits;
};

var getSignal = function(input) {
    var instructions = input.split('\n'),
        circuits = [],
        wantedWire = 'a'; // 'd' for testing, 'a' for Part 1

    for (var i = 0; i < instructions.length; i++) {
        var result = instructions[i].split(' -> '),
            signal = result[0],
            wire = result[1];

        circuits[wire] = isNaN(signal) ? signal : parseInt(signal);
    }

    return evaluateCircuits(circuits)[wantedWire];
};

var manualOverride = function(input) {
    // Now, take the signal you got on wire a,
    var signalA = getSignal(input);

    // override wire b to that signal,
    var instructions = input.split('\n'),
        circuits = [],
        wantedWire = 'a';

    for (var i = 0; i < instructions.length; i++) {
        var result = instructions[i].split(' -> '),
            signal = result[0],
            wire = result[1];

        circuits[wire] = isNaN(signal) ? signal : parseInt(signal);
    }

    /*jshint -W069 */
    /*Disable Warning Justification:
        Using bracket notation so Google Closure Compiler 
        ADVANCED_OPTIMIZATIONS will keep the original property names. */
    circuits['b'] = signalA;
    /*jshint +W069 */

    // and reset the other wires (including wire a).
    return evaluateCircuits(circuits)[wantedWire];

};

module.exports = {
    p1Solution: getSignal,
    p2Solution: manualOverride
};