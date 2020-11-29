document.getElementById('offBulb').style.display = 'none';


function light(value){
	if (value == 0){
		pic="img/off.jpeg";
		document.getElementById('onBulb').style.display = 'block';
		document.getElementById('offBulb').style.display = 'none';
	}
	else {
		pic="img/on.jpeg";
		document.getElementById('onBulb').style.display = 'none';
		document.getElementById('offBulb').style.display = 'block';
	}
	document.getElementById('Bulb').src=pic;
}