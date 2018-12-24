
var vader = {
  name: "vader",
  hp: 200,
  attack: 20,
  isChosen: false,
  isDefender: false,
}

var kylo = {
  name: "kylo",
  hp: 200,
  attack: 20,
  isChosen: false,
  isDefender: false,
}

var luke = {
  name: "luke",
  hp: 200,
  attack: 20,
  isChosen: false,
  isDefender: false,
}

var chewbacca = {
  name: "chewbacca",
  hp: 200,
  attack: 20,
  isChosen: false,
  isDefender: false,
}

var character = [vader,kylo,luke,chewbacca];
var strike;
var defender;
var characterDefeated = 0;

// Reset Game
function reset(){
  $(".characterList,.title3 ").show();
  $(".available-character,.defender-character,.chosen-character").hide();
  for( var i = 0; i < character.length; i++){
    character[i].isChosen = false; 
    character[i].isDefender = false; 
    character[i].attack = 0;
    character[i].hp = 0;
    $(".load").text(0);
    characterDefeated = 0;
  }
}
// Hide all list of character
$(".available-character, .defender-character, .chosen-character").hide();

// Move list to chosen and select your ennemies
//Vader
$( "#list1" ).on( "click", function() {
  $(".chosen-character, .available-character,#chose1, #avai2, #avai3, #avai4").show();
  $( ".title1, #chose2, #chose3, #chose4, #avai1, .characterList" ).hide();
  vader.isChosen = true;
  vader.hp = Math.floor(Math.random() * 100 + 100);
  $(".hp1").text(vader.hp);
  vader.attack = Math.floor(Math.random() * 5 + 10);
  $(".at1").text(vader.attack);
  strike = vader;
});

//kylo
$( "#list2" ).on( "click", function() {
  $(".chosen-character,#chose2,.available-character, #avai1, #avai3, #avai4 ").show();
  $( ".title1, #chose1, #chose3, #chose4, #avai2, .characterList" ).hide();
  kylo.isChosen = true;
  kylo.hp = Math.floor(Math.random() * 100 + 100);
  $(".hp2").text(kylo.hp);
  kylo.attack = Math.floor(Math.random() * 5 + 10);
  $(".at2").text(kylo.attack);
  strike = kylo;
});

//Luke
$( "#list3" ).on( "click", function() {
  $(".chosen-character,#chose3, .available-character, #avai2,#avai1,#avai4 ").show();
  $( ".title1,#chose1,#chose2,#chose4,#avai3,.characterList ").hide();
  luke.isChosen = true;
  luke.hp = Math.floor(Math.random() * 100 + 100);
  $(".hp3").text(luke.hp);
  luke.attack = Math.floor(Math.random() * 5 + 10);
  $(".at3").text(luke.attack);
  strike = luke;
});

//Chewbacca
$( "#list4" ).on( "click", function() {
  $(".chosen-character,#chose4,.available-character,#avai2,#avai1,#avai3 ").show();
  $( ".title1,#chose1,#chose3,#chose2,#avai4,.characterList" ).hide();
  chewbacca.isChosen = true;
  chewbacca.hp = Math.floor(Math.random() * 100 + 100);
  $(".hp4").text(chewbacca.hp);
  chewbacca.attack = Math.floor(Math.random() * 5 + 10);
  $(".at4").text(chewbacca.attack);
  strike = chewbacca;
});

// Select Attack player
$( "#avai1" ).on( "click", function() {
  $(".defender-character,#attack1").show();
  $( ".title3,#attack2,#attack3,#attack4,#avai1,.available-character" ).hide();
  vader.isDefender = true;
  vader.hp = Math.floor(Math.random() * 100 + 100);
  $(".hp1").text(vader.hp);
  vader.attack = Math.floor(Math.random() * 5 + 10);
  $(".at1").text(vader.attack);
  defender = vader;
});

$( "#avai2" ).on( "click", function() {
  $(".defender-character,#attack2").show();
  $( ".title3,#attack1,#attack3,#attack4,#avai2,.available-character" ).hide();
  kylo.isDefender = true;
  kylo.hp = Math.floor(Math.random() * 100 + 100);
  $(".hp2").text(kylo.hp);
  kylo.attack = Math.floor(Math.random() * 5 + 10);
  $(".at2").text(kylo.attack);
  defender = kylo;
});

$( "#avai3" ).on( "click", function() {
  $(".defender-character,#attack3").show();
  $( ".title3,#attack1,#attack2,#attack4,#avai3,.available-character" ).hide();
  luke.isDefender = true;
  luke.hp = Math.floor(Math.random() * 100 + 100);
  $(".hp3").text(luke.hp);
  luke.attack = Math.floor(Math.random() * 5 + 10);
  $(".at3").text(luke.attack);
  defender = luke;  
});

$( "#avai4" ).on( "click", function() {
  $(".defender-character,#attack4").show();
  $( ".title3,#attack1,#attack2,#attack3,#avai4,.available-character" ).hide();
  chewbacca.isDefender = true;
  chewbacca.hp = Math.floor(Math.random() * 100 + 100);
  $(".hp4").text(chewbacca.hp);
  chewbacca.attack = Math.floor(Math.random() * 5 + 10);
  $(".at4").text(chewbacca.attack);
  defender = chewbacca;
});

// button Attack
  $( ".attack" ).on( "click", function() {
    if(defender.hp >= 0 & defender.isDefender == true){
      defender.hp = defender.hp - strike.attack;
      $(".hpd").text(defender.hp);
      strike.hp = strike.hp - defender.attack;
      $(".hpa").text(strike.hp);       
    }
    else if (defender.hp <= 0 & defender.isDefender == true) {
      defender.isDefender = false;
      alert("You kill " + defender.name + " Chose another character" );
      $('.available-character, .title3').show();
      characterDefeated++;
    }

    if ( strike.hp < 0){
      alert("Game Over");
      reset();
    }

    if ( characterDefeated >= 3 ){
      alert('Congratulation You Kill all of them');
      reset();
    }
  });
      

