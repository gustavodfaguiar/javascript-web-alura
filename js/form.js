var buttonAdd = document.querySelector('.button-add');
buttonAdd.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector(".form-add");

	var patient = getPatientForm(form);

	var errors = validatePatient(patient);
	
	if ( errors.length > 0 ) {
		showMessagesErros(errors);
		return;
	}

	addPatientTable(patient);

	form.reset();
	var messagesError = document.querySelector(".error-messages");
	messagesError.innerHTML = "";

});

function showMessagesErros(errors) {
	var ul = document.querySelector('.error-messages');
	ul.innerHTML = "";
	errors.forEach(function(error){
		var li = document.createElement("li");
		li.classList.add("mdl-list__item");
		li.classList.add('patient-invalid')
		li.textContent = error;
		ul.appendChild(li);
	});
}


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

function validatePatient(patient) {

	var errors = [];

	if ( patient.name.length == 0 ) {
		errors.push("Name can not be blank");
	}

	if ( ! validateWeight(patient.weight) ) {
		errors.push("Weight is invalid");
	}

	if ( ! validateHeight(patient.height) ) {
		errors.push("Height is invalid");
	}

	if ( patient.fat.length == 0 ) {
		errors.push("Fat can not be blank");
	}

	if ( patient.weight.length == 0 ) {
		errors.push("Weight can not be blank");
	}

	if ( patient.height.length == 0 ) {
		errors.push("Height can not be blank");
	}

	return errors;
}

function addPatientTable(patient) {
	var patientTr = buildTr(patient);
	var table = document.querySelector(".tbody");
	table.appendChild(patientTr);
}