
let input = document.getElementById('inputBox');

let calculate = (number) =>{
    input.value += number;
}
let equal = () =>{
    try{
        input.value = eval(input.value);
    }
    catch(error){
        alert("Enter valid input");
    }
}
function clr(){
    input.value = "" ;
}
function del(){
    input.value = input.value.slice(0, -1) ;
}

