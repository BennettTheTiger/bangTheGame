
		//wildWest ---------------------------------------------------------------------------------------------------!
		var wildWestDeck = [
			{
				"cardName":"Bone Orchard:",
				"cardData":"At the beginnings of their turns, all eliminated players return permanently to game with 1 life point. Shuffle role cards and the returning player takes one random role card."			
			},
			{
				"cardName":"Darling Valentine:",
				"cardData":"Players discard all hand cards and then draw as many they had before their phase 1 (followed by their draw)."			
			},
			{
				"cardName":"Dorothy Rage:",
				"cardData":"During each player's turn they may force any player to play one hand card. The player calls out the name of a card. If the target player does not have the card named, he must show his hand cards. If he has the card, he has to play that card like it was his turn, but the caller chooses the target (if necessary)."		
			},
			{"cardName":"Gag:",
				"cardData":"All players play without talking. Only gestures and sounds are allowed. Whoever breaks this rule loses 1 life point."
			
			},
			{"cardName":"Helena Zontoro:",
				"cardData":"Flip Once per round! On hearts or diamonds, shuffle all roles except the Sheriff and deal them out at random."
			
			},
			{"cardName":"Lady Rose Of Texas:",
				"cardData":"Each player can swap place with player on his right. If he does, the player on the right moves to thier place and skips their next turn."
			},
			{"cardName":"Miss Susanna:",
				"cardData":"All players have to play at least 3 cards on their turn. If not, they lose 1 life point."
			
			},
			{"cardName":"Sacagaway:",
				"cardData":"During their turn all players play with their hands revealed."
			
			},
			{"cardName":"Showdown:",
				"cardData":"All cards may be played as if they were Bang! cards, and all Bang! cards may be played as if they were Missed! cards."
			
			},
			];//end of wildWest card pack
			
	
	function wildWestFlip(){
		if(wildWestDeck.length > 0){//makes sure that there are more cards to be fliped
		var i = Math.floor(Math.random()*wildWestDeck.length);
		//alert(highNoon[i].cardName + ": " + wildWestDeck[i].cardData);
		document.getElementById('packName').innerHTML = "Wild West Show";
		document.getElementById('cardName').innerHTML = wildWestDeck[i].cardName;
		document.getElementById('cardInfo').innerHTML = wildWestDeck[i].cardData;
			wildWestDeck.splice(i,1); //removes the item from the array!
		}
		else{
			document.getElementById('cardName').innerHTML = "Wild West Show:";
			document.getElementById('cardInfo').innerHTML =	"The goal of each player becomes 'Be the last one in play'. Roles still apply as normal (Sheriff may not go to jail, killing an Outlaw brings the usual 3-card reward, etc.), but killing the sheriff does not end the game.";
			bells.play();//plays the bell sound
		}
	}
	