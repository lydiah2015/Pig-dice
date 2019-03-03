function Player(){
	this.name="";
	this.totalScore=0;
	this.sessionScore=0;
	this.winscore=0;
}

// roll method
Player.prototype.roll= function(){

	var rolledDice=Math.floor(Math.random()*6+1);
	if(rolledDice>1){
		this.sessionScore+=rolledDice;
		if((this.sessionScore+this.totalScore)>=this.winscore){
            // declare user as winner
			return 0;
		}
	}
	else{
		this.sessionScore=0;
	}
	return rolledDice;
}

// hold method
Player.prototype.hold=function(){
	this.totalScore+=this.sessionScore;
	this.sessionScore=0;
	return this.totalScore;
}

var playerOne = new Player();
var playerTwo = new Player(); 

var startGame = function(playerOneName,playerTwoName,winScore){
    playerOne.name=playerOneName;
    playerTwo.name=playerTwoName;
    playerOne.winscore=playerTwo.winscore=winScore;
    $(".player-registration").hide();
    $(".player1name").text(playerOne.name);
    $(".player2name").text(playerTwo.name);
    $(".game-play").show();

}

$("#p1-roll-button").click(
    function(event){
        var rolledDice=playerOne.roll();
        $(".p1-rolled").text("You rolled:"+rolledDice);
        if(rolledDice>1){

        }
        else{

        }
    }
)

$("#p2-roll-button").click(
    function(event){
        var rolledDice=playerTwo.roll();
        $(".p2-rolled").text("You rolled:"+rolledDice);
        if(rolledDice>1){

        }
        else{

        }
    }
)

$("#p1-hold-button").click(
    function(event){
        playerOne.hold();
        $("#panel-player1").addClass("panel-disable")
        $("#p1-roll-button").addClass("button-disable");
        $("#p1-hold-button").addClass("button-disable");
        $("#panel-player2").removeClass("panel-disable")
        $("#p2-roll-button").removeClass("button-disable");
        $("#p2-hold-button").removeClass("button-disable");
    }
)

$("#p2-hold-button").click(
    function(event){
        playerTwo.hold();
        $("#panel-player2").addClass("panel-disable");
        $("#p2-roll-button").addClass("button-disable");
        $("#p2-hold-button").addClass("button-disable");
        $("#panel-player1").removeClass("panel-disable")
        $("#p1-roll-button").removeClass("button-disable");
        $("#p1-hold-button").removeClass("button-disable");
    }
)

$("#form_players").submit(
    function(event){
        event.preventDefault();
        var playerOneName = $("#player_one_name").val();
        var playerTwoName = $("#player_two_name").val();
        var winScore = $("#winscore").val();
        return startGame(playerOneName,playerTwoName,winScore);
    }
)

$(document).ready(
    function(){
        $(".game-play").hide();
    }
)