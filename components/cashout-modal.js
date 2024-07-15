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
				  <div class="col-md-6 col-sm-6 mb-3">
					<label for="tNumber" class="form-label transaction-modal-label">Transaction ID</label>
					<input type="text" id="tNumber" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
				  </div>
				  <div class="col-md-6 col-sm-6 mb-3">
					<label for="vCode" class="form-label transaction-modal-label">Voucher Code</label>
					<input type="text" id="vCode" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
				  </div>
				</div>
				<div class="row transaction-modal-row">
				  <div class="col-md-6 col-sm-6 mb-3">
					<label for="sPhone" class="form-label transaction-modal-label">Sender Phone</label>
					<input type="text" id="sPhone" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
				  </div>
				  <div class="col-md-6 col-sm-6 mb-3">
					<label for="cashoutAmount" class="form-label transaction-modal-label">Amount Payable (E)</label>
					<input type="text" id="cashoutAmount" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
				  </div>
				</div>
				<div class="row transaction-modal-row">
				  <div class="col mb-3">
					<label for="cDaysLeft" class="form-label transaction-modal-label">Days Remaining</label>
					<input type="text" id="cDaysLeft" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
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
		        <button type="button" class="btn btn-outline-primary transaction-modal-btn" onclick="initiateCashout()">
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

function displayClickedCashoutTransaction(arrayObject) {
	const modal = new bootstrap.Modal('#cashoutModal');
  modal.show();

	$('#cashoutModal').on('shown.bs.modal', function() {
		let transactionInfo = arrayObject;
		
		cashoutVCode = transactionInfo.voucher_code;
		cashoutTNum  = transactionInfo.transaction_number;
		cashoutTID   = transactionInfo.id;
		
		document.getElementById("vCode").value         = transactionInfo.voucher_code;
		document.getElementById("tNumber").value       = transactionInfo.transaction_number;
		document.getElementById("sPhone").value        = transactionInfo.sender_phone;
		document.getElementById("cashoutAmount").value = transactionInfo.amount;
		
		var now          = Date.now() / 1000;
		var elapsed      = now - transactionInfo.duration_start;
		var elapsedDays  = Math.round(elapsed / (1000 * 3600 *24));
		var dayRemaining = transactionInfo.validity_period - elapsedDays
		
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
			makeCashoutRequest(pin);
		}
	}
}

function makeCashoutRequest(pin) {

  const  raw = JSON.stringify({
        "cashout": 1,
        "vCode": cashoutVCode,
        "pCode": pin,
        "transaction_id": cashoutTID,
        "transaction_number": cashoutTNum
    });

  console.log(raw);
  
  var req = $.ajax({
    "url": SERVER_URL + "transaction",
    "method": "POST",
    "data": raw,
    "headers": {"Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
               }
    });

  req.done(function(data){
      //if the call is successful
      console.log(data);
      $("#cashoutModal").modal("hide");
      showErrorMsgToast(data);
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      showErrorMsgToast(textStatus.toString());
    });
}
