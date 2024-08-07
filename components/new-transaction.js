modalGroup = `<div id="taskStarted"></div>`;

numAccordion = `
<div class="accordion mb-3 mt-3" id="numAccordion">
	<div class="card accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        type="button"
        class="accordion-button collapsed transaction-modal-btn btn btn-xs"
        data-bs-toggle="collapse"
        data-bs-target="#accordionOne"
        aria-expanded="true"
        aria-controls="accordionOne"
        style="color:blue"
      >
        Pay from a different phone number (Optional)
      </button>
    </h2>

    <div
      id="accordionOne"
      class="accordion-collapse collapse"
      data-bs-parent="#numAccordion"
    >
      <div class="accordion-body">
        ${generatePhoneInputField("alt-phone", "Alternative Phone Number", "Enter Phone Number", "number")}
      </div>
    </div>
  </div>
</div>
`;

// Define the HTML for Modal 1
popUp1 = `
  <div class="modal fade" id="modalToggle" aria-labelledby="modalToggleLabel" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog">
      <form class="modal-content transaction-modal-content">
        
        <div class="modal-body transaction-modal-body">
        	<div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">PAYMENT DETAILS</h5>
          </div><br>

		  		${generateSelectField("payFrom", "Pay From", ["MoMo", "Unayo", "Emali"], "disabled")}
		  		${numAccordion}
          ${generateSelectField("payTo", "Pay Into", ["MoMo", "Unayo", "Emali"], "disabled")}
          ${generateInputField("fname", "First Name", "Enter First Name", "text")}
          ${generateInputField("lname", "Last Name", "Enter Last Name", "text")}
        </div>
        <div class="modal-footer transaction-modal-footer">

	        <div class="col">
		        <div class="d-flex mb-3">
		          <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-dismiss="modal">
								<span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
						  </button>
						</div>
					</div>
					<div class="col">
						<div class="d-flex mb-3">
		          <button style="white-space: nowrap;" type="button" class="btn btn-primary flex-fill fw-bold transaction-modal-btn" data-bs-target="#modalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
		            Next <span class="tf-icons bx bx-caret-right"></span>&nbsp;
		          </button>
		        </div>
        	</div>
        
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

          <div class="col">
		        <div class="d-flex mb-3">
		          <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-target="#modalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">
								<span class="tf-icons bx bx-caret-left"></span>&nbsp; Back
						  </button>
						</div>
					</div>
					<div class="col">
						<div class="d-flex mb-3">
		          <button style="white-space: nowrap;" type="button" class="btn btn-primary flex-fill fw-bold transaction-modal-btn" data-bs-target="#modalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">
		            Next <span class="tf-icons bx bx-caret-right"></span>&nbsp;
		          </button>
		        </div>
        	</div>

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

          <div class="col">
		        <div class="d-flex mb-3">
		          <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-target="#modalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
								<span class="tf-icons bx bx-caret-left"></span>&nbsp; Back
						  </button>
						</div>
					</div>
					<div class="col">
						<div class="d-flex mb-3">
		          <button style="white-space: nowrap;" onclick="getUserInput()" type="button" class="btn btn-primary flex-fill fw-bold transaction-modal-btn" data-bs-target="#modalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">
		            <span class="tf-icons bx bx-check-double"></span>&nbsp; Confirm
		          </button>
		        </div>
        	</div>

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
        <li class="list-group-item transaction-modal-label">FULL NAME: <strong style="color:blue;" id="fullname"></strong></li>
				<li class="list-group-item transaction-modal-label">PHONE NUMBER: <strong style="color:blue;" id="phoneC"></strong></li>
				<li class="list-group-item transaction-modal-label">ID: <strong style="color:blue;" id="nationalID"></strong></li>
				<li class="list-group-item transaction-modal-label">PAY FROM: <strong style="color:blue;" id="pFrom"></strong></li>
				<li id="alt_sender" style="display: none;" class="list-group-item transaction-modal-label">PAY FROM NUMBER: <strong style="color:blue;" id="alt_sender_phone"></strong></li>
				<li class="list-group-item transaction-modal-label">PAY INTO: <strong style="color:blue;" id="pTo"></strong></li>
				<li class="list-group-item transaction-modal-label">REFERENCE: <strong style="color:blue;" id="refer"></strong></li>
				<li class="list-group-item transaction-modal-label">AMOUNT PAYABLE: E <strong style="color:blue;" id="amountP"></strong></li>
				<li class="list-group-item transaction-modal-label">SERVICE CHARGE: E <strong style="color:blue;" id="charge"></strong></li>
				<li class="list-group-item transaction-modal-label">TOTAL: E <strong style="color:blue;" id="sum"></strong></li>
				<li class="list-group-item transaction-modal-label">VALIDITY PERIOD (DAYS): <strong style="color:blue;" id="validityP"></strong></li>
				<li class="list-group-item"></li>
       </ul>

			<div class="form-check">
                <input class="form-check-input" type="checkbox" id="terms-conditions"/>
                <label class="form-check-label" for="terms-conditions">
					I agree to
                    <a href="#" data-bs-target="#termsModal" data-bs-toggle="modal"><u>terms & conditions</u></a>
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
			
				  <div class="col">
		        <div class="d-flex mb-3">
		          <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-target="#modalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">
								<span class="tf-icons bx bx-caret-left"></span>&nbsp; Edit
						  </button>
						</div>
					</div>
					<div class="col">
						<div class="d-flex mb-3">
		          <button onclick="initiateTransaction()" style="white-space: nowrap;" type="button" class="btn btn-primary flex-fill fw-bold transaction-modal-btn">
		            Proceed <span class="tf-icons bx bx-caret-right"></span>&nbsp;
		          </button>
		        </div>
        	</div>

        </div>
      </form>
    </div>
  </div>
`;

