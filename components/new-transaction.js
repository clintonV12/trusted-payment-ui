

// Define the HTML for Modal 1
popUp1 = `
  <div class="modal fade" id="modalToggle" aria-labelledby="modalToggleLabel" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog">
      <form class="modal-content transaction-modal-content">
        
        <div class="modal-body transaction-modal-body">
        	<div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">PAYMENT DETAILS</h5>
          </div><br>

		  		${generateSelectField("payFrom", "Pay From", ["MoMo", "Unayo", "Emali"])}
          ${generateSelectField("payTo", "Pay Into", ["MoMo", "Unayo", "Emali"])}
          ${generateInputField("fname", "First Name", "Enter First Name", "text")}
          ${generateInputField("lname", "Last Name", "Enter Last Name", "text")}
        </div>
        <div class="modal-footer transaction-modal-footer">
          <button type="button" class="btn btn-danger fw-bold transaction-modal-btn" data-bs-dismiss="modal">
						<span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
				  </button>
          <button type="button" class="btn btn-primary fw-bold transaction-modal-btn" data-bs-target="#modalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
            Next <span class="tf-icons bx bx-chevron-right"></span>&nbsp;
          </button>
        </div>
      </form>
    </div>
  </div>
`;

// Define the HTML for Modal 2
popUp2 = `
  <div class="modal fade" id="modalToggle2" aria-labelledby="modalToggleLabel2" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog">
      <form class="modal-content transaction-modal-content">
        
        <div class="modal-body transaction-modal-body">
        	<div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">PAYMENT DETAILS</h5>
          </div><br>

		  		${generatePhoneInputField("phone", "Phone Number", "Enter Phone Number", "number")}
          ${generateInputField("pin", "National ID", "Optional", "number")}
          ${generateInputField("ref", "Reference", "Reference", "text")}
        </div>
        <div class="modal-footer transaction-modal-footer">
          <button type="button" class="btn btn-danger fw-bold transaction-modal-btn" data-bs-target="#modalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">
            <span class="tf-icons bx bx-chevron-left"></span>&nbsp; Back
          </button>
          <button type="button" class="btn btn-primary fw-bold transaction-modal-btn" data-bs-target="#modalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">
            Next <span class="tf-icons bx bx-chevron-right"></span>&nbsp;
          </button>
        </div>
      </form>
    </div>
  </div>
`;

// Define the HTML for Modal 3
popUp3 = `
  <div class="modal fade" id="modalToggle3" aria-labelledby="modalToggleLabel3" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog">
      <form class="modal-content transaction-modal-content">
        
        <div class="modal-body transaction-modal-body">
        	<div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">PAYMENT DETAILS</h5>
          </div><br>
		  		${generateSelectField("validity", "Validity Period (Days)", [10,15,30,45,60,90,180])}
		  		${generateInputField("amount", "Amount Payable", "Amount Payable (SZL)", "number")}
        </div>
        <div class="modal-footer transaction-modal-footer">
          <button type="button" class="btn btn-danger fw-bold transaction-modal-btn" data-bs-target="#modalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
            <span class="tf-icons bx bx-chevron-left"></span>&nbsp; Back
          </button>
          <button onclick="getUserInput()" type="button" class="btn btn-primary fw-bold transaction-modal-btn" data-bs-target="#modalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">
            <span class="tf-icons bx bx-check-double"></span>&nbsp; Confirm
          </button>
        </div>
      </form>
    </div>
  </div>
`;

