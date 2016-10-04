"use strict";
var $ = function(id){
    return document.getElementById(id);
};
var myError = document.getElementById("errorMsg");

function checkFirst(){
    var fname = $("first").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if(!testName.test(fname)){
        myError.innerHTML="Names should only include text characters and do spaces";
        $("first").value = "";
    }
    else{
        myError.innerHTML = "First name meets criteria";
    }
}

function checkLast(){
    var lname = $("last").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if(!testName.test(lname)){
        myError.innerHTML = "Names should only include text characters and no spaces";
        $("last").value = "";
    }else{
        myError.innerHTML = "Last name meets criteria";
    }
}

function checkAddress(){
    var myAddress = $("address").value;
    var testAddress = new RegExp("\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}");
    if(!testAddress.test(myAddress)){
        myError.innerHTML = "Please fill in an address";
        $("address").value = "";
    }else{
        myError.innerHTML = "Address meets criteria";
    }
}

function checkCity(){
    var myCity = $("city").value;
    var testCity = new RegExp("^[a-zA-Z]+$");
    if(!testCity.test(myCity)){
        myError.innerHTML = "City should only include text characters";
        $("city").value = "";
    }else{
        myError.innerHTML = "City meets criteria";
    }
}

function checkState(){
    var myState = $("state").value;
    var testState = new RegExp("^((AL)|(AK)|(AS)|(AZ)|(AR)|(CA)|(CO)|(CT)|(DE)|(DC)|(FM)|(FL)|(GA)|(GU)|(HI)|(ID)|(IL)|(IN)|(IA)|(KS)|(KY)|(LA)|(ME)|(MH)|(MD)|(MA)|(MI)|(MN)|(MS)|(MO)|(MT)|(NE)|(NV)|(NH)|(NJ)|(NM)|(NY)|(NC)|(ND)|(MP)|(OH)|(OK)|(OR)|(PW)|(PA)|(PR)|(RI)|(SC)|(SD)|(TN)|(TX)|(UT)|(VT)|(VI)|(VA)|(WA)|(WV)|(WI)|(WY))$");
    if(!testState.test(myState)){
        myError.innerHTML = "State should be a two letter abbreviation, uppercase";
        $("state").value = "";
    }else{
        myError.innerHTML = "State meets criteria";
    }
}

function checkZip(){
    var myZip = $("zip").value;
    var testZip = new RegExp("^\d{5}(-\d{4})?$");
    if(!testZip.test(myZip)){
        myError.innerHTML = "Zip code should be entered as five or nine numbers";
        $("zip").value = "";
    }else{
        myError.innerHTML = "Zip code meets criteria";
    }
}

function checkEmail(){
    var myEmail = $("email").value;
    var testEmail = new RegExp(".+\@.+\..+");
    if(!testEmail.test(myEmail)){
        myError.innerHTML = "That is not a proper email, it needs an @ and a domain";
        $("email").value = "";
    }
    else{
        myError.innerHTML = "Email meets requirements";
    }
}

function checkPhone() {
    var phone = $("phone").value;
    var testPhone = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if (!testPhone.test(phone)) {
        myError.innerHTML = "Please use the format (555) 555-5555'";
        $("phone").value = "";
    }
    else {
        myError.innerHTML = "Phone number meets criteria";
    }
}
    function checkCell() {
        var cell = $("cell").value;
        var testCell = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
        if (!testCell.test(cell)) {
            myError.innerHTML = "Please use the format (555) 555-5555'";
            $("cell").value = "";
        }
        else {
            myError.innerHTML = "Cell number meets criteria";
        }
    }
