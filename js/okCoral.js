
		//HighNoon card stays in play until the game ends!
		var okCorral = [
			{
				"cardName":"Deadly Deal:",
				"cardData":"On your turn you may lose 1 life point and discard all cards into a new discard deck. Then 'draw' the same amount of cards from the primary discard deck."			
			},
			{
				"cardName":"Bullseye:",
				"cardData":"Missed! cards cannot be played this round."			
			},
			{
				"cardName":"Snake Eyes:",
				"cardData":"At the beginning of this round, each player must pass all cards in hand to the player on their right."			
			},
			{"cardName":"Bushwhack:",
				"cardData":"Each player who is the target of a BANG! card may 'draw.' On a SPADE, the BANG! card affects the attacking player unless he has a Missed! card."
			
			},
			{"cardName":"Scatter Gun:",
				"cardData":"When a player targeted by a BANG! card plays a Missed! card, the players on both sides of him become the target of the same BANG! card and must also play a Missed! card."
			
			},
			{"cardName":"Lucky Horseshoe:",
				"cardData":"At the end of each player's turn, they may 'draw' 1 card"
			
			},
			{"cardName":"Wanted:",
				"cardData":"Except for the Sheriff, only the player or players with the most life points can be targeted this round"
			
			},
			{"cardName":"Trading Post:",
				"cardData":"On your turn you may choose of one your cards in play and trade it for another player's card in play as long as the agreement is mutual."
			
			},
			{"cardName":"Flesh Wound:",
				"cardData":"No player can lose their last life point this round."
			
			},
			{"cardName":"The Gambler:",
				"cardData":"Each player draws a card face down. All reveal at once and the highest card regains 1 life point. Order: A♥-♦-♣-2♠"
			
			},
			{"cardName":"Ace Up Your Sleeve:",
				"cardData":"each player may discard an ACE to draw a card from the discard pile."
			
			},
			{"cardName":"Gunpowder:",
				"cardData":" If a barrel is used, the player 'draws' a card as normal to see if it's a HEART. If not, they 'draw' another card: on a SPADE they lose a life point."
			
			},
			{"cardName":"Reservation:",
				"cardData":"No one may play an Indians card this round."
			
			},
			{"cardName":"Fatal Shot:",
				"cardData":"For this round, if a player is hit, he must 'draw' a card: on a HEART, he loses another life point. (it's a reverse Barrel)"
			
			},
			{"cardName":"Short Fuse:",
				"cardData":"Any Dynamite card explodes if a SPADE is drawn"
			
			},
			{"cardName":"Closed Sunday:",
				"cardData":"No General Store or other 'draw' cards may be played this round"
			
			},
			{"cardName":"Mystery Tonic:",
				"cardData":"During phase 1, each player draws a card. Red-suited cards gain 1 life point; black-suited cards lose 1 life point."
			
			},
			{"cardName":"Rustlers:",
				"cardData":"All horse cards in play must be discarded"
			
			},
			{"cardName":"Moonshine:",
				"cardData":"All players regain 1 life point."
			
			},
			
		];//end of highNoon card pack
	
	function okFlip(){
		if(okCorral.length == 0){
			if(confirm("This deck is empty. Select Ok to shuffle it.")==true){
				okCorral = okBackup;
			}
		}//end of empty deck condition
		var i = Math.floor(Math.random()*okCorral.length);
		//alert(highNoon[i].cardName + ": " + highNoon[i].cardData);
		document.getElementById('packName').innerHTML = "O.K. Corral";
		document.getElementById('cardName').innerHTML = okCorral[i].cardName;
		document.getElementById('cardInfo').innerHTML = okCorral[i].cardData;
		okCorral.splice(i,1); //removes the item from the array!
	}
