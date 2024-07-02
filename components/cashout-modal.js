cashoutTransaction = `
					<div class="modal fade" id="cashoutModal" tabindex="-1" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header my-popup-header">
                                <h5 class="modal-title my-popup-h5">Cashout</h5>
								
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body" id="tt">
							  
								<div class="row">
                                  <div class="col mb-3" id="cStatus">
                                    
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="vCode" class="form-label">Voucher Code</label>
                                    <input type="text" id="vCode" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="sPhone" class="form-label">Sender Phone Number</label>
                                    <input type="text" id="sPhone" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="cashoutAmount" class="form-label">Amount Payable (E)</label>
                                    <input type="text" id="cashoutAmount" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="cDaysLeft" class="form-label">Day Remaining</label>
                                    <input type="text" id="cDaysLeft" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="transaction-pin" class="form-label">PIN</label>
                                    <input type="text" maxlength="5" id="transaction-pin" placeholder="00000" class="form-control"/>
									<div class="form-text" style="color:red;">
										Enter the PIN your got from sender.
									</div>
                                  </div>
                                </div>
                                
                              </div>
                              <div class="modal-footer row">
							    <div class="d-grid gap-2 col-lg-12 mx-auto">
									<button type="button" class="btn btn-primary btn-lg fw-bold" onclick="initiateCashout()">
										Cashout
									</button>
								</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
	`;
	
cashoutStarted = `
	<div class="modal fade" id="cashoutStarted" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header my-popup-header">
                    <h5 class="modal-title my-popup-h5">Cashout Initiated</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						The cashout process has been initiated. You will received an SMS if cashout was completed successfully.
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
	
daysLeftError = `
	<div class="modal fade" id="daysLeftError" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header my-popup-header">
                    <h5 class="modal-title my-popup-h5">Validity Period Not Over</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						Cashout not available at the moment.
                    </p>
                </div>
				<div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                        OK
                    </button>
                </div>
			</div>
		</div>
	</div>
	`;

inputError = `
	<div class="modal fade" id="inputError" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header my-popup-header">
                    <h5 class="modal-title my-popup-h5">Invalid PIN</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						Please enter a 5 digit PIN.
                    </p>
                </div>
				<div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                        OK
                    </button>
                </div>
			</div>
		</div>
	</div>
	`;

document.getElementById("cashoutTransaction").innerHTML = `${cashoutTransaction}${cashoutStarted}${inputError}${daysLeftError}`;
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
			document.getElementById("cStatus").innerHTML = `<span class="badge rounded-pill bg-success">Cashout Available</span>`;
		}else{
			document.getElementById("cStatus").innerHTML = `<span class="badge rounded-pill bg-danger">Cashout Not Available Yet</span>`;
		}
	});
}

function initiateCashout(){
	let pin = document.getElementById("transaction-pin").value;
	
	if (pin.length < 5){
		const errorModal = new bootstrap.Modal('#inputError');
		errorModal.show();
	}else{
		if (document.getElementById("cDaysLeft").value > 0) {
			const modal = new bootstrap.Modal('#daysLeftError');
			modal.show();
		}else{
			$("#cashoutModal").modal("hide");
			
			const modal = new bootstrap.Modal('#cashoutStarted');
			modal.show();
		}
	}
}