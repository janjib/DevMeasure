

var afterConversion;

function convert(){
    var inputUnit = document.querySelector(".from-option").value
var toUnit = document.querySelector(".to-option").value
var inputValue = document.querySelector(".from-input-value").value
var outputValue = document.querySelector(".to-output-value")

    const valueIndex = {
        "rem" : {"pixel" : 16,"point":12},
        "pixel" : {"rem" : 1/16,"point":0.75},
        "point" : {"pixel" : 4/3,"rem":1/12}
    }
    
    const conversionValue = valueIndex[inputUnit][toUnit];
    console.log(conversionValue);
    var afterConversion = inputValue*conversionValue;
    console.log(afterConversion)
    if(toUnit === "rem") {
        outputValue.value = afterConversion + "rem " ;
    }
    else if(toUnit === "pixel"){
        outputValue.value = afterConversion + "px";
    }
    else if(toUnit === "point"){
        outputValue.value = afterConversion + "pt";
    }
   
}

function copy(){
    var outputValue = document.querySelector(".to-output-value")
    var copyOutput = outputValue;
    copyOutput.select()
    document.execCommand("Copy")
}

var options =
            {
                animation : true,
            };
            
            var element = document.getElementById( 'EpicButton' );
            
            var tooltip = new bootstrap.Tooltip( element, options );



