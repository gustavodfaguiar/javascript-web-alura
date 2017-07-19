var patients = document.querySelectorAll('.patient');

for (var i = 0; i < patients.length; i++) {
	
	var patient = patients[i];
	
	var tdWeight = patient.querySelector(".info-weight");
	var weight = tdWeight.textContent;	

	var tdHeight = patient.querySelector(".info-height");
	var height = tdHeight.textContent;	

	var tdImc = patient.querySelector(".info-imc");

	var weightIsValid = validateWeight(weight);
	var heightIsValid = validateHeight(height);

	if ( ! weightIsValid ) {
		weightIsValid = false;
		tdImc.textContent = "Weight invalid";
		patient.classList.add('patient-invalid')
	}

	if ( ! heightIsValid ) {
		heightIsValid = false;
		tdImc.textContent = "height invalid";
		patient.classList.add('patient-invalid')
	}

	if ( weightIsValid && heightIsValid ) {
		var imc = weight / ( height * height );
		tdImc.textContent = imc.toFixed(2);
	}
	
}

function validateWeight(weight) {
	if ( weight >= 0 && weight < 1000 ) {
		return true;
	} else {
		return false
	}
}

function validateHeight(height) {
	if ( height >= 0 && height <= 3.0 ) {
		return true;
	} else {
		return false
	}
}


function calculateImc(weight, height) {
	var imc = 0;
	imc = weight / ( height * height );
	return imc.toFixed(2);
}