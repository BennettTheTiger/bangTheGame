
		//fistfull card must go last --------------------------------------------------!
		var directorsCut = [
			{
				"cardName":"Bounty Wanted!:",
				"cardData":"The Sheriff places a bounty of 5 cards for the elimination of a player of his choice."			
			},
			{
				"cardName":"Hanging:",
				"cardData":"If a player does not get out of jail, he must 'draw!' a second time. Unless it is a heart, he dies. The player that played Jail is responsible for his death."			
			},
			{
				"cardName":"Bank Robbery:",
				"cardData":"When this card comes into play each player, in a clockwise order beginning with Sheriff, must discard a BANG! or Missed!, or lose a life point. This goes on continuously until only 1 player in a cycle discards a card. That player draws 10 cards and does not have to discard down to his card limit at the end of his next turn. HOWEVER, there is now an additional 3 card bonus for eliminating him anytime during the game."		
			},
			{"cardName":"To the Death:",
				"cardData":"If a Duel is played, the loser is eliminated."
			
			},
			{"cardName":"Dust Storm:",
				"cardData":"Each player that has cards in play must discard them, or lose 1 life point for each card he chooses to keep."
			
			},
			{"cardName":"Zombies:",
				"cardData":"Eliminated players return to life with 2 cards and 2 life points, but they have no abilities and can never have more than 2 life points. They must kill their killer (if he is not another zombie) and the Sheriff to win. The only cards that can hurt them are hearts."
			},
			{"cardName":"Gamble/Roulette:",
				"cardData":"Each player skips phase 1 of his turn, and instead must bet any number of cards (up to the amount of cards he has in his hand and in play) on whether or not the card on top of the deck is red or black. 'Draw!' If he is correct, he draws as many cards as he bet. If he is wrong, he must discard that many..."
			
			},
			{"cardName":"Bucking Bronco:",
				"cardData":"At the beginning of his turn, any player with a Mustang must 'draw!' Unless it is a heart, that player loses 1 life point and discards the Mustang."
			
			},
			{"cardName":"Wounded:",
				"cardData":"If a player is hit by a BANG!, he must 'draw!' On diamonds, he loses a life point and must 'draw!' again until he either does not 'draw!' a diamond or dies."
			
			},
			{"cardName":"Saloon Dance:",
				"cardData":"When this card is brought into play, each player must 'draw!' All players that 'drew!' hearts must rotate places in a clockwise order."
			
			},
			{"cardName":"Seventh Cavalry:",
				"cardData":"When this card is brought into play, the Sheriff may choose any number of players to become the targets of 2 BANG!."
			
			},
			{"cardName":"Miracle Elixir:",
				"cardData":"At the beginning of their turn, each player must 'draw!' On hearts, he gains 2 life points. On diamonds, he draws 2 cards. On clubs, he loses his character ability for the turn. On spades, he loses a life point."
			
			},
			{"cardName":"Fog of War:",
				"cardData":" If Indians! are played, 2 BANG! must be discarded in defense. Otherwise, a life point is lost for each BANG! not discarded."
			
			},
			{"cardName":"Betrayal:",
				"cardData":"All players except the Sheriff turn in their role cards. These roles are shuffled and dealt out at random."
			
			},
			{"cardName":"Contraband:",
				"cardData":"When this card comes into play, each player may discard his gun card in play to draw 3 cards. For each card exchanged, place a discarded Indians! back into the deck and then shuffle it."
			},
			{"cardName":"Nitroglycerine:",
				"cardData":"During this round, Dynamite explodes on both 2-9 of spades and 2-9 clubs."
			},
			{"cardName":"Compassion:",
				"cardData":"Bang! may not be played against players with no cards in their hands."
			},
			{"cardName":"Hunting Ammo:",
				"cardData":"BANG! produces 2 hits during this round."
			},
			{"cardName":"Love Song:",
				"cardData":"Whenever a player plays a card, he must sing the description of that card to the beat of a song. Otherwise, the played card has no effect."
			},
			{"cardName":"Corrupt Sheriff:",
				"cardData":"Each player must give 1 card to the Sheriff during their drawing phase."
			},
			{"cardName":"Independence Day:",
				"cardData":"BANG! may be discarded to play Beer."
			},
			{"cardName":"Coffin:",
				"cardData":"At the beginning of his turn, each player except the Sheriff may opt to regain 1 life point instead of playing during his turn. Whoever does so will be considered by others as eliminated until his next turn."
			},
			{"cardName":"Accident:",
				"cardData":"Any player that plays a BANG! must 'draw!' On spades, his attack misses his target and he immediately loses 1 life point and must discard a gun card if he has one in play."
			},
			{"cardName":"Massacre:",
				"cardData":"Whenever 1 player eliminates another, he draws 3 cards on top of any other bonuses."
			},
			{"cardName":"Gift:",
				"cardData":"Once during his turn, a player may give a card from his hand to another."
			},
			{"cardName":"Final Hour:",
				"cardData":"All players see each other at distance 1 by default, but this is modified by cards in play. During their turns, players may only play BANG! or put guns in play."
			}
		];//end of fistFull card pack
	
	function directorFlip(){
		if(directorsCut.length == 0){
			if(confirm("This deck is empty. Select Ok to shuffle it.")==true){
				directorsCut = directorBackup;
			}
		}//end of empty deck condition
		var i = Math.floor(Math.random()*directorsCut.length);
		//alert(highNoon[i].cardName + ": " + highNoon[i].cardData);
		document.getElementById('packName').innerHTML = "Directors Cut";
		document.getElementById('cardName').innerHTML = directorsCut[i].cardName;
		document.getElementById('cardInfo').innerHTML = directorsCut[i].cardData;
		directorsCut.splice(i,1); //removes the item from the array!
		
		
	}
