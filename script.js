$(function(){
console.log("JS page connected");

	// misc. variables
	var newGame = $('#new-game');
	var playerSwitch = true;
	var p1Score = 0;
	var p2Score = 0;
	var imageSpace = $('#image-space');
	var roundCount = 0;

	// hide gameBox
	$('.gameBox').hide();
	
	// data array
	var data = [
		{desc: 'Le Grau-du Roi, France', photo:'http://i.imgur.com/Lc474Zb.jpg'},
		{desc: 'Glen Arbor (Michigan), U.S.A.', photo: 'http://i.imgur.com/R81yiUP.jpg'},
		{desc: 'Madrid, Spain', photo: 'http://i.imgur.com/gNxnIAP.jpg'},
		{desc: 'Oakland (California), U.S.A.', photo: 'http://i.imgur.com/ohn2Cdy.jpg'},
		{desc: 'Korramshahr, Iran', photo: 'http://i.imgur.com/fUKcgIX.jpg'},
		{desc: 'Guerrero Negro, Mexico', photo: 'http://i.imgur.com/1kOrYUR.jpg'},
		{desc: 'Isla de Pascua, Chile', photo: 'http://i.imgur.com/ozRR0Ag.jpg'},
		{desc: 'Versailles, France', photo: 'http://i.imgur.com/UaxHUBy.jpg'},
		{desc: 'Pozoantiguo, Spain', photo: 'http://i.imgur.com/8ZXcLAy.jpg'},
		{desc: 'Raffineria, Italy', photo: 'http://i.imgur.com/CbqOLoI.jpg'},
		{desc: 'Bockhorst, Germany', photo: 'http://i.imgur.com/kn6bhzu.jpg'},
		{desc: 'Kilua-Kona (Hawaii), U.S.A.', photo: 'http://i.imgur.com/CfbUJQr.jpg'},
		{desc: 'Erdene, Mongolia', photo: 'http://i.imgur.com/YglyoxW.jpg'},
		{desc: 'Anadyrsky, Russia', photo: 'http://i.imgur.com/862PfdM.jpg'},
		{desc: 'Kane County (Utah), U.S.A.', photo: 'http://i.imgur.com/1OYosle.jpg'},
		{desc: 'Petermann, Australia', photo: 'http://i.imgur.com/pGEpwZd.jpg'},
		{desc: 'Dronten, Netherlands', photo: 'http://i.imgur.com/q0ZNbXm.jpg'},
		{desc: 'Taolanaro, Madagascar', photo: 'http://i.imgur.com/19i62xb.jpg'},
		{desc: 'Kizilsu, China', photo: 'http://i.imgur.com/H25iIyY.jpg'},
		{desc: 'Lipie, Poland', photo: 'http://i.imgur.com/gXU32mB.jpg'},
		{desc: 'Marble Canyon (Arizona), U.S.A.', photo: 'http://i.imgur.com/07AloKY.jpg'},
		{desc: 'Osaka, Japan', photo: 'http://i.imgur.com/SNrKl8A.jpg'},
		{desc: 'Forish, Uzbekistan', photo: 'http://i.imgur.com/HQh3xrY.jpg'},
		{desc: 'Sintra, Portugal', photo: 'http://i.imgur.com/hfzrMId.jpg'},
		{desc: 'South, Iceland', photo: 'http://i.imgur.com/pbueLim.jpg'},
		{desc: 'Waddan, Libya', photo: 'http://i.imgur.com/D99cKFR.jpg'},
		{desc: 'Fderik, Mauritania', photo: 'http://i.imgur.com/AkmHVQz.jpg'},
		{desc: 'Fujinomiya, Japan', photo: 'http://i.imgur.com/5yppdFL.jpg'},
		{desc: 'Moab (Utah), U.S.A.', photo: 'http://i.imgur.com/cX7NlMm.jpg'},
		{desc: 'Baffin Region, Canada', photo: 'http://i.imgur.com/oZiW8jF.jpg'},
		{desc: 'Qesm Siwah, Egypt', photo: 'http://i.imgur.com/cqD6Jdx.jpg'},
		{desc: 'Onslow, Australia', photo: 'http://i.imgur.com/WkcCgUJ.jpg'},
		{desc: 'Barcelos, Brazil', photo: 'http://i.imgur.com/h2gHHT0.jpg'},
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
		{desc: 'El Bichar, Venezuela', photo: 'http://i.imgur.com/9gL0RwI.jpg'},
		{desc: 'Al Gharbia, U.A.E', photo: 'http://i.imgur.com/wjGQLML.jpg'},
		{desc: 'Al Jufrah, Libya', photo: 'http://i.imgur.com/YvMa5sC.jpg'},
		{desc: 'Aldenhoven, Germany', photo: 'http://i.imgur.com/N35P2OC.jpg'},
		{desc: 'Alert, Canada', photo: 'http://i.imgur.com/SeDwAng.jpg'},
		{desc: 'Antartica Chilena, Chile', photo: 'http://i.imgur.com/Fe7tnwE.jpg'},
		{desc: 'Bolivar Peninsula (Texas), U.S.A.', photo: 'http://i.imgur.com/svnvmu2.jpg'},
		{desc: 'Dalian Shi, China', photo: 'http://i.imgur.com/Trx5nvv.jpg'},
		{desc: 'Dorie, New Zealand', photo: 'http://i.imgur.com/rzQ5Nhg.jpg'},
		{desc: 'Erongo, Namibia', photo: 'http://i.imgur.com/KVF9vI3.jpg'},
		{desc: 'French Polynesia', photo: 'http://i.imgur.com/5lc238G.jpg'},
		{desc: 'Greenland', photo: 'http://i.imgur.com/FKoZ5I9.jpg'},
		{desc: 'Grootschermer, Netherlands', photo: 'http://i.imgur.com/R0nRYGE.jpg'},
		{desc: 'Heikendorf, Germany', photo: 'http://i.imgur.com/LGLTcsQ.jpg'},
		{desc: 'Kihei (Hawaii), U.S.A.', photo: 'http://i.imgur.com/dDZ8mnV.jpg'},
		{desc: 'Lago Argentino, Argentina', photo: 'http://i.imgur.com/cE3XuBB.jpg'},
		{desc: 'Marovoay, Madagascar', photo: 'http://i.imgur.com/iviWrnj.jpg'},
		{desc: 'Marshall Islands', photo: 'http://i.imgur.com/SHkpE2j.jpg'},
		{desc: 'Massah, Libya', photo: 'http://i.imgur.com/bQd9Gp1.jpg'},
		{desc: 'Mohave Desert (Arizona), U.S.A.', photo: 'http://i.imgur.com/9iRqOIv.jpg'},
		{desc: 'Mopti, Mali', photo: 'http://i.imgur.com/0gaBaE3.jpg'},
		{desc: 'Newark (New Jersey), U.S.A.', photo: 'http://i.imgur.com/e3RJoU6.jpg'},
		{desc: 'Ngari, China', photo: 'http://i.imgur.com/LG7CqBw.jpg'},
		{desc: 'Niagara Falls, Canada', photo: 'http://i.imgur.com/cBkc5md.jpg'},
		{desc: 'Nice, France', photo: 'http://i.imgur.com/50ehFBu.jpg'},
		{desc: 'Seeb, Oman', photo: 'http://i.imgur.com/g6X1keX.jpg'},
		{desc: 'The Bahamas', photo: 'http://i.imgur.com/iTzGVDB.jpg'},
		{desc: 'Thoai Son, Vietnam', photo: 'http://i.imgur.com/mZg6lDf.jpg'},
		{desc: 'Utersum, Germany', photo: 'http://i.imgur.com/VdohXHQ.jpg'},
		{desc: 'Weifanng Shi, China', photo: 'http://i.imgur.com/zFJhgGv.jpg'},
		{desc: 'Xhariep, South Africa', photo: 'http://i.imgur.com/hdtkqpW.jpg'},
		{desc: 'Zug, Western Sahara', photo: 'http://i.imgur.com/bHjqEW8.jpg'},
		{desc: 'Al Fasher, Sudan', photo: 'http://i.imgur.com/g2orGEP.jpg'},
		{desc: 'Amherst (Texas), U.S.A.', photo: 'http://i.imgur.com/rlJJivr.jpg'},
		{desc: 'Aerbaijan, Iran', photo: 'http://i.imgur.com/xtuemty.jpg'},
		{desc: 'Beegden, Netherlands', photo: 'http://i.imgur.com/uTIGnbm.jpg'},
		{desc: 'Binzhou Shi, China', photo: 'http://i.imgur.com/QUPMjZZ.jpg'},
		{desc: 'Colombiers, France', photo: 'http://i.imgur.com/nXjzRFH.jpg'},
		{desc: 'Deltebre, Spain', photo: 'http://i.imgur.com/upPflxn.jpg'},
		{desc: 'Drieborg, Netherlands', photo: 'http://i.imgur.com/vvnQ6Zu.jpg'},
		{desc: 'Dubai, U.A.E.', photo: 'http://i.imgur.com/NTWks8a.jpg'},
		{desc: 'Emmigen-Lipingen, Germany', photo: 'http://i.imgur.com/p6RJ3vR.jpg'},
		{desc: 'Glynneath, U.K.', photo: 'http://i.imgur.com/VO9XL5c.jpg'},
		{desc: 'Kastrup, Denmark', photo: 'http://i.imgur.com/GBeIUIT.jpg'},
		{desc: 'Kumarina, Australia', photo: 'http://i.imgur.com/S7jajyD.jpg'},
		{desc: 'Monaco', photo: 'http://i.imgur.com/7bcUqTA.jpg'},
		{desc: 'Narva, Estonia', photo: 'http://i.imgur.com/6FhsmFJ.jpg'},
		{desc: 'New York (New York), U.S.A.', photo: 'http://i.imgur.com/BjfkEcX.jpg'},
		{desc: 'Tambong Song Khlong, Thailand', photo: 'http://i.imgur.com/RRn0uCF.jpg'},
		{desc: 'Washington D.C., U.S.A.', photo: 'http://i.imgur.com/XqofJUd.jpg'},
		{desc: 'Zermatt, Switzerland', photo: 'http://i.imgur.com/RqFyhds.jpg'}];

	//function to shuffle data array
	var shuffle = function (o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
	};
	// function to post shuffled image from array to imageSpace
	var postImage = function (num) {
		imageSpace.css({'background-image':'url('+data[num].photo+')'})
		
		// adds text to answer buttons
		var buttons = [0, 1, 2, 3];
		var index = Math.floor((Math.random()*buttons.length));
		$('.answerOption').eq(buttons[index]).text(data[num].desc).addClass("correct");
		buttons.splice(index, 1);

		index = Math.floor((Math.random()*buttons.length));
		$('.answerOption').eq(buttons[index]).text(data[num+1].desc);
		buttons.splice(index, 1);

		index = Math.floor((Math.random()*buttons.length));
		$('.answerOption').eq(buttons[index]).text(data[num+2].desc);
		buttons.splice(index, 1);

		index = Math.floor((Math.random()*buttons.length));
		$('.answerOption').eq(buttons[index]).text(data[num+3].desc);
		buttons.splice(index, 1);
};
// add points to players 
var addPoint = function (){
	if (playerSwitch === true) {
		p1Score++;
	}else if (playerSwitch === false) {
		p2Score++;
}
};

// function to alert players of wins, turns over player
	$('.answerOption').on('click', function(e){
			e.preventDefault();
			if ($(this).hasClass("correct")) {
			addPoint();	
				if (p1Score >=5 ) {
					swal({title: "Player One Wins",
					text: "You're an Atlas All-Star!"});
					play();

				}else if(p2Score >=5) {
					swal({title: "Player Two Wins",
					text: "You're an Atlas All-Star!"});
					play();

				}else{

					swal("Slam Dunk!", $(this).text()+" is the correct answer! Take your points and pat yourself on the back.", "success");
					if (playerSwitch === true) {
							nextTurnP1();
					}else if (playerSwitch === false) {
							nextTurnP2();
					}
				}
			}

			else{
				swal("Not Quite...", "Better luck next time, Globetrotter.", "error");
				nextTurn();
				}

			playerSwitch = !playerSwitch; 
			if (playerSwitch === true) {
				$('#playerTurn').text("1");
			} else {
				$('#playerTurn').text("2");
			}
		});
	
	// function to start game/reset board
	var play = function () {
		shuffle(data);
		$(imageSpace).empty();
		$('.gameBox').show();
		p1Score = 0;
		p2Score = 0;
		$('#p1-score').html(p1Score);
		$('#p2-score').html(p2Score);
		$('.answerOption').removeClass("correct");
		postImage(roundCount);
	};

	var nextTurnP1 = function () {
		shuffle(data);
		roundCount++;
		$('#p1-score').html(p1Score);
		$('.answerOption').removeClass("correct");
		postImage(roundCount);
	};

	var nextTurnP2 = function () {
		shuffle(data);
		roundCount++;
		$('#p2-score').html(p2Score);
		$('.answerOption').removeClass("correct");
		postImage(roundCount);
	};

	var nextTurn = function () {
		shuffle(data);
		$('.answerOption').removeClass("correct");
		postImage(roundCount);
	};
	
	// new game/board reset
	newGame.on('click', function(e){
			e.preventDefault();
			play();
			
		});
});

