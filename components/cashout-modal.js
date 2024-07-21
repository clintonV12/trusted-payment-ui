modalGroup = `<div id="taskStarted"></div>`;

cashoutModal = `
	<div class="modal fade" id="cashoutModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog transaction-modal-dialog" role="document">
      <div class="modal-content transaction-modal-content">
                
				<div class="modal-body transaction-modal-body">
          <div class="transaction-modal-header">
              <h5 class="modal-title transaction-modal-title">
              	CASHOUT
              	<small id="transactionNumber"></small>
              </h5>
          </div><br>

					<div class="row transaction-modal-row">
            <div class="col-md-6 col-sm-6 mb-3">
              <label for="code" class="form-label transaction-modal-label">Voucher Code</label>
              <input
								type="text"
								id="vCode"
								maxlength="6"
                class="form-control"
                placeholder="Enter Voucher Code"
                readonly
              />
            </div>
            <div class="col-md-6 col-sm-6 mb-3">
              <label for="code" class="form-label transaction-modal-label">PIN</label>
                <input
                    type="text"
                    id="pCode"
                    maxlength="5"
                    class="form-control"
                    placeholder="Enter PIN"
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
              <button onclick="initiateCashout()" style="white-space: nowrap;" type="button" class="btn btn-info flex-fill fw-bold transaction-modal-btn">
                Proceed <span class="tf-icons bx bx-caret-right"></span>&nbsp;
              </button>
            </div>
          </div>

        </div>
			</div>
		</div>
	</div>
	`;

document.getElementById("cashoutTransaction").innerHTML = `${cashoutModal}${errorPopUp}${modalGroup}`;

var cashoutVCode = 0;
var cashoutTNum  = 0;
var cashoutTID   = 0;

function displayCashoutTransaction(arrayObject) {
	const modal = new bootstrap.Modal('#cashoutModal');
  modal.show();

	$('#cashoutModal').on('shown.bs.modal', function() {
		let transactionInfo = arrayObject;
		
		cashoutVCode = transactionInfo.voucher_code;
		cashoutTNum  = transactionInfo.transaction_number;
		cashoutTID   = transactionInfo.id;
		
		document.getElementById("transactionNumber").innerText = "["+transactionInfo.transaction_number+"]";
		document.getElementById("vCode").value = cashoutVCode;
	});
}

function initiateCashout(){
	let pin = document.getElementById("pCode").value;
	
	if (pin.length != 5){
		var errorMsg = '<p>Please enter a 5 digit PIN.</p>';
        showErrorMsgToast(errorMsg);
	}else{
		makeCashoutRequest(pin);
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
  
  var req = $.ajax({
    "url": SERVER_URL + "transaction",
    "method": "POST",
    "data": raw,
    "headers": {"Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
               }
    });

  $("#cashoutModal").modal("hide");
  let title = "Process Started";
  let body  = "The transaction has been initiated. You will received a notification advising next steps.";
  let elem = taskStartedModal(title, body);

  req.done(function(data){
      //if the call is successful
      console.log(data);
      elem.addEventListener('hidden.bs.modal', () => {
        let msg = data.message != null ? data.message : data.error;

        if (msg) {showErrorMsgToast(msg);}
        else {showErrorMsgToast("Unknown error occured.");}
        
      });

    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      sessionTimedOut();
      showErrorMsgToast(textStatus.toString());
    });
}