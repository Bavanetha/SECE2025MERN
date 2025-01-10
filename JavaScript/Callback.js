//callback
function submitForm(submit,email,isValid){
    if(isValid(email)){
        console.log(submit);
    }
    else{
        console.log("Invalid Email Id");
    }
}

function Validations(email){
    var regx = new RegExp("^[a-zA-Z0-9_.]+@[a-zA-Z0-9.]+$");
    console.log("Form Validation successful");
    if (!regx.test(email)) {
        return false;
    }
    return true; 
}

submitForm("Form submitted successfully","bavanet/ha@gamil.com", Validations);
