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
                              <div class="modal-body">
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
	document.getElementById("transactionInfo").innerHTML = transactionInfo;
	
transactionInfo2 = `
	<div class="modal fade" id="tInfoModal2" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog" role="document" style="max-width: 700px; margin: 30px auto;">
    <div class="modal-content" style="border: 2px solid #dee2e6; border-radius: 0; background: #ffffff; padding: 15px;">
      <div class="modal-header" style="border-bottom: 1px solid #dee2e6; background: #f8f9fa; padding: 10px;">
        <h5 class="modal-title" style="font-family: 'Courier New', Courier, monospace; font-size: 1.5em; font-weight: bold;">PAYMENT DETAILS</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="padding: 20px;" id="chequeBody">
        <!-- Payee and Amount -->
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-8">
            <label for="rTfname" class="form-label" style="font-family: 'Courier New', Courier, monospace; font-weight: bold; color: #495057;">Payee Name</label>
            <input type="text" id="rTfname" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
          </div>
          <div class="col-4" style="text-align: end;">
            <label for="rTAmount" class="form-label" style="font-family: 'Courier New', Courier, monospace; font-weight: bold; color: #495057;">Amount Payable</label>
            <input type="text" id="rTAmount" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace; text-align: end;" readonly />
          </div>
        </div>
        <!-- Memo -->
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-12">
            <label for="rRef" class="form-label" style="font-family: 'Courier New', Courier, monospace; font-weight: bold; color: #495057;">Reference</label>
            <input type="text" id="rRef" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" placeholder="Supply of computer storage devices" readonly />
          </div>
        </div>
        <!-- Phone and Date -->
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-8">
            <label for="rTPhone" class="form-label" style="font-family: 'Courier New', Courier, monospace; font-weight: bold; color: #495057;">Phone Number</label>
            <input type="text" id="rTPhone" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
          </div>
          <div class="col-4" style="text-align: end;">
            <label class="form-label" style="font-family: 'Courier New', Courier, monospace; font-weight: bold; color: #495057;">Date</label>
            <input type="text" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace; text-align: end;" value="July 3, 2024" readonly />
          </div>
        </div>
        <!-- Voucher Code -->
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-12">
            <label for="rVoucherCode" class="form-label" style="font-family: 'Courier New', Courier, monospace; font-weight: bold; color: #495057;">Voucher Code</label>
            <input type="text" id="rVoucherCode" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" value="HJGGJYU" readonly />
          </div>
        </div>
        <!-- QR Code -->
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-12" style="text-align: center;">
            <img src="assets/img/qr-code.jpg" alt="QR Code" style="max-width: 100px; padding: 5px; background: white; border: 1px solid #ced4da;" class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="modal-footer" style="border-top: 1px solid #dee2e6; background: #f8f9fa; padding: 10px; display: flex; justify-content: space-between;">
        <button type="button" class="btn btn-info" style="font-family: 'Courier New', Courier, monospace;">
          <span class="tf-icons bx bx-send"></span>&nbsp; Share
        </button>
        <button type="button" class="btn btn-primary" onclick="downloadTransaction()" style="font-family: 'Courier New', Courier, monospace;">
          <span class="tf-icons bx bx-download"></span>&nbsp; Download
        </button>
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
		document.getElementById("rTAmount").value = Number(transactionInfo.amount).toFixed(2);
		document.getElementById("rVoucherCode").value = transactionInfo.voucherCode;
		document.getElementById("rRef").value = transactionInfo.ref;
		
		var now          = Date.now();
		var elapsed      = now - transactionInfo.durationStart;
		var elapsedDays  = Math.round(elapsed / (1000 * 3600 *24));
		var dayRemaining = transactionInfo.validityPeriod - elapsedDays
		
		//document.getElementById("Tremaining").value = dayRemaining;
	});
}
	
function downloadTransaction(){
console.log();
	var element = document.getElementById('chequeBody');
	
	var opt = {
	  margin:       1,
	  filename:     'myfile.pdf',
	  image:        { type: 'jpeg', quality: 0.98 },
	  html2canvas:  { scale: 2 },
	  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
	};

	// New Promise-based usage:
	html2pdf().set(opt).from(element).save();

}