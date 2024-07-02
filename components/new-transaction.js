errorPopUp = `
	<div
    class="bs-toast toast toast-placement-ex m-2"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-delay="2000"
	id = "errorT1">
                <div class="toast-header">
                  <i class="bx bx-bell me-2"></i>
                  <div class="me-auto fw-semibold">Error</div>
                  <small>Error message</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">You have to accept terms & conditions and confirm the information you gave.</div>
    </div>`;

// Define the HTML for Modal 1
popUp1 = `
  <div class="modal fade" id="modalToggle" aria-labelledby="modalToggleLabel" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header my-popup-header">
          <h5 class="modal-title my-popup-h5" id="backDropModalTitle">Recipient Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
		  ${generateSelectField("payFrom", "Pay From", ["MoMo", "Unayo", "Emali"])}
          ${generateSelectField("payTo", "Pay Into", ["MoMo", "Unayo", "Emali"])}
          ${generateInputField("fname", "First Name", "Enter First Name", "text")}
          ${generateInputField("lname", "Last Name", "Enter Last Name", "text")}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger fw-bold" data-bs-dismiss="modal">
				<span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
		  </button>
          <button type="button" class="btn btn-primary fw-bold" data-bs-target="#modalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
            <span class="tf-icons bx bx-chevron-right"></span>&nbsp; Next
          </button>
        </div>
      </form>
    </div>
  </div>
`;

// Define the HTML for Modal 2
popUp2 = `
  <div class="modal fade" id="modalToggle2" aria-labelledby="modalToggleLabel2" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header my-popup-header">
          <h5 class="modal-title my-popup-h5" >Payment Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
		  ${generatePhoneInputField("phone", "Phone Number", "Enter Phone Number", "number")}
          ${generateInputField("pin", "National ID", "Optional", "number")}
          ${generateInputField("ref", "Reference", "Reference", "text")}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger fw-bold" data-bs-target="#modalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">
            <span class="tf-icons bx bx-chevron-left"></span>&nbsp; Back
          </button>
          <button type="button" class="btn btn-primary fw-bold" data-bs-target="#modalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">
            <span class="tf-icons bx bx-chevron-right"></span>&nbsp; Next
          </button>
        </div>
      </form>
    </div>
  </div>
`;

// Define the HTML for Modal 3
popUp3 = `
  <div class="modal fade" id="modalToggle3" aria-labelledby="modalToggleLabel3" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header my-popup-header">
          <h5 class="modal-title my-popup-h5">Payment Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
		  ${generateSelectField("validity", "Validity Period (Days)", [10,15,30,45,60,90,180])}
		  ${generateInputField("amount", "Amount Payable", "Amount Payable (SZL)", "number")}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger fw-bold" data-bs-target="#modalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
            <span class="tf-icons bx bx-chevron-left"></span>&nbsp; Back
          </button>
          <button onclick="getUserInput()" type="button" class="btn btn-primary fw-bold" data-bs-target="#modalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">
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
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header my-popup-header">
          <h5 class="modal-title my-popup-h5">Confirm Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
		   <ul class="list-group list-group-flush">
                <li class="list-group-item">Full Name: <strong id="fullname"></strong></li>
				<li class="list-group-item">Phone Number: <strong id="phoneC"></strong></li>
				<li class="list-group-item">ID: <strong id="nationalID"></strong></li>
				<li class="list-group-item">Pay From: <strong id="pFrom"></strong></li>
				<li class="list-group-item">Pay Into: <strong id="pTo"></strong></li>
				<li class="list-group-item">Reference: <strong id="refer"></strong></li>
				<li class="list-group-item">Amount Payable: <strong id="amountP"></strong></li>
				<li class="list-group-item">Service Charge: <strong id="charge"></strong></li>
				<li class="list-group-item">Total: <strong id="sum"></strong></li>
				<li class="list-group-item">Validity Period (Days): <strong id="validityP"></strong></li>
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
        <div class="modal-footer row mt-3">
			<div class="d-grid gap-2 col-lg-12 mx-auto">
			  <button type="button" class="btn btn-info btn-lg fw-bold" data-bs-target="#modalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">
				Edit Transaction
			  </button>
			  <button onclick="initiateTransaction()" type="button" class="btn btn-primary btn-lg fw-bold">
				Initiate Transaction
			  </button>
			</div>
        </div>
      </form>
    </div>
  </div>
`;

tStarted = `
	<div class="modal fade" id="tStarted" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header my-popup-header">
                    <h5 class="modal-title my-popup-h5">Transaction Initiated</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						The transaction has been initiated. You will received a notification prompting further steps.
                    </p>
                </div>
				<div class="modal-footer">
                    <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
			</div>
		</div>
	</div>
	`;

// Function to generate input fields
function generateInputField(id, label, placeholder, type) {
  return `
    <div class="row">
      <div class="col mb-3">
        <label for="${id}" class="form-label">${label}</label>
        <input type="${type}" id="${id}" class="form-control" placeholder="${placeholder}"/>
      </div>
    </div>
  `;
}

// Function to generate phone input fields
function generatePhoneInputField(id, label, placeholder, type) {
  return `
    <div class="row">
      <div class="col mb-3">
        <label for="${id}" class="form-label">${label}</label>
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
    <div class="row">
      <div class="col mb-3">
        <label for="${id}" class="form-label">${label}</label>
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
	
	if (!terms || !confirm){
		showErrorMsg();
	}else{
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

function showErrorMsg(){
	const toastPlacementExample = document.querySelector('.toast-placement-ex');
	let selectedType, selectedPlacement, toastPlacement;
		
	selectedType = "bg-danger";
	selectedPlacement = "top-0 start-50 translate-middle-x".split(' ');

	toastPlacementExample.classList.add(selectedType);
	DOMTokenList.prototype.add.apply(toastPlacementExample.classList, selectedPlacement);
	toastPlacement = new bootstrap.Toast(toastPlacementExample);
	toastPlacement.show();
}

// Inject the modals into the DOM element with the ID 'newTransaction'
document.getElementById("newTransaction").innerHTML = `${popUp1}${popUp2}${popUp3}${popUp4}${errorPopUp}${tStarted}`;