terms = `
<div class="modal fade" id="termsModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen transaction-modal-dialog" role="document">
    <div class="modal-content transaction-modal-content">

      <div class="modal-body transaction-modal-body">
      	<div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">TERMS & CONDITIONS</h5>
        </div><br>

        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
          at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
          auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
          at eros.
        </p>
      </div>
      <div class="modal-footer transaction-modal-footer">
        <button type="button" id="closeTerms" class="btn btn-danger flex-fill fw-bold transaction-modal-btn">
          Close
        </button>
      </div>
    </div>
  </div>
</div>`;

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
					<span class="input-group-text">+268</span>
		      <input type="${type}" id="${id}" class="form-control" placeholder="${placeholder}" />
				</div>
      </div>
    </div>
  `;
}

// Function to generate select fields
function generateSelectField(id, label, options, state=null) {
  const optionsHtml = options.map(option => `<option value="${option}">${option}</option>`).join('');
  return `
    <div class="row transaction-modal-row">
      <div class="col mb-3">
        <label for="${id}" class="form-label transaction-modal-label">${label}</label>
        <select id="${id}" class="form-select form-control" ${state}>
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
	userInputObj.alt_sender_phone = document.getElementById("alt-phone").value;
	userInputObj.pay_from         = document.getElementById("payFrom").value;
	userInputObj.pay_to           = document.getElementById("payTo").value;
	userInputObj.first_name       = document.getElementById("fname").value;
	userInputObj.last_name        = document.getElementById("lname").value;
	userInputObj.phone            = document.getElementById("phone").value;
	userInputObj.national_id      = document.getElementById("pin").value;
	userInputObj.reference        = document.getElementById("ref").value;
	userInputObj.validity_period  = document.getElementById("validity").value;
	userInputObj.amount           = document.getElementById("amount").value;
	//to generated based on amount
	userInputObj.service_charge   = calcServiceCharge(userInputObj.amount);
	userInputObj.total_amount     = (Number(userInputObj.amount) + Number(userInputObj.service_charge)).toFixed(2);
	
	showUserInput();
}

