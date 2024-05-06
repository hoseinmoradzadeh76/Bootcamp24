let result = document.getElementById("result");
let currentInput ='';


function display(value) {
    currentInput += value;
    result.value=currentInput;
}
function equal(){
    try{
        result.value=eval(currentInput);

    }catch(error){
        result.value='error';
        currentInput='';


    }
}
function clearscreen(){
    result.value='';
    currentInput='';
}