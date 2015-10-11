console.log("JS page connected");
//objects in an array to pull at random
var newGame = $('#new-game');
var optionA = $('#option-a');
var optionB = $('#option-b');
var optionC = $('#option-c');
var optionD = $('#option-d');
var currentPlayer = "Player 1";
var score1 = 0;
var score2 = 0;
var data = [
	{desc: 'Le Grau-du Roi, France', photo:'http://i.imgur.com/Lc474Zb.jpg'},
	{desc: 'Haibei, China', phot: 'http://i.imgur.com/NRL3ifU.jpg'},
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
	{desc: 'Orapa: Botswana', photo: 'http://i.imgur.com/LWbR7yh.jpg'},
	{desc: 'Tanganyika, D.R.C.', photo: 'http://i.imgur.com/ZPC0g2E.jpg'},
	{desc: 'Vegaøyan, Norway', photo: 'http://i.imgur.com/04CdQWC.jpg'},
	{desc: 'Antarctica', photo: 'http://i.imgur.com/CDBIOO8.jpg'},
	{desc: 'La Chorrera, Panama', photo: 'http://i.imgur.com/hK7B5Kz.jpg'},
	{desc: 'Mayo, Ireland', photo: 'http://i.imgur.com/cN5qNJO.jpg'},
	{desc: 'Bulo-Burte, Somalia', photo: 'http://i.imgur.com/pkfLwlX.jpg'},
	{desc: 'Paris, France', photo: 'http://i.imgur.com/mRLxIYg.jpg'},
	{desc: 'El Bichar, Venezuela', photo: 'http://i.imgur.com/9gL0RwI.jpg'}];
