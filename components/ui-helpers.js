//global variable to keep track which page is opened
var currentPage = "";
setCurrentPage(currentPage);

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
	console.log("Current Page:" + currentPage);
}
	
// Function to create the transaction button HTML
function createTransactionButton() {
  return `
    <div class="buy-now">
      <a href="#" class="btn btn-primary btn-buy-now fw-bold" data-bs-toggle="modal" data-bs-target="#modalToggle">
		New Transaction
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
  script.async = true;
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

// Variable to track which table row was clicked
var clickedRow = 0;

//Set clickedRow to ID of clicked table row
//used by transaction-content.js & cashout-content.js
function setClickedRow(clickedID){
	clickedRow = clickedID;
}

