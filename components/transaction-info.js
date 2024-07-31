modalGroup = `
    <div id="validityExtension"></div>
    <div id="cancellation"></div>
    <div id="taskStarted"></div>
    <div id="newPinModal"></div>
    <div id="reportIssueModal"></div>
	`;
	
transactionInfo = `
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
          <div class="col-6">
            <label for="rTPhone" class="form-label transaction-modal-label">Phone Number</label>
            <input type="text" id="rTPhone" class="form-control" style="border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
          </div>
          <div class="col-6" style="text-align: end;">
            <label class="form-label transaction-modal-label">Date</label>
            <input type="text" id="rDate" class="form-control" style="text-align: end; border: none; border-bottom: 1px solid #ced4da; background: transparent; font-family: 'Courier New', Courier, monospace;" readonly />
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
            <div id="qrcode-gen" class="img-fluid transaction-modal-qrcode" >
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer transaction-modal-footer">

        <div class="col">
            <div class="d-flex mb-3">
              <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-dismiss="modal">
                <span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
              </button>
            </div>
          </div>
          <div class="col">
            <div class="d-flex mb-3">
              <div class="btn-group flex-fill" role="group">
                <button
                  id="downloadBtnGroup"
                  style="white-space: nowrap;"
                  type="button"
                  class="btn btn-info transaction-modal-btn dropdown-toggle flex-fill fw-bold"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <span class="tf-icons bx bx-download"></span>&nbsp; Download
                </button>
                <div class="dropdown-menu" aria-labelledby="downloadBtnGroup">
                  <a class="dropdown-item" id="qr-downloader" onclick="downloadQRCode()" href="javascript:void(0);">QR Code Only</a>
                  <a class="dropdown-item" onclick="downloadTransaction()" href="javascript:void(0);">Complete Document</a>
                </div>
              </div>
            </div>
          </div>


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

          <div class="mb-3 col-12 mb-0">
            <div class="alert alert-warning">
              <h6 class="alert-heading fw-bold mb-1">Are you sure you want to extend?</h6>
              <p class="mb-0">This action will result in a service charge of E20.00. Please be certain.</p>
            </div>
          </div>

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

          <div class="col">
            <div class="d-flex mb-3">
              <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-dismiss="modal">
                <span class="tf-icons bx bx-x-circle"></span>&nbsp; Cancel
              </button>
            </div>
          </div>
          <div class="col">
            <div class="d-flex mb-3">
              <button style="white-space: nowrap;" type="button" class="btn btn-info flex-fill fw-bold transaction-modal-btn" onclick="editTransactionPeriod()">
                Proceed <span class="tf-icons bx bx-caret-right"></span>&nbsp;
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  </div>
`;

newPin = `
  <div class="modal fade" id="newPin" aria-labelledby="newPin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog">
      <form class="modal-content transaction-modal-content">
        
        <div class="modal-body transaction-modal-body">
          <div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">RESET PIN</h5>
          </div><br>

          <div class="mb-3 col-12 mb-0">
            <div class="alert alert-warning">
              <h6 class="alert-heading fw-bold mb-1">Are you sure?</h6>
              <p class="mb-0">Please confirm, this action is not reversable.</p>
            </div>

            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                id="pinReset"
              />
              <label class="form-check-label" for="pinReset">I confirm I want to reset my PIN</label>
            </div>
          </div>

        </div>
        <div class="modal-footer transaction-modal-footer">

          <div class="col">
            <div class="d-flex mb-3">
              <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-dismiss="modal">
                <span class="tf-icons bx bx-x-circle"></span>&nbsp; Cancel
              </button>
            </div>
          </div>
          <div class="col">
            <div class="d-flex mb-3">
              <button style="white-space: nowrap;" type="button" class="btn btn-info flex-fill fw-bold transaction-modal-btn" onclick="makePinResetRequest()">
                Proceed <span class="tf-icons bx bx-caret-right"></span>&nbsp;
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  </div>
`;

cancelTransaction = `
<div class="modal fade" id="cancelTransaction" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog transaction-modal-dialog" role="document">
          <div class="modal-content transaction-modal-content">
              
            <div class="modal-body transaction-modal-body">
                  <div class="transaction-modal-header">
                      <h5 class="modal-title transaction-modal-title">CANCEL TRANSACTION</h5>
                  </div><br>

                  <div class="row transaction-modal-row">
                      <div class="col-md-6 col-sm-6 mb-3">
                          <label for="code" class="form-label transaction-modal-label">Voucher Code</label>
                          <input
                              type="text"
                              id="code"
                              maxlength="6"
                              class="form-control"
                              placeholder="Voucher Code"
                          />
                      </div>
                      <div class="col-md-6 col-sm-6 mb-3">
                          <label for="pin_code" class="form-label transaction-modal-label">PIN</label>
                          <input
                              type="text"
                              id="pin_code"
                              maxlength="5"
                              class="form-control"
                              placeholder="Enter your PIN"
                          />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer transaction-modal-footer">

                      <div class="col">
                        <div class="d-flex mb-3">
                          <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-dismiss="modal">
                            <span class="tf-icons bx bx-x-circle"></span>&nbsp; Cancel
                          </button>
                        </div>
                      </div>
                      <div class="col">
                        <div class="d-flex mb-3">
                          <button style="white-space: nowrap;" type="button" class="btn btn-info flex-fill fw-bold transaction-modal-btn" onclick="startTransactionCancel()">
                            Proceed <span class="tf-icons bx bx-caret-right"></span>&nbsp;
                          </button>
                        </div>
                      </div>
                  </div>
          </div>
        </div>
      </div>
  `;

