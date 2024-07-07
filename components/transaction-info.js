transactionInfo = `
					<div class="modal fade" id="tInfoModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog transaction-modal-dialog" role="document">
              <div class="modal-content transaction-modal-content">

                <div class="modal-body transaction-modal-body">
                  <div class="transaction-modal-header">
                    <h5 class="modal-title transaction-modal-title">SENT TRANSACTION</h5>
                  </div><br>

                  <div class="row transaction-modal-row">
                    <div class="col mb-3">
                      <label for="Tfname" class="form-label transaction-modal-label">Recepient Full Name</label>
                      <input type="text" id="Tfname" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
                    </div>
                  </div>
	               <div class="row transaction-modal-row">
                    <div class="col mb-3">
                      <label for="Tphone" class="form-label transaction-modal-label">Phone Number</label>
                      <input type="text" id="Tphone" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
                    </div>
                  </div>
	                <div class="row transaction-modal-row">
                    <div class="col mb-3">
                      <label for="Tamount" class="form-label transaction-modal-label">Amount Payable (E)</label>
                      <input type="text" id="Tamount" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
                    </div>
                  </div>
	                <div class="row transaction-modal-row">
                    <div class="col mb-3">
                      <label for="Tref" class="form-label transaction-modal-label">Reference</label>
                      <input type="text" id="Tref" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
                    </div>
                  </div>
	                <div class="row transaction-modal-row">
                    <div class="col mb-3">
                      <label for="Tvalidity" class="form-label transaction-modal-label">Validity Period</label>
                      <input type="text" id="Tvalidity" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
                    </div>
                  </div>
	                <div class="row transaction-modal-row">
                    <div class="col mb-3">
                      <label for="Tremaining" class="form-label transaction-modal-label">Days Remaining</label>
                      <input type="text" id="Tremaining" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly/>
                    </div>
                  </div>
                  <div class="row transaction-modal-row">
                    <div class="col mb-3" style="text-align: center;">
                      <a href="#" style="text-align: center;" class="form-label">Cancel transaction</a>
                    </div>
                  </div>
                  
                </div>
                <div class="modal-footer transaction-modal-footer">
                  <button type="button" class="btn btn-danger transaction-modal-btn" data-bs-dismiss="modal">
                    <span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
                  </button>
                	<button type="button" class="btn btn-info transaction-modal-btn" data-bs-target="#extendValidity" data-bs-toggle="modal" data-bs-dismiss="modal">
                		<span class="tf-icons bx bx-edit"></span>&nbsp; Edit
                	</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="validityExtension"></div>
	`;
	
transactionInfo2 = `
	<div class="modal fade" id="tInfoModal2" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog transaction-modal-dialog" role="document">
    <div class="modal-content transaction-modal-content">
      
      <div class="modal-body transaction-modal-body" id="chequeBody">
        <div class="transaction-modal-header">
          <h5 class="modal-title transaction-modal-title">PAYMENT DETAILS</h5>
        </div><br>

        <!-- Payee and Amount -->
        <div class="row transaction-modal-row">
          <div class="col-8">
            <label for="rTfname" class="form-label transaction-modal-label">Payee Name</label>
            <input type="text" id="rTfname" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
          </div>
          <div class="col-4" style="text-align: end;">
            <label for="rTAmount" class="form-label transaction-modal-label">Amount Payable</label>
            <input type="text" id="rTAmount" class="form-control" style="text-align: end; border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
          </div>
        </div>
        <!-- Memo -->
        <div class="row transaction-modal-row">
          <div class="col-12">
            <label for="rRef" class="form-label transaction-modal-label">Reference</label>
            <input type="text" id="rRef" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
          </div>
        </div>
        <!-- Phone and Date -->
        <div class="row transaction-modal-row">
          <div class="col-8">
            <label for="rTPhone" class="form-label transaction-modal-label">Phone Number</label>
            <input type="text" id="rTPhone" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
          </div>
          <div class="col-4" style="text-align: end;">
            <label class="form-label transaction-modal-label">Date</label>
            <input type="text" class="form-control" style="text-align: end; border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" value="July 3, 2024" readonly />
          </div>
        </div>
        <!-- Voucher Code -->
        <div class="row transaction-modal-row">
          <div class="col-12">
            <label for="rVoucherCode" class="form-label transaction-modal-label">Voucher Code</label>
            <input type="text" id="rVoucherCode" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
          </div>
        </div>
        <!-- QR Code -->
        <div class="row transaction-modal-row">
          <div class="col-12" style="text-align: center;">
            <div id="qrcode-gen" class="img-fluid transaction-modal-qrcode" > </div>
          </div>
        </div>
      </div>

      <div class="modal-footer transaction-modal-footer">
        <button type="button" class="btn btn-danger transaction-modal-btn" data-bs-dismiss="modal">
          <span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
        </button>
        <button type="button" class="btn btn-primary transaction-modal-btn" onclick="downloadTransaction()">
          <span class="tf-icons bx bx-download"></span>&nbsp; Download
        </button>
      </div>
    </div>
  </div>
</div>
`;

// Define the HTML for Modal 3
extendValidity = `
  <div class="modal fade" id="extendValidity" aria-labelledby="extendValidityLabel" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog">
      <form class="modal-content transaction-modal-content">
        
        <div class="modal-body transaction-modal-body">
          <div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">EXTEND VALIDITY PERIOD</h5>
          </div><br>

          <div class="row transaction-modal-row">
            <div class="col mb-3">
              <label for="add-validity" class="form-label transaction-modal-label">Additional Days</label>
              <select id="add-validity" class="form-select form-control">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
                <option value="60">60</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer transaction-modal-footer">
          <button type="button" class="btn btn-danger fw-bold transaction-modal-btn" data-bs-target="#tInfoModal" data-bs-toggle="modal" data-bs-dismiss="modal">
            <span class="tf-icons bx bx-undo"></span>&nbsp; Back
          </button>
          <button type="button" class="btn btn-primary fw-bold transaction-modal-btn">
            <span class="tf-icons bx bx-check-double"></span>&nbsp; Confirm
          </button>
        </div>
      </form>
    </div>
  </div>
`;

document.getElementById("transactionInfo").innerHTML   = transactionInfo;
document.getElementById("transactionInfo2").innerHTML  = transactionInfo2;
document.getElementById("validityExtension").innerHTML = extendValidity;
	
displayClickedSentTransaction();
displayClickedReceivedTransaction();

function displayClickedSentTransaction() {
	
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

    document.getElementById("qrcode-gen").innerHTML = "";
		new QRCode(document.getElementById("qrcode-gen"), {
			text: transactionInfo.voucherCode,
			width: 128,
			height: 128,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
		
	});
}


function downloadTransaction() {
  // Ensure jsPDF is loaded
  if (typeof window.jspdf === 'undefined') {
    console.error('jsPDF is not loaded.');
    return;
  }

  // Extract jsPDF from the jspdf object
  const { jsPDF } = window.jspdf;

  // Get the element to download
  const element = document.getElementById('chequeBody');
  if (!element) {
    console.error('Element with ID "chequeBody" not found.');
    return;
  }

  // Create a new jsPDF instance
  const doc = new jsPDF('l', 'pt', 'letter');

  // Convert the HTML content to PDF
  doc.html(element, {
    callback: function (doc) {
      // Save the PDF with a specified filename
      doc.save('cheque.pdf');
    },
    x: 10,
    y: 10,
  });
}