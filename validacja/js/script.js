//var pierwszaZgoda = document.getElementById('data');
//var wszystkieZgody = document.getElementById('data2');
//var drugaZgoda = document.querySelectorAll('input[type=checkbox]');
//
//function checkboxState() {
//       
//if(pierwszaZgoda.checked = this.checked  ||  drugaZgoda.checked = this.checked)  { 
//        return true;
//}else if(pierwszaZgoda.disable = this.checked || drugaZgoda.disable = this.checked){
//    return false;
//    
//    }
//}
//wszystkieZgody.addEventListener("onchange",checkboxState);

var wyslijBtn = document.getElementById('wyslij')
var wszystkieZgody = document.getElementById('wszystkieZgody');
var zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
var zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');

function stanChecbox() {
    
        zgodaMarketingowa1.checked = this.checked;
        zgodaMarketingowa2.checked = this.checked;
   
}



function waliduj() {
    if(document.getElementById('name').value.trim() == ""){
       alert('wypełnij mnie');
}
    if(document.getElementById('email').value.trim() == ""){
       alert('wypełnij mnie');
    }
    if (!zgodaMarketingowa1.checked) {
        alert('zaznacz pierwszą zgodę');
    }
}

wyslijBtn.addEventListener('click', waliduj);
wszystkieZgody.addEventListener('change', stanChecbox);


    
    
    

//validateForm(e) {
//    var btnInput = document.querySelectorAll('input[type=text]');
//    for(var i =0; i<btnInput.length; i++);
//    
//    if{}
//} 