report = `
  <div class="modal fade" id="reportModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog" role="document">
      <div class="modal-content transaction-modal-content">

        <div class="modal-body transaction-modal-body">
          <div class="transaction-modal-header">
            <h5 class="modal-title transaction-modal-title">REPORT ISSUE</h5>
          </div><br>

          <div class="row transaction-modal-row">
            <div class="col mb-3">
              <div class="alert alert-warning">
                <h6 class="alert-heading fw-bold mb-1">Are you sure you want to report this transaction?</h6>
                <p class="mb-0">Please confirm, this action might result in users being unable to access these funds.</p>
              </div>

              <div class="form-check mt-3">
                <input
                  name="issue-radio"
                  class="form-check-input"
                  type="radio"
                  value="PIN-Withholding"
                  id="pin-radio"
                />
                <label class="form-check-label transaction-modal-label" for="active-radio"> Buyer refuses to share PIN</label>
              </div>
              <div class="form-check">
                <input
                  name="issue-radio"
                  class="form-check-input"
                  type="radio"
                  value="VCODE-Withholding"
                  id="vcode-radio"
                />
                <label class="form-check-label transaction-modal-label" for="frozen-radio"> Seller refuses to share Voucher Code </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer transaction-modal-footer">
        
          <div class="col">
              <div class="d-flex mb-3">
                <button style="white-space: nowrap;" type="button" class="btn btn-danger flex-fill fw-bold transaction-modal-btn" data-bs-dismiss="modal">
                  <span class="tf-icons bx bx-x-circle"></span>&nbsp; Cancel
                </button>
              </div>
            </div>
            <div class="col">
              <div class="d-flex mb-3">
                <button style="white-space: nowrap;" type="button" class="btn btn-info flex-fill fw-bold transaction-modal-btn" onclick="reportIssueRequest()">
                  Proceed <span class="tf-icons bx bx-caret-right"></span>&nbsp;
                </button>
              </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  </div>
`;

document.getElementById("modalGroup").innerHTML        = modalGroup;
document.getElementById("transactionInfo").innerHTML   = transactionInfo;
document.getElementById("validityExtension").innerHTML = extendValidity;
document.getElementById("cancellation").innerHTML      = cancelTransaction;
document.getElementById("newPinModal").innerHTML       = newPin;
document.getElementById("reportIssueModal").innerHTML  = report;

