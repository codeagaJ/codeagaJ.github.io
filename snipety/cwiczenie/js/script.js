//var vat = 20;
//var priceBruttoApple = 45;
//var priceBruttoCarot = 44;
//var calulateVat = (1+vat * 1/100);
//
//
//var priceNettoApple = priceBruttoApple * calulateVat;
//var priceNettoCarot = priceBruttoCarot * calulateVat;
//
//
//alert(priceNettoCarot);

//var kursyProgramowania = document.getElementById("kursyProgramowania");

//dodaje do id=kursyProgramowania .color wszystkie li są czerwone
//alert(kursyProgramowania.setAttribute("class", "color"));

//wyszukuje po id=kursyProgramowania
//alert(kursyProgramowania.getAttribute("id"));

//wypisuje text bez tagow
//alert(kursyProgramowania.textContent);

//wypisuje text razem z tagami
//alert(kursyProgramowania.innerHTML);

//dostajemy się do 2 elementu kursyProgramowania i dajemy mu .color
//kursyProgramowania.childNodes[3].setAttribute("class", "color");
//alert(kursyProgramowania.childNodes[3].setAttribute("class", "color"));

//dostajemy się do 1 elementu kursyProgramowania i zmieniamy tekst
//kursyProgramowania.childNodes[1].textContent = "dopisny tekst";
//alert(kursyProgramowania.childNodes[1].textContent);


//kursyProgramowania.childNodes[1].nextSibling.nodeValue = "dopisny tekst";

//wybieram 3 element kursyProgramowania potem wracam do rodzica i wybieram go po id
//alert(kursyProgramowania.childNodes[3].parentNode.getAttribute("id"));

//queryselector  wybiera pierwszy napotkany li
//var kursyProgramowania = document.querySelector("#kursyProgramowania li");
//alert(kursyProgramowania.innerHTML);

//var kursyProgramowania = document.querySelector("#kursyProgramowania li:nth-child(3)");
//alert(kursyProgramowania.innerHTML);


//querselectorall wybiera po kolei mamy dostęp do tablicy
//var kursyProgramowania = document.querySelectorAll("#kursyProgramowania li");
//alert(kursyProgramowania[3].innerHTML);

//zmiana koloru dla 1 elememntu za pomocą queryseclectorall
//var kursyProgramowania = document.querySelectorAll("#kursyProgramowania li");
//kursyProgramowania[1].style.color= "red";

//zmieniamy wszystkim li kolor za pomocą pętli przy QERYSELEKTOR TRZBA WYBIERAĆ SELEKTOR # 

//var kursyProgramowania = document.querySelectorAll("#kursyProgramowania li");
//
//for(var i =0; i < kursyProgramowania.length; i++ ) {
//    
//    kursyProgramowania[i].style.color = "orange";
//}
//tworzenie nowego elementu

//var x = document.createElement("p");
//x.style.color = "red";
//x.className ="paragraph";
//x.innerHTML = "testowy text"
//var body = document.querySelector("body");
//var newChildNode = body.appendChild(x);
//usuwanie tegoelementu
//var paragraph = document.querySelector(.paragraph);
//paragraph.parentNode.removeChild(paragraph);

//tworzenie znowu p inny sposob

//var newElement = document.createElement("p");
//
//newElement.style.color = "red";
//newElement.className = "ona";
////x.innerHTML =  "test";
//
//var text = document.createTextNode("This is a text");
//newElement.appendChild(text);
//var element = document.getElementById("container");
//element.appendChild(newElement);


//tworzenie eleemntu jeszcze inaczej ale fajnie
var listItem = document.createElement("li");
listItem.textContent = "this is create element";
var list = document.getElementById("kursyProgramowania");
//na końcu standardowo i na początku listy drugi przykład
//list.appendChild(listItem);
list.insertBefore(listItem, list.firstElementChild);
//zastąpienie listItem nowym elementem 
var replaceElement = document.createElement("li");
replaceElement.textContent = "I am replacing element";
list.replaceChild(replaceElement,listItem);


//var produkty = ["kot","pies","biedronka", "wrona" ];

//produkty[4] = "niedzwiedź";
//alert(produkty.length);

//for(var i=0; i<produkty.length;i++) {
//    alert(produkty[i]);
//}


//wybieranie elementów korzystając z tablicy
//var ul = document.getElementById("kursyProgramowania");
//var li = ul.getElementsByTagName("li");
//alert(li[4].innerHTML);


//var owoce = ["apple", "strawbery", "kiwi", "orange", "banana"]
//
//var temp =[3,5,-5,23,78];



//owoce = owoce.join("*");
//var tab = document.getElementById("container").innerHTML = temp.sort(function(a,b) {return b-a});
//var tab = document.getElementById("container").innerHTML = owoce.join("<br>");

//var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");
//
//for(var property in kursyProgramowania) {
//     alert(kursyProgramowania[property].innerHTML);
//}



