//global variable to keep track which page is opened
var currentPage = "";
setCurrentPage(currentPage);
var INBOX = 0;

function createAndAppendScript(id, scriptSource){
	// Remove existing script element if any
	const existingScript = document.getElementById(id);
	if (existingScript) {
		existingScript.remove();
	}

	// Create new script element
	const script = document.createElement("script");
	script.src = scriptSource;
	script.async = true;
	script.id = id;

	// Append script element to the document body
	document.body.appendChild(script);
}

function changeContent(page) {
	let scriptSrc = "";

	switch (page) {
		case '':
		case 'login':
		case 'otp':
			scriptSrc = "components/auth.js";
			break;
		case 'home':
		case 'profile':
		case 'cashout':
		case 'verify':
		case 'transactions':
		case 'notifications':
			scriptSrc = "components/main-body.js";
			break;
		default:
			console.error("Unsupported page:", page);
			return; // Exit function if page is unsupported
	}
	createAndAppendScript("dynamic-script", scriptSrc);
}
	
function setCurrentPage(page){
	currentPage = page;
	changeContent(currentPage);
}
	
// Function to create the transaction button HTML
function createTransactionButton() {
  return `
    <div class="buy-now">
      <a href="#" class="btn rounded-pill btn-icon btn-primary btn-buy-now fw-bolder" data-bs-toggle="modal" data-bs-target="#modalToggle">
		<span class="tf-icons bx bx-plus"></span>
	  </a>
    </div>
    <div id="newTransaction"></div>
  `;
}

// Function to load the main script
//Ensure correct functioning of layout menu toggle and password visibility toggle
function loadMainScript() {
  const existingScript = document.getElementById("main-script");
  if (existingScript) {
	existingScript.remove();
  }
  
  const script = document.createElement('script');
  script.src = 'assets/js/main.js';
  script.defer = true;
  script.id = "main-script";
  document.body.appendChild(script);
}

// Function to load the transaction script
function loadTransactionScript() {
  const script = document.createElement('script');
  script.src = 'components/new-transaction.js';
  script.async = true;
  document.body.appendChild(script);
}

// Inject the transaction button into the HTML
function injectTransactionButton() {
  const transactionContainer = document.getElementById('transaction');
  if (transactionContainer) {
    transactionContainer.innerHTML = createTransactionButton();
    loadTransactionScript();
  } else {
    console.error('Transaction container element not found.');
  }
}

//Remove the transaction button when it is not needed
function removeTransactionButton() {
  const transactionContainer = document.getElementById('transaction');
  if(transactionContainer){
	transactionContainer.innerHTML = "";
  }
}

errorPopUp = `
	<div
    class="bs-toast toast toast-placement-ex m-2"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-delay="2000"
		id = "errorT1"
	>
    <div class="toast-header">
      <i class="bx bx-bell me-2"></i>
      <div class="me-auto fw-semibold">Alert</div>
      <small>Message</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" id="toast-msg"></div>
  </div>`;

function showErrorMsgToast(message){
	document.getElementById("toast-msg").innerHTML = message;
	const toastPlacementEx = document.querySelector('.toast-placement-ex');
	let selectedType, selectedPlacement, toastPlacement;
		
	selectedType = "bg-secondary";
	selectedPlacement = "top-0 start-50 translate-middle-x".split(' ');

	toastPlacementEx.classList.add(selectedType);
	DOMTokenList.prototype.add.apply(toastPlacementEx.classList, selectedPlacement);
	toastPlacement = new bootstrap.Toast(toastPlacementEx);
	toastPlacement.show();
}

function createLoginLoader() {
	var loader = document.getElementById("loader");
  loader.innerHTML = `<div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>`;
}

function hideLoginLoader() {
	var loader = document.getElementById("loader");
  loader.innerHTML = ``;
}

function createGenericLoader(id) {
	var loader = document.getElementById(id);
  loader.innerHTML = `
    <div class="spinner-border spinner-border-sm text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `;
}

function hideGenericLoader(id) {
	var loader = document.getElementById(id);
  loader.innerHTML = ``;
}

function taskStartedModal(title, message) {
  let modal = `
  <div class="modal fade" id="taskStartedModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog" role="document">
      <div class="modal-content transaction-modal-content">

        <div class="modal-body transaction-modal-body">
          <div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">${title}</h5>
          </div><br>

          <p>
            ${message}
          </p>
        </div>

        <div class="modal-footer transaction-modal-footer" style="text-align: end;">
          <button type="button" class="btn btn-success transaction-modal-btn" data-bs-dismiss="modal">
            Finish
          </button>
        </div>
      </div>
    </div>
  </div>`;

  document.getElementById("taskStarted").innerHTML = modal;
  $("#taskStartedModal").modal("show");

  return document.getElementById("taskStartedModal");  
}

function sessionTimedOut(jqXHR) {
	if (jqXHR.responseJSON.error == "Unauthorized")
  {
    setCurrentPage('login');
  }
}

function logout() {
  TOKEN = '';
  LOGGED_IN_PHONE = 0;
  location.reload(true);
}
