transactionInfo = `
					<div class="modal fade" id="tInfoModal" tabindex="-1" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header my-popup-header">
                                <h5 class="modal-title my-popup-h5">Sent Transaction Details</h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body" id="tt">
                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="Tfname" class="form-label">Recepient Full Name</label>
                                    <input type="text" id="Tfname" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="Tphone" class="form-label">Phone Number</label>
                                    <input type="text" id="Tphone" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="Tamount" class="form-label">Amount Payable (E)</label>
                                    <input type="text" id="Tamount" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="Tref" class="form-label">Reference</label>
                                    <input type="text" id="Tref" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="Tvalidity" class="form-label">Validity Period</label>
                                    <input type="text" id="Tvalidity" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="Tremaining" class="form-label">Days Remaining</label>
                                    <input type="text" id="Tremaining" class="form-control" readonly/>
                                  </div>
                                </div>
                                
                              </div>
                              <div class="modal-footer">
								<button type="button" class="btn btn-info">
									<span class="tf-icons bx bx-edit"></span>&nbsp; Edit
								</button>
								<button type="button" class="btn btn-primary" onclick="downloadSentTransaction()">
									<span class="tf-icons bx bx-download"></span>&nbsp; Download
								</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
	`;
	document.getElementById("transactionInfo").innerHTML = transactionInfo;
	
	transactionInfo2 = `
					<div class="modal fade" id="tInfoModal2" tabindex="-1" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header my-popup-header">
                                <h5 class="modal-title my-popup-h5">Received Transaction Details</h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="row">
                                  <div class="col mb-3">
                                    <label for="nameBasic" class="form-label">Recepient Full Name</label>
                                    <input type="text" id="rTfname" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="rTPhone" class="form-label">Phone Number</label>
                                    <input type="text" id="rTPhone" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="rTAmount" class="form-label">Amount Payable (E)</label>
                                    <input type="text" id="rTAmount" class="form-control" readonly/>
                                  </div>
                                </div>
								<div class="row">
                                  <div class="col mb-3">
                                    <label for="nameBasic" class="form-label">Reference</label>
                                    <input type="text" id="nameBasic" class="form-control" placeholder="Supply of computer storage devices" readonly/>
                                  </div>
                                </div>
                                
                              </div>
                              <div class="modal-footer">
								<button type="button" class="btn btn-info">
									<span class="tf-icons bx bx-send"></span>&nbsp; Share
								</button>
								<button type="button" class="btn btn-primary">
									<span class="tf-icons bx bx-download"></span>&nbsp; Download
								</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
	`;
document.getElementById("transactionInfo2").innerHTML = transactionInfo2;
	
displayClickedSentTransaction();
displayClickedReceivedTransaction();

function displayClickedSentTransaction() {
	/*
	//Open modal programmatically
	const modal = new bootstrap.Modal('#modalID');
	modal.show();
	//runs when modal is hidden
	$('#modalID').on('hidden.bs.modal', function() {
		$('#tInfoModal').modal('hide');
		console.log(clickedRow);
	});*/
	
	//runs when modal is shown
	//Use show.bs.modal to run code before modal is displayed
	$('#tInfoModal').on('shown.bs.modal', function() {
		let parsed          = JSON.parse(transactionJson);
		let arrayObject     = parsed["transactions"];
		let transactionInfo = [];
		
		for (let i = 0; i < arrayObject.length; i++) {
			if (clickedRow == arrayObject[i].id){
				transactionInfo = arrayObject[i];
				break;
			}
		}
		
		document.getElementById("Tfname").value     = transactionInfo.fname + " " + transactionInfo.lname;
		document.getElementById("Tphone").value     = transactionInfo.phone;
		document.getElementById("Tamount").value    = transactionInfo.amount;
		document.getElementById("Tref").value       = transactionInfo.ref;
		document.getElementById("Tvalidity").value  = transactionInfo.validityPeriod;
		
		var now          = Date.now();
		var elapsed      = now - transactionInfo.durationStart;
		var elapsedDays  = Math.round(elapsed / (1000 * 3600 *24));
		var dayRemaining = transactionInfo.validityPeriod - elapsedDays
		
		document.getElementById("Tremaining").value = dayRemaining;
	});
}

function displayClickedReceivedTransaction() {
	$('#tInfoModal2').on('shown.bs.modal', function() {
		let parsed          = JSON.parse(transactionJson);
		let arrayObject     = parsed["transactions"];
		let transactionInfo = [];
		
		for (let i = 0; i < arrayObject.length; i++) {
			if (clickedRow == arrayObject[i].id){
				transactionInfo = arrayObject[i];
				break;
			}
		}
		
		document.getElementById("rTfname").value  = transactionInfo.fname + " " + transactionInfo.lname;
		document.getElementById("rTPhone").value  = transactionInfo.phone;
		document.getElementById("rTAmount").value = transactionInfo.amount;
		
		var now          = Date.now();
		var elapsed      = now - transactionInfo.durationStart;
		var elapsedDays  = Math.round(elapsed / (1000 * 3600 *24));
		var dayRemaining = transactionInfo.validityPeriod - elapsedDays
		
		//document.getElementById("Tremaining").value = dayRemaining;
	});
}
	
function downloadSentTransaction(){
	var element = document.getElementById('tt');
	html2pdf(element);
}
	
function downloadReceivedTransaction(){}