$(function(){ 
//
$.ajax({
    url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
    dataType: 'json',
    success: function (resultJSON) {
       console.log(resultJSON);
        var pUserID = document.createElement('p');
        var pUserName = document.createElement('p');
        var pUserUrl = document.createElement('p');
        
        pUserID.innerHTML = 'User ID: ' + resultJSON.userId;
        pUserName.innerHTML = 'User Name: ' + resultJSON.userName;
        pUserUrl.innerHTML = 'User url http//: ' + resultJSON.userURL;
        
        /*jak wyślić na strone*/
        document.body.appendChild(pUserID);
        document.body.appendChild(pUserName);
        document.body.appendChild(pUserUrl);
        
    },
    
    onerror: function (msg) {
        console.log(msg);
    }
        
});
    
    /*$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data) {
        console.log(data);
    });*/

    });