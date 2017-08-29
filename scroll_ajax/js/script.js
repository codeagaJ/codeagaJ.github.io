//$(function(){ 
////
//$.ajax({
//    url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//    dataType: 'json',
//    success: function (resultJSON) {
//       console.log(resultJSON);
//        var pUserID = document.createElement('p');
//        var pUserName = document.createElement('p');
//        var pUserUrl = document.createElement('p');
//        
//        pUserID.innerHTML = 'User ID: ' + resultJSON.userId;
//        pUserName.innerHTML = 'User Name: ' + resultJSON.userName;
//        pUserUrl.innerHTML = 'User url http//: ' + resultJSON.userURL;
//        
//        /*jak wyślić na strone*/
//        document.body.appendChild(pUserID);
//        document.body.appendChild(pUserName);
//        document.body.appendChild(pUserUrl);
//        
//    },
//    
//    onerror: function (msg) {
//        console.log(msg);
//    }
//        
//});
    
    /*$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data) {
        console.log(data);
    });*/

//    });


$(function () {
    $(window).scroll(function () {

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                dataType: 'json',
                success: function(responce) {
                var beginOfData = document.createElement('p');
                var endOfData = document.createElement('p');
                    
                beginOfData.innerHTML = '<br>-----------Begin od data ----------<br><br>';
                endOfData.innerHTML = '<br>-----------Begin od data ----------<br><br>';
                
                    document.body.appendChild(beginOfData);
                    
                   /*responce.forEach(function(element){
                       var pUserId = document.createElement('p');
                       var pUserName = document.createElement('p');
                       var pUserURL = document.createElement('p');
                       
                       pUserId.innerHTML = 'Id' + " " + element.id;
                       pUserName.innerHTML = 'Imię'+ " " + element.username;
                       pUserURL.innerHTML = 'website' + " " +element.website;
                       
                       document.body.appendChild(pUserId);
                       document.body.appendChild(pUserName);
                       document.body.appendChild(pUserURL);
                   }) */
                    for( var i= 0; i<responce.length; i++) {
                        
                    var pUserId = document.createElement('p');
                       var pUserName = document.createElement('p');
                       var pUserURL = document.createElement('p');
                       
                       pUserId.innerHTML = 'Id' + " " + responce[i].id;
                       pUserName.innerHTML = 'Imię'+ " " + responce[i].username;
                       pUserURL.innerHTML = 'website' + " " + responce[i].website;
                       
                       document.body.appendChild(pUserId);
                       document.body.appendChild(pUserName);
                       document.body.appendChild(pUserURL);
                        
                    }
                    
                document.body.appendChild(endOfData);
                
                
                

                },
                onerror: function(error) {
                console.log(error);

                }

            });

        }
    });

});

/*var i =0;
while(i< responce.length) {
var pUserId = document.createElement('p');
     pUserId.innerHTML = 'Id' + " " + responce[i].id;
    document.body.appendChild(pUserId); 
    i++;
                                           
}*/

/*
var i =0;
do {
    if(response.length) > 0 {
      var pUserId = document.createElement('p');
      pUserId.innerHTML = 'Id' + " " + responce[i].id;
      document.body.appendChild(pUserId); 
        
    }
    i++;
}while(i< response.length);

document.body.appendChild(endOfData);
*/

