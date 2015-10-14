# my-game

-'new game' button should start game and push random image from array onto screen as well as use same array to shuffle through answer options. by default, player 1 will go first.
-if a player chooses the correct answer, a sweet alert should appear on the screen informing them of this, and their player score should increase by one.
-alternativly, if a player chooses the wrong answer, a sweet alert should inform them of that and obviously their score will not change.
-the sweet alert must also flip the board over to the next player and change the photo.
-the first player to correctly identify 5 (maybe 10) images will win and a different sweet alert will declare the winner. Once the sweet alert is clicked, the board will reset. new game button should also have the power to reset the board.

things to consider:
-use of jquery in image animationn(can't find anything that doesn't look cheesy at the moment). maybe find the nasa site again with ht e hi def mpgs and use the jquery video background from lecture
-throw in some font awesome icons if it doesn't clutter the board
-add another image that appear in the image space after the board is cleared, or when player 1 or 2 wins.
-shorten long country names to initials so buttons don't get all fucked up
-hide scoreboard and answer buttons before new game is clicked

-instead of a pop-up window declaring the right or wrong answer, just have the answer appear below/above the text that indicated the turn. shit i don't know.

things left to do:
-make wins add up on the scoreboard
-sweet alerts for won rounds, and won game, update look and feel of buttons
-center heading
-clean up code, don't need answer button IDs anymore and other stuff

-clicking ok on swal needs to:
	-update scoreboard
	-rotate to next picture
	-clear correct class
	-shuffle data
	-anything else?