function displayClickedReceivedTransaction() {
  const modal = new bootstrap.Modal('#tInfoModal2');
  modal.show();
	$('#tInfoModal2').on('shown.bs.modal', function() {
		transactionInfo = clickedRowData;// defined and set in transaction-content.js
		
		document.getElementById("rTfname").value  = transactionInfo.first_name + " " + transactionInfo.last_name;
		document.getElementById("rTPhone").value  = transactionInfo.phone;
		document.getElementById("rTAmount").value = Number(transactionInfo.amount).toFixed(2);
		document.getElementById("rVoucherCode").value = transactionInfo.voucher_code;
		document.getElementById("rRef").value  = transactionInfo.reference;
    document.getElementById("rDate").value = transactionInfo.created_at.slice(0, 10);
		
		var now          = Date.now() / 1000;
		var elapsed      = now - transactionInfo.duration_start;
		var elapsedDays  = Math.round(elapsed / (1000 * 3600 *24));
		var dayRemaining = transactionInfo.validity_period - elapsedDays;

    document.getElementById("qrcode-gen").innerHTML = "";
		new QRCode(document.getElementById("qrcode-gen"), {
			text: "tNumber="+transactionInfo.transaction_number+"&vCode="+transactionInfo.voucher_code,
			width: 128,
			height: 128,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
		
	});
}

function downloadQRCode() {
  // Get the element to download
  const element = document.getElementById('qrcode-gen');
  if (!element) {
    console.error('Element with ID "qrcode-gen" not found.');
    return;
  }

  html2canvas(element).then(canvas => {
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/jpeg");
      a.download = "TrustedPay_QR_Code.jpeg";
      a.click();
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

function startTransactionCancel() {
  let vCode = document.getElementById("code").value;
  let pCode  = document.getElementById("pin_code").value;

  if (pCode.length == 5 && vCode.length == 6){
      $("#cancelTransaction").modal("hide");
      makeCancelRequest(vCode, pCode);

  } else {
    var errorMsg = '<p>Please enter a valid Voucher Code and PIN.</p>';
    showErrorMsgToast(errorMsg);
  }
}

function editTransactionPeriod() {
  let additionalDays = document.getElementById("add-validity").value;
  let totalDays = Number(additionalDays) + Number(clickedRowData.validity_period);

  const raw = JSON.stringify({
    "transaction_id": clickedRowData.id,
    "validity_period": totalDays,
    "phone_number": LOGGED_IN_PHONE
  });

  var req = $.ajax({
    "url": SERVER_URL + "transaction",
    "method": "PUT",
    "data": raw,
    "headers": {"Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
               }
    });

  req.done(function(data){
      //if the call is successful
      $("#extendValidity").modal("hide");

      let title = "Process Started";
      let body  = "The validity extension process has been initiated. You will receive a notification advising further steps.";
      let elem  = taskStartedModal(title, body);
      
      elem.addEventListener('hidden.bs.modal', () => {
        let msg = data.message != null ? data.message : data.error;
        showErrorMsgToast(msg);
      });

    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      sessionTimedOut(jqXHR);
      showErrorMsgToast(textStatus.toString());
    });
}

function makeCancelRequest(vCode, pCode) {
  const  raw = JSON.stringify({
        "cancel": 1,
        "vCode": vCode,
        "pCode": pCode,
        "transaction_id": clickedRowData.id,
        "transaction_number": clickedRowData.transaction_number
    });
  
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
      $("#cancelTransaction").modal("hide");
      
      let title = "Process Started";
      let body  = "The transaction cancellation process has been initiated. You will received a notification advising progress.";
      let elem = taskStartedModal(title, body);
      
      elem.addEventListener('hidden.bs.modal', () => {
        let msg = data.message != null ? data.message : data.error;
        showErrorMsgToast(msg);
      });
      
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      sessionTimedOut(jqXHR);
      showErrorMsgToast(textStatus.toString());
    });
}

function makePinResetRequest() {
  const  raw = JSON.stringify({
        "reset_pin": 1,
        "phone_number": LOGGED_IN_PHONE,
        "transaction_id": clickedRowData.id,
        "transaction_number": clickedRowData.transaction_number
    });

  var pinReset = document.getElementById("pinReset").checked;
  if (pinReset) {
    var req = $.ajax({
      "url": SERVER_URL + "transaction",
      "method": "PUT",
      "data": raw,
      "headers": {"Authorization": `Bearer ${TOKEN}`,
                  "Content-Type": "application/json"
                 }
      });

    req.done(function(data){
        //if the call is successful
        console.log(data);
        $("#newPin").modal("hide");

        let title = "Process Started";
        let body  = "The PIN reset process has been initiated.";
        let elem = taskStartedModal(title, body);
        
        elem.addEventListener('hidden.bs.modal', () => {
          let msg = data.message != null ? data.message : data.error;
          showErrorMsgToast(msg);
        });

      });

    req.fail(function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
        sessionTimedOut(jqXHR);
        showErrorMsgToast(textStatus.toString());
      });

  } else {
    showErrorMsgToast("Please check the confirm box first.");
  }
}

function reportIssueRequest() {
  let raw   = "";
  var pCode = document.getElementById("pin-radio").checked;
  var vCode = document.getElementById("vcode-radio").checked;

  if (!pCode && !vCode) {
    showErrorMsgToast("Nothing is selected, cannot send report.");
    return;
  }

  if (clickedRowData.sender_phone == LOGGED_IN_PHONE && pCode) {
    showErrorMsgToast("You can not report PIN withholding issue in this transaction.");
    return;
  } else if (clickedRowData.phone == LOGGED_IN_PHONE && vCode) {
    showErrorMsgToast("You can not report Voucher Code withholding issue in this transaction.");
    return;
  }

  if(pCode) {
    raw = JSON.stringify({
      "report-dispute":1,
      "transaction_id": clickedRowData.id,
      "transaction_number": clickedRowData.transaction_number,
      "reported_by": LOGGED_IN_PHONE,
      "reporter_role": "Recepient",
      "report_type": "PIN-Withholding",
    });
  }
  else if(vCode) {
    raw = JSON.stringify({
      "report-dispute":1,
      "transaction_id": clickedRowData.id,
      "transaction_number": clickedRowData.transaction_number,
      "reported_by": LOGGED_IN_PHONE,
      "reporter_role": "Sender",
      "report_type": "VCODE-Withholding",
    });
  }

  
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
      $("#reportModal").modal("hide");
      let title = "Reported";
      let body  = "The issue has been reported, you will be notified about the next steps.";
      let elem = taskStartedModal(title, body);

      elem.addEventListener('hidden.bs.modal', () => {
        let msg = data.message != null ? data.message : data.error;
        showErrorMsgToast(msg);
      });

    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      sessionTimedOut(jqXHR);
      showErrorMsgToast(textStatus.toString());
    });
}