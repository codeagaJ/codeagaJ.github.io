$(function () {
    $('#download').click(function () {
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: 'json',
            success: function (resultData) {
                //               console.log(resultData);
                
                var data = document.createElement('div');
                var atribute = document.createAttribute('id');
                atribute.value = 'dane-programisty';
                
                data.innerHTML = 'Dane programisty:' + ' <br>' + 'Imię:' + '  ' + resultData.imie + ' <br> ' +'Nazwisko:' + '  ' + resultData.nazwisko + '<br>' + 'Zawód:' + ' ' + resultData.zawod + '<br>' + 'Firma:'+ ' ' + resultData.firma;
 
                /*dodaj atrybut do div, dodaj div do body */
                data.setAttributeNode(atribute);
                document.body.appendChild(data);
                
                /*Pobranie po id przycisk pobierz dane i wyświetl nowy div z danymi pod przyciskiem*/
                var btn = document.getElementById('download');
                btn.after(data);

            },

            onerror: function (msg) {
                console.log(msg);
            }


        });

    });
});