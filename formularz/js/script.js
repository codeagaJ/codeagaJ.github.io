function pobierzImie(event) {
    event.preventDefault();
    var inputs = document.getElementsByTagName('input');
    var i = 0;
    while(i < inputs.length) {
        if (inputs[i].type!='submit') {
            console.log(inputs[i].value);

        }

        i++;
    }
}

/*value*/




/*var wyslijBtn = document.getElementById('wyslij')
function waliduj() {
    if(document.getElementById('name').value.trim == ""
}

wyslijBtn.addEventListener('click', waliduj);*/