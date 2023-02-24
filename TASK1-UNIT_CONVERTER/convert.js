
const conversionFactors = {
    meter: {
      meter: 1,
      kilometer: 0.001,
      centimeter: 100,
      nanometer: 1000000000,
      micrometer: 1000000,
      inch: 39.37,
      foot: 3.281,
      yard: 1.094,
      mile: 0.000621

    },
    kilometer: {
      meter: 1000,
      kilometer: 1,
      centimeter: 100000,
      nanometer: 1e+12,
      micrometer: 1000000000,
      inch: 39370.1,
      foot: 3280.84,
      yard: 1093.61,
      mile: 0.621371
    },
    centimeter: {
      meter: 0.01,
      kilometer: 0.00001,
      centimeter: 1,
      nanometer: 1e+7,
      micrometer: 10000,
      inch: 0.393701,
      foot: 0.0328084,
      yard: 0.0109361,
      mile: 0.00000621371
    },
    nanometer: {
        meter: 0.000000001,
        kilometer: 1e-12,
        centimeter: 0.0000001,
        nanometer: 1,
        micrometer: 0.001,
        inch: 3.937e-8,
        foot: 3.2808e-9,
        yard: 1.0936e-9,
        mile: 6.2137e-13, 
    },
    micrometer:{
        meter:1e-6,
        kilometer: 1e-9,
        centimeter: 0.0001,
        nanometer: 1000,
        micrometer: 1,
        inch: 3.937e-5,
        foot: 3.2808e-6,
        yard: 1.0936e-6,
        mile: 6.2137e-10, 
    },
    inch: {
      meter: 0.0254,
      kilometer: 0.0000254,
      centimeter: 2.54,
      nanometer: 25400000,
      micrometer: 25400,
      inch: 1,
      foot: 0.0833333,
      yard: 0.0277778,
      mile: 0.0000157828
    },
    foot: {
        meter: 0.3048,
        kilometer: 0.0003048,
        centimeter: 30.48,
        nanometer: 304800000,
        micrometer: 304800,
        inch: 12,
        foot: 1,
        yard: 0.333333,
        mile: 0.000189394
      },
      yard: {
        meter: 0.9144,
        kilometer: 0.0009144,
        centimeter: 91.44,
        nanometer: 914400000,
        micrometer: 914400,
        inch: 36,
        foot: 3,
        yard: 1,
        mile: 0.000568182
      },
      mile: {
        meter: 1609.34,
        kilometer: 1.60934,
        centimeter: 160934,
        nanometer: 1.609e+12,
        micrometer: 1.609e+9,
        inch: 63360,
        foot: 5280,
        yard: 1760,
        mile: 1
      }
    };
    const inputElement = document.getElementById("input");
    const inputUnitElement = document.getElementById("from");
    const outputElement = document.getElementById("result");
    const outputUnitElement = document.getElementById("to");
    const convertButton = document.getElementById("convert-btn");
    function convert() {
      const inputValue = parseFloat(inputElement.value);
      const inputUnit = inputUnitElement.value;
      const outputUnit = outputUnitElement.value;
      const outputValue = inputValue * conversionFactors[inputUnit][outputUnit];
      outputElement.value = outputValue;
    }
    
    // Attach event listener to button
     convertButton.addEventListener("click", convert);
    
