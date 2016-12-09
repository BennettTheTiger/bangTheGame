
		//fistfull card must go last --------------------------------------------------!
		var fistFullDeck = [
			{
				"cardName":"Abandoned Mine:",
				"cardData":"Players draw from the discard pile and discard on the top of the deck."			
			},
			{
				"cardName":"Ambush:",
				"cardData":"The distance between players is 1.This is only modified by cards in play"			
			},
			{
				"cardName":"Blood Brothers:",
				"cardData":"Each player may choose to lose one of his life points to give to another player at the beginning of his turn."		
			},
			{"cardName":"Dead Man:",
				"cardData":"The first eliminated player returns in play with 2 life points and 2 cards."
			
			},
			{"cardName":"Hard Liquor:",
				"cardData":"Each player may forfeit his drawing phase to regain 1 life point."
			
			},
			{"cardName":"Lasso:",
				"cardData":"Cards in play in front of all players have no effect. 'Draw!' is still required for Jail, but this Jail has no effect regardless the result of draw."
			},
			{"cardName":"Law of the West:",
				"cardData":"Players must show and play (if possible) the second card they draw in their turn."
			
			},
			{"cardName":"Ranch:",
				"cardData":"Once at the end of his turn, each player may discard any number of cards from his hand to draw an equal number of cards from the deck."
			
			},
			{"cardName":"Ricochet:",
				"cardData":"Players may fire Bang! against cards in play: those cards are discarded unless the player controlling them plays a Missed!."
			
			},
			{"cardName":"Russian Roulette:",
				"cardData":"When this card enters in play, starting from the Sheriff each player discards a Missed! or loses 2 life points (thus ending the effect)."
			
			},
			{"cardName":"Sniper:",
				"cardData":"Players may discard 2 Bang! cards to target an opponent: this counts as a Bang! but 2 Missed! cards are required to cancel this effect."
			
			},
			{"cardName":"Peyote:",
				"cardData":"Players try to guess the suit of the card they draw and keep drawing until they are wrong."
			
			},
			{"cardName":"The Judge:",
				"cardData":"Players cannot play cards in front of themselves (i.e. Green or Blue cards). Cards that are already placed in front of players will not be affected."
			
			},
			{"cardName":"Vendetta:",
				"cardData":"players 'draw!' at the end of their turn: on a Heart, they play an additional turn(but do not 'draw!' again)."
			
			}
			
		
		];//end of fistFull card pack
	
	function fistFulFlip(){
		if(fistFullDeck.length > 0){//makes sure that there are more cards to be fliped
		var i = Math.floor(Math.random()*fistFullDeck.length);
		//alert(highNoon[i].cardName + ": " + wildWestDeck[i].cardData);
		document.getElementById('packName').innerHTML = "Fistful of Cards";
		document.getElementById('cardName').innerHTML = fistFullDeck[i].cardName;
		document.getElementById('cardInfo').innerHTML = fistFullDeck[i].cardData;
			fistFullDeck.splice(i,1); //removes the item from the array!
		}
		else{//if all the cards have been played then this is the default card until a new game is started
			document.getElementById('cardName').innerHTML = "A Fistful of Cards:";
			document.getElementById('cardInfo').innerHTML =	"At the beginning of their turn, each player is the target of as many Bang! as the number of cards in their hand. This must be always the last card, and stays in play until the game ends.";
			bells.play();//plays the bell sound
		}
	}










	
	
	
	
	
			