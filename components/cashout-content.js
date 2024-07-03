sellerTransactions = `
			<div class="card">
                <h5 class="card-header">My Transactions</h5>
                <div class="table-responsive text-nowrap">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Voucher Code</th>
						<th>Amount (SZL)</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0" id="cashoutTableBody">
                    </tbody>
                  </table>
                </div>
              </div>
			  
			<div id="cashoutTransaction"></div>
	`;

transactionTab = `
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account /</span> Cashout</h4>
${sellerTransactions} `;
	
document.getElementById("content").innerHTML = transactionTab;
getReceivedTransactions();

function getReceivedTransactions(){
	
	let parsed = JSON.parse(transactionJson);
	showReceivedTransactions(parsed["transactions"]);
	
}

/*
* LOGGED_IN_PHONE - is defined in login.js
* setClickedRow(this.id) - is defined in ui-helpers.js
*/
function showReceivedTransactions(arrayObject) {
	let tb = document.getElementById("cashoutTableBody");
	
	for (let i = 0; i < arrayObject.length; i++) {
		if (arrayObject[i].phone == LOGGED_IN_PHONE){
			let row = `
			<tr id="${arrayObject[i].id}" onclick="setClickedRow(this.id)" data-bs-toggle="modal" data-bs-target="#cashoutModal">
				<td><strong> ${arrayObject[i].voucherCode} </strong></td>
				<td>${arrayObject[i].amount}</td>
			</tr>`;
						
			tb.insertAdjacentHTML('beforeend', row);
		}else{
			continue;
		}
	}
}

// Remove existing script element if any
existingTScript = document.getElementById("cashout-script");
if (existingTScript) {
	existingTScript.remove();
}

// Create new script element
tscript = document.createElement("script");
tscript.src = "components/cashout-modal.js";
tscript.async = true;
tscript.id = "cashout-script";

// Append script element to the document body
document.body.appendChild(tscript);