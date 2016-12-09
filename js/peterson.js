
		//HighNoon card stays in play until the game ends!
		var petersonPack = [
			{
				"cardName":"Sawed-Off Shotgun:",
				"cardData":"You can shoot two players sitting next to each other with one BANG! as long as both players are in range."			
			},
			{
				"cardName":"The Old Switcheroo:",
				"cardData":"Immediately after phase one, you can exchange your cards with any other player (all for all)"			
			},
			{
				"cardName":"Prison Break:",
				"cardData":"All prisoners are now free. The player(s) that imprisoned them must play a Missed! card or lose 1 life point. If no one is in prison, players must defend against an escapee by drawing! ♠ = hit."			
			},
			{"cardName":"New Sheriff in Town:",
				"cardData":"If you are a deputy and kill the Sheriff, you become the new Sheriff. You get full health and all of the Sheriff’s cards (those in his hand as well as those in front of him)"
			
			},
			{"cardName":"Iron Will:",
				"cardData":"Each time you are about to lose a card from your hand or in play in front of you, you can choose which card to lose."
			
			},
			{"cardName":"Kaboom:",
				"cardData":"If you have a dynamite card, you may chose where to start it. It is in play when that player begins his turn and explodes (for that player only) if that player draws! any ♠."
			
			},
			{"cardName":"Return Fire:",
				"cardData":"Each time you are hit, you draw—on ♥ or ♦, the player hitting you must play a Missed! card or lose 1 life point."
			
			},
			{"cardName":"Gypsy Rose:",
				"cardData":"On your turn you can look at one other player’s hand."
			
			},
			{"cardName":"Spit Shake:",
				"cardData":"You may give any player one of your cards. That player must then give you one of his. He is allowed to give the same card back."
			
			},
			{"cardName":"Indian Poker:",
				"cardData":"Everyone draws! a card and holds it to forehead facing out. Each player discards or holds. Highest card wins and gets cards of losers who must discard all hand cards. Order: A♥-♦-♣-2♠"
			
			}
			
		
		];//end of peterson card pack
	
	function petersonFlip(){
		if(petersonPack.length == 0){
			if(confirm("This deck is empty. Select Ok to shuffle it.")==true){
				petersonPack = petersonBackUp;
			}
		}//end of empty deck condition
		var i = Math.floor(Math.random()*petersonPack.length);
		//alert(highNoon[i].cardName + ": " + highNoon[i].cardData);
		document.getElementById('packName').innerHTML = "Peterson Pack";
		document.getElementById('cardName').innerHTML = petersonPack[i].cardName;
		document.getElementById('cardInfo').innerHTML = petersonPack[i].cardData;
		petersonPack.splice(i,1); //removes the item from the array!
	}
