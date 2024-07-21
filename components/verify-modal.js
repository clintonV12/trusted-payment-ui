verifyInfo = `
    <div class="modal fade" id="verifyInfoModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog transaction-modal-dialog" role="document">
            <div class="modal-content transaction-modal-content">
              
              <div class="modal-body transaction-modal-body">
                <div class="transaction-modal-header bg-success">
                  <h5 class="modal-title transaction-modal-title">
                    Transaction VERIFIED
                    <span class="tf-icons bx bx-badge-check"></span>
                  </h5>
                </div><br>
              
                <div class="row transaction-modal-row">
                  <div class="col-md-6 col-sm-12 mb-3">
                    <label for="tNum" class="form-label transaction-modal-label">Transaction ID</label>
                    <p id="tNum"></p>
                  </div>
                  <div class="col-md-6 col-sm-12 mb-3">
                    <label for="phone" class="form-label transaction-modal-label">PAYEE MSIDN</label>
                    <p id="phone"></p>
                  </div>
                </div>
                <div class="row transaction-modal-row">
                  <div class="col-md-6 col-sm-12 mb-3">
                    <label for="fName" class="form-label transaction-modal-label">PAYEE FULL NAME</label>
                    <p id="fName"></p>
                  </div>
                  <div class="col-md-6 col-sm-12 mb-3">
                    <label for="idNum" class="form-label transaction-modal-label">ID Number</label>
                    <p id="idNum"></p>
                  </div>
                </div>

                <div class="row transaction-modal-row">
                  <div class="col mb-3">
                    <label for="ref" class="form-label transaction-modal-label">REFERENCE</label>
                    <p id="ref"></p>
                  </div>
                </div>
                <div class="row transaction-modal-row">
                  <div class="col-md-6 col-sm-12 mb-3">
                    <label for="period" class="form-label transaction-modal-label">VALIDITY PERIOD (DAYS)</label>
                    <p id="period"></p>
                  </div>
                  <div class="col-md-6 col-sm-12 mb-3">
                    <label for="start_date" class="form-label transaction-modal-label">STARTING FROM</label>
                    <p id="start_date"></p>
                  </div>
                </div>

                <div class="row transaction-modal-row">
                  <div class="col-md-6 col-sm-12 mb-3">
                    <label for="amount" class="form-label transaction-modal-label">AMOUNT PAYABLE (SZL)</label>
                    <p id="amount"></p>
                  </div>

                  <div class="col-md-6 col-sm-12 mb-3">
                    <label for="status" class="form-label transaction-modal-label">STATUS</label>
                    <p id="status"></p>
                    <small>*Only ACTIVE transactions can allow withdrawal of funds.</small>
                  </div>
                </div>
                
              </div>
              <div class="modal-footer transaction-modal-footer">
                <button type="button" class="btn btn-danger transaction-modal-btn" data-bs-dismiss="modal">
                  <span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

scanQR = `
	<div class="modal fade" id="scanQR" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content transaction-modal-content">
                
				<div class="modal-body transaction-modal-body">
                    <div class="transaction-modal-header">
                        <h5 class="modal-title transaction-modal-title">QR CODE VERIFICATION</h5>
                    </div><br>
                    
					<div id="qr-reader" style="width:500px"></div>
					<div id="qr-reader-results">
                        <div id="loader"></div>
                    </div>

                    <div id="camError" class="row transaction-modal-row">
                        
                    </div>

                    <div id="loader" class="mb-3" style="text-align:center"></div>

                    <div class="row transaction-modal-row">
                        <div class="d-grid gap-2 col-lg-6 mx-auto">
                            <button type="button" onclick="requestCameraPermission()" class="btn btn-outline-primary transaction-modal-btn">
                                <span class="tf-icons bx bx-qr-scan"></span>&nbsp; With camera
                            </button>
                        </div>
                    </div>

                    <div class="row transaction-modal-row">
                        <div class="input-group">
                            <label class="input-group-text" for="qr-input-file">Use local file</label>
                            <input type="file" class="form-control" id="qr-input-file" accept="image/*" capture/>
                        </div>
                    </div>
                </div>
				<div class="modal-footer transaction-modal-footer">
                    <button type="button" class="btn btn-outline-danger transaction-modal-btn" data-bs-dismiss="modal">
                        Close
                    </button>
                </div>
			</div>
		</div>
	</div>
	`;

voucherC = `
	<div class="modal fade" id="voucherC" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog transaction-modal-dialog" role="document">
            <div class="modal-content transaction-modal-content">
                
				<div class="modal-body transaction-modal-body">
                    <div class="transaction-modal-header">
                        <h5 class="modal-title transaction-modal-title">VERIFY TRANSACTION</h5>
                    </div><br>

					<div class="row transaction-modal-row">
                        <div class="col-md-6 col-sm-6 mb-3">
                            <label for="code" class="form-label transaction-modal-label">Transaction ID</label>
                            <input
								type="text"
								id="transactionNum"
								maxlength="10"
                                class="form-control"
                                placeholder="Transaction ID"
                            />
                        </div>
                        <div class="col-md-6 col-sm-6 mb-3">
                            <label for="code" class="form-label transaction-modal-label">Voucher Code / PIN</label>
                            <input
                                type="text"
                                id="code"
                                maxlength="6"
                                class="form-control"
                                placeholder="Voucher Code or PIN"
                            />
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
                          <button onclick="initiateVerification()" style="white-space: nowrap;" type="button" class="btn btn-info flex-fill fw-bold transaction-modal-btn">
                            <span class="tf-icons bx bx-badge-check"></span>&nbsp; Verify
                          </button>
                        </div>
                      </div>

                </div>
			</div>
		</div>
	</div>
	`;

vError = `
<div class="modal fade" id="vError" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog" role="document">
        <div class="modal-content transaction-modal-content">
            
            <div class="modal-body transaction-modal-body">
                <div class="transaction-modal-header">
                    <h5 class="modal-title transaction-modal-title">ERROR</h5>
                </div><br>

                <div class="row transaction-modal-row">
                    <div class="mb-3 col-12 mb-0">
                        <div class="alert alert-warning">
                          <h6 class="alert-heading fw-bold mb-1">We came across a problem</h6>
                          <p class="mb-0">Verification failed, please check the details carefully and try again.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer transaction-modal-footer">
                <button type="button" class="btn btn-danger transaction-modal-btn" data-bs-dismiss="modal">
                    <span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
                </button>
            </div>
        </div>
    </div>