// Define the HTML for Modal 4
popUp4 = `
  <div class="modal fade" id="modalToggle4" aria-labelledby="modalToggleLabel4" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog">
      <form class="modal-content transaction-modal-content">
        
        <div class="modal-body transaction-modal-body">
        	<div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">CONFIRM PAYEE DETAILS</h5>
          </div><br>

		   <ul class="list-group list-group-flush">
        <li class="list-group-item transaction-modal-label">FULL NAME: <strong style="color:red;" id="fullname"></strong></li>
				<li class="list-group-item transaction-modal-label">PHONE NUMBER: <strong style="color:red;" id="phoneC"></strong></li>
				<li class="list-group-item transaction-modal-label">ID: <strong style="color:red;" id="nationalID"></strong></li>
				<li class="list-group-item transaction-modal-label">PAY FROM: <strong style="color:red;" id="pFrom"></strong></li>
				<li class="list-group-item transaction-modal-label">PAY INTO: <strong style="color:red;" id="pTo"></strong></li>
				<li class="list-group-item transaction-modal-label">REFERENCE: <strong style="color:red;" id="refer"></strong></li>
				<li class="list-group-item transaction-modal-label">AMOUNT PAYABLE: E <strong style="color:red;" id="amountP"></strong></li>
				<li class="list-group-item transaction-modal-label">SERVICE CHARGE: E <strong style="color:red;" id="charge"></strong></li>
				<li class="list-group-item transaction-modal-label">TOTAL: E <strong style="color:red;" id="sum"></strong></li>
				<li class="list-group-item transaction-modal-label">VALIDITY PERIOD (DAYS): <strong style="color:red;" id="validityP"></strong></li>
				<li class="list-group-item"></li>
       </ul>

			<div class="form-check">
                <input class="form-check-input" type="checkbox" id="terms-conditions"/>
                <label class="form-check-label" for="terms-conditions">
					I agree to
                    <a href="javascript:void(0);">terms & conditions</a>
                </label>
            </div>
			<div class="form-check">
                <input class="form-check-input" type="checkbox" id="confirm"/>
                <label class="form-check-label" for="confirm">
					I confirm that the information I entered is correct.
                </label>
            </div>
        </div>
        <div class="modal-footer transaction-modal-footer">
			
				  <button type="button" class="btn btn-danger fw-bold transaction-modal-btn" data-bs-target="#modalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">
						<span class="tf-icons bx bx-caret-left"></span>&nbsp; Edit
				  </button>
				  <button onclick="initiateTransaction()" type="button" class="btn btn-primary fw-bold transaction-modal-btn">
						Proceed <span class="tf-icons bx bx-caret-right"></span>&nbsp;
				  </button>
        </div>
      </form>
    </div>
  </div>
`;

tStarted = `
	<div class="modal fade" id="tStarted" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog" role="document">
      <div class="modal-content transaction-modal-content">

				<div class="modal-body transaction-modal-body">
					<div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">TRANSACTION INITIATED</h5>
          </div><br>

					<p>
						The transaction has been initiated. You will received a notification prompting further steps.
          </p>
        </div>

				<div class="modal-footer transaction-modal-footer" style="text-align: end;">
          <button type="button" class="btn btn-success transaction-modal-btn" data-bs-dismiss="modal">
            Finish
          </button>
        </div>
			</div>
		</div>
	</div>
	`;

// Function to generate input fields
function generateInputField(id, label, placeholder, type) {
  return `
    <div class="row transaction-modal-row">
      <div class="col mb-3">
        <label for="${id}" class="form-label transaction-modal-label">${label}</label>
        <input type="${type}" id="${id}" class="form-control" placeholder="${placeholder}"/>
      </div>
    </div>
  `;
}

// Function to generate phone input fields
function generatePhoneInputField(id, label, placeholder, type) {
  return `
    <div class="row transaction-modal-row">
      <div class="col mb-3">
        <label for="${id}" class="form-label transaction-modal-label">${label}</label>
				<div class="input-group input-group-merge">
					<span class="input-group-text">SZ (+268)</span>
		      <input type="${type}" id="${id}" class="form-control" placeholder="${placeholder}" />
				</div>
      </div>
    </div>
  `;
}

// Function to generate select fields
function generateSelectField(id, label, options) {
  const optionsHtml = options.map(option => `<option value="${option}">${option}</option>`).join('');
  return `
    <div class="row transaction-modal-row">
      <div class="col mb-3">
        <label for="${id}" class="form-label transaction-modal-label">${label}</label>
        <select id="${id}" class="form-select form-control">
          ${optionsHtml}
        </select>
      </div>
    </div>
  `;
}

//object to store user input
var userInputObj = new Object();

