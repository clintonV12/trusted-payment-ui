scanQR = `
	<div class="modal fade" id="scanQR" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header my-popup-header">
                    <h5 class="modal-title my-popup-h5">Coming Soon</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<div id="qr-reader" style="width:500px"></div>
					<div id="qr-reader-results"></div>
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

voucherC = `
	<div class="modal fade" id="voucherC" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog transaction-modal-dialog" role="document">
            <div class="modal-content transaction-modal-content">
                
				<div class="modal-body transaction-modal-body">
                    <div class="transaction-modal-header">
                        <h5 class="modal-title transaction-modal-title">VERIFY VOUCHER CODE</h5>
                    </div><br>

					<div class="row transaction-modal-row">
                        <div class="col mb-3">
                            <label for="code" class="form-label transaction-modal-label">Transaction Number</label>
                            <input
								type="text"
								id="transactionNum"
								maxlength="11"
                                class="form-control"
                                placeholder="Transaction Number"
                            />
                        </div>
                        <div class="col mb-3">
                            <label for="code" class="form-label transaction-modal-label">Voucher Code</label>
                            <input
                                type="text"
                                id="code"
                                maxlength="8"
                                class="form-control"
                                placeholder="Voucher Code"
                            />
                        </div>
                    </div>
                </div>
				<div class="modal-footer transaction-modal-footer">
                    <button type="button" class="btn btn-danger transaction-modal-btn" data-bs-dismiss="modal">
                        <span class="tf-icons bx bx-x-circle"></span>&nbsp; Close
                    </button>
                    <button type="button" onclick="initiateVerification()" class="btn btn-info transaction-modal-btn">
                        <span class="tf-icons bx bx-badge-check"></span>&nbsp; Verify
                    </button>
                </div>
			</div>
		</div>
	</div>
	`;
	
document.getElementById("vModals").innerHTML = `${scanQR}${voucherC}${errorPopUp}`;


function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;
        // Handle on success condition with the decoded message.
        console.log(`Scan result ${decodedText}`, decodedResult);
    }
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

function initiateVerification(){
	let voucherCode    = document.getElementById("code").value;
    let transactionNum = document.getElementById("transactionNum").value;
	
	if (voucherCode.length != 8 || transactionNum.length != 11){
		var errorMsg = '<p>Please enter an 8 digit Voucher Code & 11 digit Transaction Number.</p>';
        showErrorMsgToast(errorMsg);
	} else {
		
		$("#voucherC").modal("hide");
        var successMsg = 'Verification process started. Please wait for SMS confirming verification status.';
        showSuccessMsgToast(successMsg);
	}
}

function makeVerificationRequest(voucherCode, transactionNum) {}