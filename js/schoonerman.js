//HighNoon card stays in play until the game ends!
		var schoonerman = [
			{
				"cardName":"No Holds Barred",
				"cardData":"You can shoot as many shots as Bang cards allow."			
			},
			{
				"cardName":"Zombies:",
				"cardData":"Eliminated players return to life with 2 cards and 2 life points, but they have no abilities and can never have more than 2 life points. They must kill their killer (if he is not another zombie) and the Sheriff to win. The only cards that can hurt them are hearts."		
			},
			{
				"cardName":"Haunting",
				"cardData":"If an outlaw has died they can pick any player and have them lay all their cards out General Store style. Then staring with the player to the right of the dead outlaw disperse the cards like a general store. Not all players are guaranteed a card."			
			},
			{"cardName":"Breakin the law!:",
				"cardData":"This round is played counter clockwise!"
			
			},
			{"cardName":"Explosive Situation:",
				"cardData":"Any dynamite in play detonates! Also dealing a loss of two life points to the people on the left and right of the dynamite."
			
			},
			{"cardName":"Scavengers:",
				"cardData":"You may draw your cards from the discard pile if possible."
			
			},
			{"cardName":"Traveling Man:",
				"cardData":"On each players turn they may choose to swap their seat with another player."
			
			},
			{"cardName":"Gypsy Rose:",
				"cardData":"On your turn you may look at one other player’s hand."
			
			},
			{"cardName":"Spit Shake:",
				"cardData":"You may give any player one of your cards. That player must then give you one of his. He is allowed to give the same card back."
			
			},
			{"cardName":"Indian Poker:",
				"cardData":"Everyone draws! a card and holds it to forehead facing out. Each player discards or holds. Highest card wins and gets cards of losers who must discard all hand cards. Order: A♥-♦-♣-2♠"
			
			},
			{"cardName":"Famine:",
				"cardData":"Times are tough, all players lose one life point. All horses are killed for food, discard any in play."
			
			},
			{"cardName":"Brew Crew:",
				"cardData":"You may give any player one of your beer cards."
			
			},
			{"cardName":"Drought",
				"cardData":"Lose a life point unless you have a barrel in play. Stay thirsty my friends ;)"
			
			},
			{"cardName":"Libs on the loose:",
				"cardData":"Any guns that are in play are discarded."
			
			},
			{"cardName":"The Plague:",
				"cardData":"If anyone dies this round, so does the player that killed them."
			},
			{"cardName":"Good to know you:",
				"cardData":"The Sheriff may peek at one players identity."
			
			},
			{"cardName":"Ladies man:",
				"cardData":"All players who have a female abiltiy card gain one life."
			},
			{"cardName":"Gambler:",
				"cardData":"Players may choose to pick one card and place it in the middle face down. Then each player who opted in picks one card from the pile going clockwise starting with whoever declared the 'gamble'. Each player can only do this once in their turn and may only happen 3 times in a round."
			},
			{"cardName":"Dust Storm:",
				"cardData":"Its a nasty duster out there, your scope gets dusty and is ruined. All scopes are discarded. "
			},
			{"cardName":"Gambler:",
				"cardData":"Players may choose to pick one card and place it in the middle face down. Then each player who opted in picks one card going clockwise starting with whoever declared the 'gamble'. Each player can only do this once in their turn. A gamble can only happen 3 times in a round."
			},
			{"cardName":"Prision Break:",
				"cardData":"Any player that is curently in jail gets out, whoever put them in jail gets the jail card played on them. This also applies to the Sheriff."
			},
			{"cardName":"Irritated Indians:",
				"cardData":"The Indians have had enough, they are stroming the town it takes two bangs to kill indians this round."
			},
			{"cardName":"Rock, Paper, Knife, Shoot:",
				"cardData":"On your turn you can choose to ♣-Rock, ♦-Paper, ♥-Knife, ♠-Shoot with anyone in your scope of view. Each player flips the top card of the deck. You can flip cards or do it old school. A loss reults in the loss of one life point. Card ranking lowest to highest ♦,♣,♥,♠, on a tie repeat the process until a winner is determined."
			},
			
			
		
		];//end of schoonerman card pack
	
	function schoonermanFlip(){
		if(schoonerman.length == 0){
			if(confirm("This deck is empty. Select Ok to shuffle it.")==true){
				schoonerman == schoonermanBackup;
			}
		}//end of empty deck condition
		var i = Math.floor(Math.random()*schoonerman.length);
		//alert(highNoon[i].cardName + ": " + highNoon[i].cardData);
		document.getElementById('packName').innerHTML = "Schoonerman Pack";
		document.getElementById('cardName').innerHTML = schoonerman[i].cardName;
		document.getElementById('cardInfo').innerHTML = schoonerman[i].cardData;
		schoonerman.splice(i,1); //removes the item from the array!
	}
