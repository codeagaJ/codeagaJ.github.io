var box = document.getElementById('display');

function textToScreen (x) {
   box.value += x;
    if(x === 'C') {
        box.value = ' ';
    }
};

function result () {
    
    x=box.value;
    x=eval(x);
    box.value = x;
};