</div>
`;
	
document.getElementById("vModals").innerHTML = `${scanQR}${voucherC}${errorPopUp}${verifyInfo}${vError}`;
startLocalScan();

function requestCameraPermission() {
    hideLoginLoader();
    Html5Qrcode.getCameras().then(devices => {
      /**
       * devices would be an array of objects of type:
       * { id: "id", label: "label" }
       */
        createLoginLoader();
        
      if (devices && devices.length) {
        var cameraId = devices[0].id;
        // .. use this to start scanning.
        startScan();
      }
    }).catch(err => {
      // handle err
        hideLoginLoader();
        document.getElementById('camError').innerHTML = `
            <div class="mb-3 col-12 mb-0">
                <div class="alert alert-warning">
                  <h6 class="alert-heading fw-bold mb-1">Error</h6>
                  <p class="mb-0">${err.toString()}</p>
                </div>
            </div> `;
    });
}

function startScan() {
    const html5QrCode = new Html5Qrcode("qr-reader");
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        /* handle success */
        html5QrCode.stop().then((ignore) => {
          // QR Code scanning is stopped.
        }).catch((err) => {
          // Stop failed, handle it.
        });
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    // Select back camera or fail with `OverconstrainedError`.
    html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
}

function startLocalScan() {
    const html5QrCode = new Html5Qrcode(/* element id */ "qr-reader", true);
    // File based scanning
    const fileinput = document.getElementById('qr-input-file');
    let scanResult  = document.getElementById('qr-reader-results');

    fileinput.addEventListener('change', e => {
      if (e.target.files.length == 0) {
        // No file selected, ignore 
        return;
      }

      const imageFile = e.target.files[0];
      // Scan QR Code
      html5QrCode.scanFile(imageFile, true)
      .then(decodedText => {
        // success, use decodedText
        console.log(decodedText);
        let tNum  = decodedText.slice(8, 18);
        let vCode = decodedText.slice(25, 31);

        createGenericLoader("loader");
        makeVerificationRequest(vCode, tNum);
      })
      .catch(err => {
        // failure, handle it.
        console.log(`Error scanning file. Reason: ${err}`)
      });
    });

}

function initiateVerification(){
	let code           = document.getElementById("code").value;
    let transactionNum = document.getElementById("transactionNum").value;
	
	if (code.length == 5 || code.length == 6){
        if (transactionNum.length == 10) {
            $("#voucherC").modal("hide");
            makeVerificationRequest(code, transactionNum);

        }else {
            var errorMsg = '<p>Please enter a 10 digit Transaction Number.</p>';
            showErrorMsgToast(errorMsg);
        }
        
	} else {
		var errorMsg = '<p>Please enter a valid Voucher Code or PIN.</p>';
        showErrorMsgToast(errorMsg);
		
	}
}

function showVerificationInfo(obj) {
    document.getElementById("tNum").innerText       = obj.transaction_number;
    document.getElementById("fName").innerText      = obj.first_name + " " + obj.last_name;
    document.getElementById("start_date").innerText = obj.created_at;
    document.getElementById("phone").innerText      = obj.phone;
    document.getElementById("idNum").innerText      = obj.national_id;
    document.getElementById("period").innerText     = obj.validity_period;
    document.getElementById("amount").innerText     = obj.amount;
    document.getElementById("ref").innerText        = obj.reference;
    document.getElementById("status").innerText     = obj.status;
}

function makeVerificationRequest(code, transactionNum) {
  let raw = "";

  if (code.length == 5) {
    raw = JSON.stringify({
        "verify": 1,
        "pin": code,
        "t_num": transactionNum
    });
  } 
  else if (code.length == 6) {
    raw = JSON.stringify({
        "verify": 1,
        "vCode": code,
        "t_num": transactionNum
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
      if (data == false)
      {
        $("#scanQR").modal("hide");
        const modal = new bootstrap.Modal('#vError');
        modal.show();
      } else {
          $("#scanQR").modal("hide");
          const modal = new bootstrap.Modal('#verifyInfoModal');
          showVerificationInfo(data);
          modal.show();
          hideGenericLoader("loader");
      }
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      sessionTimedOut();
      showErrorMsgToast(textStatus.toString());
    });
}