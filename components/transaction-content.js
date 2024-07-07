buyerTransactions = `
    <div class="table-responsive text-nowrap">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Recepient</th>
			<th>Phone</th>
          </tr>
        </thead>
        <tbody class="table-border-bottom-0" id="sentTableBody"></tbody>
      </table>
    </div>
  
	<div id="transactionInfo"></div>
`;
	
sellerTransactions = `
    <div class="table-responsive text-nowrap">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Sender Phone</th>
			<th>Amount (SZL)</th>
          </tr>
        </thead>
        <tbody class="table-border-bottom-0" id="receivedTableBody">
          
        </tbody>
      </table>
    </div>
  
	<div id="transactionInfo"></div>
	<div id="transactionInfo2"></div>
`;

transactionTab = `
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account /</span> Transactions</h4>
<div class="nav-align-top mb-4">
        <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
            <li class="nav-item">
                <button
                type="button"
                class="nav-link active"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#buyerTransaction"
                aria-controls="buyerTransaction"
                aria-selected="true"
                >
                    <i class="tf-icons bx bx-user-minus"></i> Sent
                </button>
            </li>
            <li class="nav-item">
                <button
                type="button"
                class="nav-link"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#sellerTransaction"
                aria-controls="sellerTransaction"
                aria-selected="false"
                >
                    <i class="tf-icons bx bx-user-plus"></i> Received
                </button>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="buyerTransaction" role="tabpanel">
                <!--tab content here-->
				${buyerTransactions}
            </div>
            <div class="tab-pane fade" id="sellerTransaction" role="tabpanel">
                <!--tab content here-->
				${sellerTransactions}
            </div>
        </div>
    </div>
	`;
	
document.getElementById("content").innerHTML = transactionTab;
getTransactions();

function getTransactions(){
	
	let parsed = JSON.parse(transactionJson);
	displaySentTransactions(parsed["transactions"]);
	displayReceivedTransactions(parsed["transactions"]);
	
}

/*
* LOGGED_IN_PHONE - is defined in login.js
* setClickedRow(this.id) - is defined in ui-helpers.js
*/
function displaySentTransactions(arrayObject) {
	let tb = document.getElementById("sentTableBody");
	
	for (let i = 0; i < arrayObject.length; i++) {
		if (arrayObject[i].senderPhone == LOGGED_IN_PHONE){
			let row = `
			<tr id="${arrayObject[i].id}" onclick="setClickedRow(this.id)" data-bs-toggle="modal" data-bs-target="#tInfoModal">
				<td><strong>${arrayObject[i].fname} ${arrayObject[i].lname}</strong></td>
				<td>${arrayObject[i].phone}</td>
			</tr>`;
			
			tb.insertAdjacentHTML('beforeend', row);
		}else{
			continue;
		}
	}
}

function displayReceivedTransactions(arrayObject) {
	let tb = document.getElementById("receivedTableBody");
	
	for (let i = 0; i < arrayObject.length; i++) {
		if (arrayObject[i].phone == LOGGED_IN_PHONE){
			let row = `
			<tr id="${arrayObject[i].id}" onclick="setClickedRow(this.id)" data-bs-toggle="modal" data-bs-target="#tInfoModal2">
				<td><strong> ${arrayObject[i].senderPhone} </strong></td>
				<td>${arrayObject[i].amount}</td>
			</tr>`;
			
			tb.insertAdjacentHTML('beforeend', row);
		}else{
			continue;
		}
	}
}

// Remove existing script element if any
existingTScript = document.getElementById("transaction-info-script");
if (existingTScript) {
	existingTScript.remove();
}

// Create new script element
tscript = document.createElement("script");
tscript.src = "components/transaction-info.js";
tscript.async = true;
tscript.id = "transaction-info-script";

// Append script element to the document body
document.body.appendChild(tscript);