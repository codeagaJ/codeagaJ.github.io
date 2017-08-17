window.onload = function() {



    window.onscroll = function() {

        var test = document.getElementById("test");

        var toTopButton = document.getElementById("toTopButton");

        var yScrollAxis = window.pageYOffset;

        if(yScrollAxis > 300)

          toTopButton.style.display = "block";

         else 
            toTopButton.style.display = "none";

        test.innerHTML = window.yScrollAxis
    }
    toTopButton.onclick = function() {

        window.scrollBy(0, -1 * window.pageYOffset)
    }
};
