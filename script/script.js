buttonBox = document.getElementById('buttonBox');

var jouer = function () {
buttonBox.classList.remove("hidden")};

class Gameboard{
    constructor(){
          this.victoires = victoires;
          this.nuls = nuls;
          this.defaites = defaites;
          this.jouer = jouer;
          this.continuer = continuer; 
          this.arreter = arreter;
          this.cartes = cartes; 
          this.nouveauJeu = nouveauJeu;
    }
    
    nouveauJeu(){
        nouveauJeu.classList.add("hidden");

        playerHand.push(deck.pop());
        playerHand.push(deck.pop());
    }
    // function
}

class Cards{
    constructor(){   

    }

    shuffle(){

    }

    showDeck(){

    }
    
    getCard(numberOfCard){

    }
    // function
}