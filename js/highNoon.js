
		//HighNoon card stays in play until the game ends!
		var highNoon = [
			{
				"cardName":"Blessing:",
				"cardData":"The suit of all cards is Hearts."			
			},
			{
				"cardName":"Curse:",
				"cardData":"The suit of all cards is Spades"			
			},
			{
				"cardName":"Ghost Town:",
				"cardData":"during their turn, killed characters return in play as ghosts, with 3 cards. They cannot be killed but they leave the game immediately after their turn."			
			},
			{"cardName":"Gold Rush:",
				"cardData":"The game proceeds counterclockwise. Card effects proceed clockwise as usual"
			
			},
			{"cardName":"Hangover:",
				"cardData":"ALL characters lose their special abilities."
			
			},
			{"cardName":"Shootout:",
				"cardData":"Each player can play a second Bang! card."
			
			},
			{"cardName":"The Daltons:",
				"cardData":"When this card enters play, each player with at least one blue card discards one blue card at his choice."
			
			},
			{"cardName":"The Doctor:",
				"cardData":"When this card enters play, the player(s) with the fewest current life points regain 1 life point."
			
			},
			{"cardName":"The Reverend:",
				"cardData":"Players cannot play any Beer cards."
			
			},
			{"cardName":"The Sermon:",
				"cardData":"Players cannot use Bang! cards"
			
			},
			{"cardName":"Train Arrival:",
				"cardData":"Each player draws an additional card at the beginning of his turn."
			
			},
			{"cardName":"Thirst:",
				"cardData":"Each player draws one card fewer than normal at the beginning of his turn."
			}
		];//end of highNoon card pack
	
	function highNoonFlip(){
		if(highNoon.length > 0){
		var i = Math.floor(Math.random()*highNoon.length);
		//alert(highNoon[i].cardName + ": " + highNoon[i].cardData);
		document.getElementById('packName').innerHTML = "High Noon";
		document.getElementById('cardName').innerHTML = highNoon[i].cardName;
		document.getElementById('cardInfo').innerHTML = highNoon[i].cardData;
			highNoon.splice(i,1); //removes the item from the array!
		}
		else{
			document.getElementById('cardName').innerHTML = "High Noon";
		document.getElementById('cardInfo').innerHTML = "Each player loses 1 life point at the start of his turn. This must be always the last card, and stays in play until the game ends.";
			bells.play();	
		}
	}
