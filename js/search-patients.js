var buttonAdd = document.querySelector(".button-search");

buttonAdd.addEventListener("click", function(){
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", function(){

		if(xhr.status == 200) {
			var response = xhr.responseText;
			var patients = JSON.parse(response);

			patients.forEach(function(patient){
				addPatientTable(patient)
			});
		} else {
			console.log(xhr.status)
			console.log(xhr.responseText)
		}

	});
	xhr.send();
});