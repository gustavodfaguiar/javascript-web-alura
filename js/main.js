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
		patient.classList.add('patient-invalid')
	}

	if ( height <= 0 || height >= 3.00 ) {
		heightIsValid = false;
		tdImc.textContent = "height invalid";
		patient.classList.add('patient-invalid')
	}

	if ( weightIsValid && heightIsValid ) {
		var imc = weight / ( height * height );
		tdImc.textContent = imc.toFixed(2);
	}
	
}

var buttonAdd = document.querySelector('.button-add');
buttonAdd.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector(".form-add");

	var name = form.name.value
	var weight = form.weight.value
	var height = form.height.value
	var fat = form.fat.value

	var patientTr = document.createElement("tr");

	var nameTd = document.createElement("td");
	var weightTd = document.createElement("td");
	var heightTd = document.createElement("td");
	var fatTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nameTd.textContent = name;
	weightTd.textContent = weight;
	heightTd.textContent = height;
	fatTd.textContent = fat;

	patientTr.appendChild(nameTd);
	patientTr.appendChild(weightTd);
	patientTr.appendChild(heightTd);
	patientTr.appendChild(fatTd);
	patientTr.appendChild(imcTd);

	console.log(patientTr);

	var table = document.querySelector(".tbody");

	table.appendChild(patientTr);

});
