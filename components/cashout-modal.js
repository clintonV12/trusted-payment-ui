cashoutTransaction = `
	<div class="modal fade" id="cashoutModal" tabindex="-1" aria-hidden="true">
		  <div class="modal-dialog transaction-modal-dialog" role="document">
			<div class="modal-content transaction-modal-content">
			  
			  <div class="modal-body transaction-modal-body" id="tt">
			  	<div class="transaction-modal-header">
		          <h5 class="modal-title transaction-modal-title">CASHOUT</h5>
		        </div><br>
			  
				<div class="row transaction-modal-row">
				  <div class="col mb-3" id="cStatus"></div>
				</div>
				<div class="row transaction-modal-row">
				  <div class="col mb-3">
					<label for="vCode" class="form-label transaction-modal-label">Voucher Code</label>
					<input type="text" id="vCode" class="form-control" readonly/>
				  </div>
				</div>
				<div class="row transaction-modal-row">
				  <div class="col mb-3">
					<label for="sPhone" class="form-label transaction-modal-label">Sender Phone Number</label>
					<input type="text" id="sPhone" class="form-control" readonly/>
				  </div>
				</div>
				<div class="row transaction-modal-row">
				  <div class="col mb-3">
					<label for="cashoutAmount" class="form-label transaction-modal-label">Amount Payable (E)</label>
					<input type="text" id="cashoutAmount" class="form-control" readonly/>
				  </div>
				</div>
				<div class="row transaction-modal-row">
				  <div class="col mb-3">
					<label for="cDaysLeft" class="form-label transaction-modal-label">Day Remaining</label>
					<input type="text" id="cDaysLeft" class="form-control" readonly/>
				  </div>
				</div>
				<div class="row transaction-modal-row">
				  <div class="col mb-3">
					<label for="transaction-pin" class="form-label transaction-modal-label">PIN</label>
					<input type="number" maxlength="5" id="transaction-pin" placeholder="Enter the PIN your got from sender." class="form-control"/>
					
				  </div>
				</div>
				
			  </div>
			  <div class="modal-footer transaction-modal-footer">
				<button type="button" class="btn btn-danger transaction-modal-btn" data-bs-dismiss="modal">
		          <span class="tf-icons bx bx-x-circle"></span>&nbsp; Cancel
		        </button>
		        <button type="button" class="btn btn-primary transaction-modal-btn" onclick="initiateCashout()">
		          <span class="tf-icons bx bx-check-double"></span>&nbsp; Proceed
		        </button>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
`;

document.getElementById("cashoutTransaction").innerHTML = `${cashoutTransaction}${errorPopUp}`;
displayClickedCashoutTransaction();

function displayClickedCashoutTransaction() {
	$('#cashoutModal').on('shown.bs.modal', function() {
		let parsed          = JSON.parse(transactionJson);
		let arrayObject     = parsed["transactions"];
		let transactionInfo = [];
		
		for (let i = 0; i < arrayObject.length; i++) {
			if (clickedRow == arrayObject[i].id){
				transactionInfo = arrayObject[i];
				break;
			}
		}
		
		document.getElementById("vCode").value         = transactionInfo.voucherCode;
		document.getElementById("sPhone").value        = transactionInfo.senderPhone;
		document.getElementById("cashoutAmount").value = transactionInfo.amount;
		
		var now          = Date.now();
		var elapsed      = now - transactionInfo.durationStart;
		var elapsedDays  = Math.round(elapsed / (1000 * 3600 *24));
		var dayRemaining = transactionInfo.validityPeriod - elapsedDays
		
		document.getElementById("cDaysLeft").value = dayRemaining;
		if (dayRemaining < 0){
			document.getElementById("cStatus").innerHTML = `<span class="badge bg-success">Cashout Available</span>`;
		}else{
			document.getElementById("cStatus").innerHTML = `<span class="badge bg-secondary">Cashout Not Available Yet</span>`;
		}
	});
}

function initiateCashout(){
	let pin = document.getElementById("transaction-pin").value;
	
	if (pin.length != 5){
		var errorMsg = '<p>Please enter a 5 digit PIN.</p>';
        showErrorMsgToast(errorMsg);
	}else{
		if (document.getElementById("cDaysLeft").value > 0) {
			var errorMsg = '<p>Cashout not available at the moment.</p>';
        	showErrorMsgToast(errorMsg);
		}else{
			$("#cashoutModal").modal("hide");
			
			var successMsg = '<p>The cashout process has been initiated. You will received an SMS if cashout was completed successfully.</p>';
			showSuccessMsgToast(successMsg);
		}
	}
}