//Function to get input
function getUserInput(){
	userInputObj.payFrom        = document.getElementById("payFrom").value;
	userInputObj.payTo          = document.getElementById("payTo").value;
	userInputObj.fName          = document.getElementById("fname").value;
	userInputObj.lName          = document.getElementById("lname").value;
	userInputObj.phone          = document.getElementById("phone").value;
	userInputObj.nationalId     = document.getElementById("pin").value;
	userInputObj.reference      = document.getElementById("ref").value;
	userInputObj.validityPeriod = document.getElementById("validity").value;
	userInputObj.amount         = document.getElementById("amount").value;
	//to generated based on amount
	userInputObj.serviceCharge  = calcServiceCharge(userInputObj.amount);
	userInputObj.totalAmount    = (Number(userInputObj.amount) + Number(userInputObj.serviceCharge)).toFixed(2);
	
	showUserInput();
}

//Function to display user input
function showUserInput(){
	document.getElementById("fullname").innerText   = userInputObj.fName + ' ' + userInputObj.lName;
	document.getElementById("phoneC").innerText     = userInputObj.phone;
	document.getElementById("pFrom").innerText      = userInputObj.payFrom;
	document.getElementById("pTo").innerText        = userInputObj.payTo;
	document.getElementById("nationalID").innerText = userInputObj.nationalId;
	document.getElementById("refer").innerText      = userInputObj.reference;
	document.getElementById("validityP").innerText  = userInputObj.validityPeriod;
	document.getElementById("amountP").innerText    = userInputObj.amount;
	document.getElementById("charge").innerText     = userInputObj.serviceCharge;
	document.getElementById("sum").innerText        = userInputObj.totalAmount;
}

function validateInput(){
	var valid       = true;
	var emptyFields = [];

	if (userInputObj.fName == ''){
		valid = false;
		emptyFields.push(" First name");
	}
	if (userInputObj.lName == ''){
		valid = false;
		emptyFields.push(" Last name");
	}
	if (userInputObj.phone == '' || userInputObj.phone.length != 8){
		valid = false;
		emptyFields.push(" Phone number");
	}
	if (userInputObj.reference == ''){
		valid = false;
		emptyFields.push(" Reference");
	}
	if (userInputObj.amount == ''){
		valid = false;
		emptyFields.push(" Amount payable");
	}

	if (!valid) {
		var errorMsg = `<p>Please enter the following required fields:${emptyFields.toString()}</p>`;
		showErrorMsgToast(errorMsg);
	}
	
	return valid;
}

//Function to determine pricing
function calcServiceCharge(amount){
	var charge = 0.0;
	
	if (amount > 0 && amount <= 500){
		charge = 20;
	}else if (amount > 500 && amount <= 2000){
		charge = 40;
	}else if (amount > 2000 && amount <= 4000){
		charge = 60;
	}else if (amount > 4000){
		charge = 80;
	}
	
	return charge;
}

//Function to initiate transaction
function initiateTransaction(){
	//checkboxes - take as boolean values
	var terms          = document.getElementById("terms-conditions").checked;
	var confirm        = document.getElementById("confirm").checked;
	
	if (validateInput()){
		if (!terms || !confirm) {
			var errorMsg = '<p>You have to accept terms & conditions and confirm the information you gave.</p>'
			showErrorMsgToast(errorMsg);
		} else {
			$.ajax({
			method: "POST",
			url: "http://domain.com/api/",
			data: JSON.stringify(userInputObj),
			dataType: "jsonp"
			}).done(function(data){
				//if the call is successful
				console.log(data);
			}).fail(function(jqXHR, textStatus, errorThrown){
				//if the call is not successful
			}).always(function(){
				//runs all the time
				console.log(JSON.stringify(userInputObj));
				
				$("#modalToggle4").modal("hide");
				const modal = new bootstrap.Modal('#tStarted');
				modal.show();
			});
		}
	}
}



// Inject the modals into the DOM element with the ID 'newTransaction'
document.getElementById("newTransaction").innerHTML = `${popUp1}${popUp2}${popUp3}${popUp4}${errorPopUp}${tStarted}`;
