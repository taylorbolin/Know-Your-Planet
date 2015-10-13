$(function(){
// console.log("JS page connected");

	// button variables
	var newGame = $('#new-game');
	var optionA = $('#option-a');
	var optionB = $('#option-b');
	var optionC = $('#option-c');
	var optionD = $('#option-d');

	// other variables
	var playerSwitch = true;
// if ture, P1's turn, if false, P2's turn

	var p1Score = 0;
	var p2Score = 0;
	var imageSpace = $('#image-space');
	var roundCount = 0
	
	// data array
	var data = [
		{desc: 'Le Grau-du Roi, France', photo:'http://i.imgur.com/Lc474Zb.jpg'},
		{desc: 'Glen Arbor, U.S.A.', photo: 'http://i.imgur.com/R81yiUP.jpg'},
		{desc: 'Madrid, Spain', photo: 'http://i.imgur.com/gNxnIAP.jpg'},
		{desc: 'Oakland, U.S.A', photo: 'http://i.imgur.com/ohn2Cdy.jpg'},
		{desc: 'Korramshahr, Iran', photo: 'http://i.imgur.com/fUKcgIX.jpg'},
		{desc: 'Guerrero Negro, Mexico', photo: 'http://i.imgur.com/1kOrYUR.jpg'},
		{desc: 'Isla de Pascua, Chile', photo: 'http://i.imgur.com/ozRR0Ag.jpg'},
		{desc: 'Versailles, France', photo: 'http://i.imgur.com/UaxHUBy.jpg'},
		{desc: 'Pozoantiguo, Spain', photo: 'http://i.imgur.com/8ZXcLAy.jpg'},
		{desc: 'Raffineria, Italy', photo: 'http://i.imgur.com/CbqOLoI.jpg'},
		{desc: 'Bockhorst, Germany', photo: 'http://i.imgur.com/kn6bhzu.jpg'},
		{desc: 'Kilua-Kona, U.S.A.', photo: 'http://i.imgur.com/CfbUJQr.jpg'},
		{desc: 'Erdene, Mongolia', photo: 'http://i.imgur.com/YglyoxW.jpg'},
		{desc: 'Anadyrsky, Russia', photo: 'http://i.imgur.com/862PfdM.jpg'},
		{desc: 'Kane County, U.S.A.', photo: 'http://i.imgur.com/1OYosle.jpg'},
		{desc: 'Petermann, Australia', photo: 'http://i.imgur.com/pGEpwZd.jpg'},
		{desc: 'Dronten, Netherlands', photo: 'http://i.imgur.com/q0ZNbXm.jpg'},
		{desc: 'Taolanaro, Madagascar', photo: 'http://i.imgur.com/19i62xb.jpg'},
		{desc: 'Kizilsu, China', photo: 'http://i.imgur.com/H25iIyY.jpg'},
		{desc: 'Lipie, Poland', photo: 'http://i.imgur.com/gXU32mB.jpg'},
		{desc: 'Marble Canyon, U.S.A.', photo: 'http://i.imgur.com/07AloKY.jpg'},
		{desc: 'Osaka, Japan', photo: 'http://i.imgur.com/SNrKl8A.jpg'},
		{desc: 'Forish, Uzbekistan', photo: 'http://i.imgur.com/HQh3xrY.jpg'},
		{desc: 'Sintra, Portugal', photo: 'http://i.imgur.com/hfzrMId.jpg'},
		{desc: 'South, Iceland', photo: 'http://i.imgur.com/pbueLim.jpg'},
		{desc: 'Waddan, Libya', photo: 'http://i.imgur.com/D99cKFR.jpg'},
		{desc: 'Fderik, Mauritania', photo: 'http://i.imgur.com/AkmHVQz.jpg'},
		{desc: 'Fujinomiya, Japan', photo: 'http://i.imgur.com/5yppdFL.jpg'},
		{desc: 'Moab, U.S.A.', photo: 'http://i.imgur.com/cX7NlMm.jpg'},
		{desc: 'Baffin Region, Canada', photo: 'http://i.imgur.com/oZiW8jF.jpg'},
		{desc: 'Qesm Siwah, Egypt', photo: 'http://i.imgur.com/cqD6Jdx.jpg'},
		{desc: 'Onslow, Australia', photo: 'http://i.imgur.com/WkcCgUJ.jpg'},
		{desc: 'Barcelos: Brazil', photo: 'http://i.imgur.com/h2gHHT0.jpg'},
		{desc: 'Al Jawf, Libya', photo: 'http://i.imgur.com/UgLEPnS.jpg'},
		{desc: 'Podgorica, Montenegro', photo: 'http://i.imgur.com/UY48whm.jpg'},
		{desc: 'Isles of Scilly, U.K.', photo: 'http://i.imgur.com/u7Vo4Fq.jpg'},
		{desc: 'Ecatepec, Mexico', photo: 'http://i.imgur.com/T1Z6o0K.jpg'},
		{desc: 'Doha, Qatar', photo: 'http://i.imgur.com/ZfeWfSw.jpg'},
		{desc: 'Cagnes-sur-Mer, France', photo: 'http://i.imgur.com/XT5XDp8.jpg'},
		{desc: 'Adrar, Algeria', photo: 'http://i.imgur.com/38AOtLt.jpg'},
		{desc: 'Orapa, Botswana', photo: 'http://i.imgur.com/LWbR7yh.jpg'},
		{desc: 'Tanganyika, D.R.C.', photo: 'http://i.imgur.com/ZPC0g2E.jpg'},
		{desc: 'Vegaøyan, Norway', photo: 'http://i.imgur.com/04CdQWC.jpg'},
		{desc: 'Antarctica', photo: 'http://i.imgur.com/CDBIOO8.jpg'},
		{desc: 'La Chorrera, Panama', photo: 'http://i.imgur.com/hK7B5Kz.jpg'},
		{desc: 'Mayo, Ireland', photo: 'http://i.imgur.com/cN5qNJO.jpg'},
		{desc: 'Bulo-Burte, Somalia', photo: 'http://i.imgur.com/pkfLwlX.jpg'},
		{desc: 'Paris, France', photo: 'http://i.imgur.com/mRLxIYg.jpg'},
		{desc: 'El Bichar, Venezuela', photo: 'http://i.imgur.com/9gL0RwI.jpg'}];

	//function to shuffle data array
	function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
	};
	// function to post shuffled image from array to image space NEED TO ADD PLACE DESC
	var postImage = function (num) {
		// var thisImage = $('<img class="post-image" src="' + data[num].photo + '">')
		// thisImage.appendTo(imageSpace);
		imageSpace.css({'background-image':'url('+data[num].photo+')'})
		// console.log(data[num].desc);
		var buttons = [0, 1, 2, 3];
		
		var index = Math.floor((Math.random()*buttons.length));
		$('.answerOption').eq(buttons[index]).text(data[num].desc).addClass("correct");
		buttons.splice(index, 1);

		index = Math.floor((Math.random()*buttons.length));
		$('.answerOption').eq(buttons[index]).text("button1");
		buttons.splice(index, 1);

		index = Math.floor((Math.random()*buttons.length));
		$('.answerOption').eq(buttons[index]).text("button2");
		buttons.splice(index, 1);

		index = Math.floor((Math.random()*buttons.length));
		$('.answerOption').eq(buttons[index]).text("button3");
		buttons.splice(index, 1);
};

	$('.answerOption').on('click', function(e){
		e.preventDefault();
		if ($(this).hasClass("correct")) {
			alert($(this).text());
		} else {
			alert("incorrect");
		}
		playerSwitch = !playerSwitch; 
		if (playerSwitch === true) {
			$('#playerTurn').text("1");
		} else {
			$('#playerTurn').text("2");
		};
	});

	// prodTitle.append('<p>'+data[num].desc+'</p>');

	// need function to start game/reset board
	var play = function () {
		shuffle(data);
		$(imageSpace).empty();
		console.log(data);
		p1Score = 0;
		p2Score = 0;
		$('#p1-score').html(p1Score);
		$('#p2-score').html(p2Score);
		postImage(roundCount);

	};

// new game button click event
newGame.on('click', function(e){
		e.preventDefault();
		play();
	
	});

// need function to place location names in button options, not sure how to link image
// that's appearing and location description in answer options menu

// need function to count player points each round/determine who won round

// need way to alert player that that picked correct answer or not? create sweet alert 
// post answer to page

	//sweet alert announcing winner
	// 	var winner = function(p1Score,p2Score) {
	// 	if(p1Score === 5){
	// 			swal({title: 'Player 1 wins!',
	// 			text: "Put some text here",
	// 			imageUrl: "put an image here",
	// 			imageSize: "put window size here (ex. 300X300"});
	// 	} else if (p2Score === 5){
	// 			swal({title: 'Player 2 wins!',
	// 			text: "Put some text here",
	// 			imageUrl: "put an image here",
	// 			imageSize: "put window size here (ex. 300X300"});
	// 	} else {
	// 		return;
	// 	}
	// };

	// need way to reset board after winner wins? Some other games have it, some don't
});

