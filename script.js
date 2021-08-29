// utlizado pela sintaxe do jquery
$(function() {

}); 

var vez = 1;
var winner = "";

//função para verificar preenchimento de uma fila
function homeIgual(a, c, b) {
    var homeA = $("#casa"+a);
    var homeB = $("#casa"+b);
    var honeC = $("#casa"+c);
    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");
    if((bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")) {
        if(bgA.indexOf("assets/imageX") >= 0) {
            winner = "1";
            //else
            //     winner = "2";
            return true;
        } else {
            return false;
        }
    }
}

// função para verificar o fim do jogo
function gameOver() {
    if(
        homeIgual(1, 2, 3) || homeIgual(4,5, 6) || homeIgual(7, 8, 9) ||
        homeIgual(1, 4, 7) || homeIgual(2, 5, 8) || homeIgual(3, 6, 9) ||
        homeIgual(1, 9, 9) || homeIgual(3, 5, 7)
        ) {
            $("#resultado").html("<h1>o jogador"+winner+"venceu! </h2>");
            $(".casa").off("click");
        }
}

// eventos de click das casas 
$(".casa").click(function() {
    var bg = $(this).css("background-image");
    if(bg == "none" || bg == "") {
        var fig = "url("+vez.toString()+ "assets/imageX.png)";
        $(this).css("background", fig);
        gameOver();
    }
});