function clearform(){
    let string = "";
    document.forms['myForm'].value = string;
}
function clearerrors(){
    errors = document.getElementsByClassName("formerror");
    for(let item of errors){
        item.innerHTML = "";
    }
    document.getElementById("fphone").style.border = "2px solid black";
}
function seterror(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateform(){
    let returnval = true;
    clearerrors();

    let rb1 = document.getElementById("fmale");
    let rb2 = document.getElementById("ffemale");
    let rb3 = document.getElementById("fother");
    if(rb1.checked == true){
         returnval = true;
    }
    else if(rb2.checked == true){
        returnval = true;
    }
    else{
        seterror("gender","*Please select a value");
        returnval = false;
    }

    let phone = document.getElementById("fphone").value;
    if(phone.length != 10 && Number){
        seterror("phone","*Phone number should be 10 digit number");
        document.getElementById("fphone").style.border = "1px solid red";
        returnval = false;
    }
    
    return returnval;
}