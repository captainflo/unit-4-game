
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

function reset(){
  $(".characterList").show();
  $(".available-character").hide();
  $(".defender-character").hide();
  $(".chosen-character").hide();
  $( ".title3" ).show();
  $( ".title3" ).show();
  for( var i = 0; i < character.length; i++){
    character[i].isChosen = false; 
    character[i].isDefender = false; 
    character[i].attack = 0;
    character[i].hp = 0;
    $(".load").text(0);
    characterDefeated = 0;
  }
}


  
  // Select player
  $(".available-character").hide();
  $(".defender-character").hide();
  $(".chosen-character").hide();

  // Move list to chosen and select enemie
  $( "#list1" ).on( "click", function() {
    $(".chosen-character").show();
    $( ".title1" ).hide();
    $( "#chose1" ).show();
    $( "#chose2" ).hide();
    $( "#chose3" ).hide();
    $( "#chose4" ).hide();
    $(".available-character").show();
    $("#avai1").hide();
    $("#avai2").show();
    $("#avai3").show();
    $("#avai4").show();
    $('.characterList').hide();
    vader.isChosen = true;
    vader.hp = Math.floor(Math.random() * 100 + 100);
    $(".hp1").text(vader.hp);
    vader.attack = Math.floor(Math.random() * 5 + 10);
    $(".at1").text(vader.attack);
    strike = vader;
    });

    $( "#list2" ).on( "click", function() {
      $(".chosen-character").show();
      $( ".title1" ).hide();
      $( "#chose2" ).show();
      $( "#chose1" ).hide();
      $( "#chose3" ).hide();
      $( "#chose4" ).hide();
      $(".available-character").show();
      $("#avai2").hide();
      $("#avai1").show();
      $("#avai3").show();
      $("#avai4").show();
      $('.characterList').hide();
      kylo.isChosen = true;
      kylo.hp = Math.floor(Math.random() * 100 + 100);
      $(".hp2").text(kylo.hp);
      kylo.attack = Math.floor(Math.random() * 5 + 10);
      $(".at2").text(kylo.attack);
      strike = kylo;
    });

    $( "#list3" ).on( "click", function() {
      $(".chosen-character").show();
      $( ".title1" ).hide();
      $( "#chose3" ).show();
      $( "#chose1" ).hide();
      $( "#chose2" ).hide();
      $( "#chose4" ).hide();
      $(".available-character").show();
      $("#avai3").hide();
      $("#avai2").show();
      $("#avai1").show();
      $("#avai4").show();
      $('.characterList').hide();
      luke.isChosen = true;
      luke.hp = Math.floor(Math.random() * 100 + 100);
      $(".hp3").text(luke.hp);
      luke.attack = Math.floor(Math.random() * 5 + 10);
      $(".at3").text(luke.attack);
      strike = luke;
    });

    $( "#list4" ).on( "click", function() {
      $(".chosen-character").show();
      $( ".title1" ).hide();
      $( "#chose4" ).show();
      $( "#chose1" ).hide();
      $( "#chose3" ).hide();
      $( "#chose2" ).hide();
      $(".available-character").show();
      $("#avai4").hide();
      $("#avai2").show();
      $("#avai1").show();
      $("#avai3").show();
      $('.characterList').hide();
      chewbacca.isChosen = true;
      chewbacca.hp = Math.floor(Math.random() * 100 + 100);
      $(".hp4").text(chewbacca.hp);
      chewbacca.attack = Math.floor(Math.random() * 5 + 10);
      $(".at4").text(chewbacca.attack);
      strike = chewbacca;
    });

    // Select Attack player
    $( "#avai1" ).on( "click", function() {
      $(".defender-character").show();
      $( ".title3" ).hide();
      $("#attack1").show();
      $( "#attack2" ).hide();
      $( "#attack3" ).hide();
      $( "#attack4" ).hide();
      $( "#avai1" ).hide();
      $('.available-character').hide();
      vader.isDefender = true;
      vader.hp = Math.floor(Math.random() * 100 + 100);
      $(".hp1").text(vader.hp);
      vader.attack = Math.floor(Math.random() * 5 + 10);
      $(".at1").text(vader.attack);
      defender = vader;
    });

    $( "#avai2" ).on( "click", function() {
      $(".defender-character").show();
      $( ".title3" ).hide();
      $("#attack2").show();
      $( "#attack1" ).hide();
      $( "#attack3" ).hide();
      $( "#attack4" ).hide();
      $( "#avai2" ).hide();
      $('.available-character').hide();
      kylo.isDefender = true;
      kylo.hp = Math.floor(Math.random() * 100 + 100);
      $(".hp2").text(kylo.hp);
      kylo.attack = Math.floor(Math.random() * 5 + 10);
      $(".at2").text(kylo.attack);
      defender = kylo;
    });

    $( "#avai3" ).on( "click", function() {
      $(".defender-character").show();
      $( ".title3" ).hide();
      $("#attack3").show();
      $( "#attack1" ).hide();
      $( "#attack2" ).hide();
      $( "#attack4" ).hide();
      $( "#avai3" ).hide();
      $('.available-character').hide();
      luke.isDefender = true;
      luke.hp = Math.floor(Math.random() * 100 + 100);
      $(".hp3").text(luke.hp);
      luke.attack = Math.floor(Math.random() * 5 + 10);
      $(".at3").text(luke.attack);
      defender = luke;  
    });

    $( "#avai4" ).on( "click", function() {
      $(".defender-character").show();
      $( ".title3" ).hide();
      $("#attack4").show();
      $( "#attack2" ).hide();
      $( "#attack3" ).hide();
      $( "#attack1" ).hide();
      $( "#avai4" ).hide();
      $('.available-character').hide();
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
              $('.available-character').show();
              $( ".title3" ).show();
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
      

