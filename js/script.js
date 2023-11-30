const game = document.querySelector(".gioca");
game.addEventListener("click", function(){

    document.getElementById("game").innerHTML="";
    
    let number = 1

    for(let i = 0; i < 10; i++){
        document.getElementById("game").innerHTML += "<div id=\"row-" + (i+1) + "\" class=\"d-flex w-1000\"></div>";
        for(let j = 0; j < 10; j++){
            document.getElementById(("row-"+(i+1))).innerHTML += "<div  class=\"square\">" + number + "</div>";
            number++;
        }
    }
    

})