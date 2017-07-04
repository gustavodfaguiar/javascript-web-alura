var patients = document.querySelectorAll('.patient');

for (var i = 0; i < patients.length; i++) {
	
	var patient = patients[i];
	
	var tdWeight = patient.querySelector(".info-weight");
	var weight = tdWeight.textContent;	

	var tdHeight = patient.querySelector(".info-height");
	var height = tdHeight.textContent;	

	var tdImc = patient.querySelector(".info-imc");

	var weightIsValid = true;
	var heightIsValid = true;

	if ( weight <= 0 || weight >= 1000 ) {
		weightIsValid = false;
		tdImc.textContent = "Weight invalid";
	}

	if ( height <= 0 || height >= 3.00 ) {
		heightIsValid = false;
		tdImc.textContent = "height invalid";
	}

	if ( weightIsValid && heightIsValid ) {
		var imc = weight / ( height * height );
		tdImc.textContent = imc.toFixed(2);
	}
	
}
