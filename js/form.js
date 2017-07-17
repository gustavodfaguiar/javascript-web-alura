var buttonAdd = document.querySelector('.button-add');
buttonAdd.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector(".form-add");

	var patient = getPatientForm(form);

	var patientTr = buildTr(patient);
	
	var table = document.querySelector(".tbody");

	table.appendChild(patientTr);

	form.reset();

});


function getPatientForm(form) {

	var patient = {
		name: form.name.value,
		weight: form.weight.value,
		height: form.height.value,
		fat: form.fat.value,
		imc: calculateImc(form.weight.value, form.height.value)
	}

	return patient;
}


function buildTr(patient) {
	var patientTr = document.createElement("tr");
	patientTr.classList.add("patient");

	patientTr.appendChild(buildTd(patient.name, "info-name"));
	patientTr.appendChild(buildTd(patient.weight, "info-weight"));
	patientTr.appendChild(buildTd(patient.height, "info-height"));
	patientTr.appendChild(buildTd(patient.fat, "info-fat"));
	patientTr.appendChild(buildTd(patient.imc, "info-imc"));

	return patientTr;
}

function buildTd(data, class_css) {
	var td = document.createElement("td");
	td.textContent = data;
	td.classList.add(class_css);
	return td;
}