//Function to display user input
function showUserInput(){
	document.getElementById("fullname").innerText   = userInputObj.first_name + ' ' + userInputObj.last_name;
	document.getElementById("phoneC").innerText     = userInputObj.phone;
	document.getElementById("pFrom").innerText      = userInputObj.pay_from;
	document.getElementById("pTo").innerText        = userInputObj.pay_to;
	document.getElementById("nationalID").innerText = userInputObj.national_id;
	document.getElementById("refer").innerText      = userInputObj.reference;
	document.getElementById("validityP").innerText  = userInputObj.validity_period;
	document.getElementById("amountP").innerText    = userInputObj.amount;
	document.getElementById("charge").innerText     = userInputObj.service_charge;
	document.getElementById("sum").innerText        = userInputObj.total_amount;

	if (userInputObj.alt_sender_phone.length == 8) {
		let elem = document.getElementById("alt_sender");
		$(elem).css("display", "block");
		document.getElementById("alt_sender_phone").innerText = userInputObj.alt_sender_phone;
	}
}

function validateInput(){
	var valid       = true;
	var emptyFields = [];

	if (!userInputObj.first_name){
		valid = false;
		emptyFields.push(" First name");
	}
	if (!userInputObj.last_name){
		valid = false;
		emptyFields.push(" Last name");
	}
	if (!userInputObj.phone || userInputObj.phone.length !== 8){
		valid = false;
		emptyFields.push(" Phone number");
	}
	if (!userInputObj.reference){
		valid = false;
		emptyFields.push(" Reference");
	}
	if (!userInputObj.amount){
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
	if (amount > 0 && amount <= 10){
		charge = 1;
	}else if (amount > 10 && amount <= 500){
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

			createNewTransaction(userInputObj);
		}
	}
}

function createNewTransaction(userInput) {
  const raw = JSON.stringify({
  	"new": 1,
    "sender_phone": LOGGED_IN_PHONE,
    "alt_sender_phone": userInputObj.alt_sender_phone,
    "first_name": userInputObj.first_name,
    "last_name": userInputObj.last_name,
    "national_id": userInputObj.national_id,
    "phone": userInputObj.phone,
    "pay_from": userInputObj.pay_from,
    "pay_to": userInputObj.pay_to,
    "validity_period": userInputObj.validity_period,
    "amount": userInputObj.amount,
    "service_charge": userInputObj.service_charge,
    "total_amount": userInputObj.total_amount,
    "reference": userInputObj.reference,
  });

  var req = $.ajax({
    "url": SERVER_URL + "transaction",
    "method": "POST",
    "data": raw,
    "headers": {"Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
               }
    });

  	$("#modalToggle4").modal("hide");
    let title = "Process Started";
    let body  = "The transaction has been initiated. You will received a notification advising next steps.";
    let elem = taskStartedModal(title, body);

  req.done(function(data){
      //if the call is successful
  		console.log(data);
      
      elem.addEventListener('hidden.bs.modal', () => {
        let msg = data.message != null ? data.message : data.error;

        if (msg) {showErrorMsgToast(msg);}
        else {showErrorMsgToast("Unknown error occured.");}
        
      });

    });

  req.fail(function(jqXHR, textStatus, errorThrown){
  		console.log(jqXHR);
  		sessionTimedOut(jqXHR);
      showErrorMsgToast(jqXHR.responseText);
    });
}



// Inject the modals into the DOM element with the ID 'newTransaction'
document.getElementById("newTransaction").innerHTML = `${popUp1}${popUp2}${popUp3}${popUp4}${errorPopUp}${modalGroup}${terms}`;

document.getElementById("closeTerms").addEventListener('click', () => {
	$("#termsModal").modal("hide");
	$("#modalToggle4").modal("show");
});