scanQR = `
	<div class="modal fade" id="scanQR" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color:var(--mtn-yellow);">
                    <h5 class="modal-title" style="color: #fff;">Coming Soon</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						Sorry, this feature is not available at the moment. Try the voucher code verification instead.
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

vStarted = `
	<div class="modal fade" id="vStarted" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color:var(--mtn-yellow);">
                    <h5 class="modal-title" style="color: #fff;">Verification Initiated</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						Verification process started. Please wait for SMS confirming verification status.
                    </p>
                </div>
				<div class="modal-footer">
                    <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">
                        OK
                    </button>
                </div>
			</div>
		</div>
	</div>
	`;


voucherC = `
	<div class="modal fade" id="voucherC" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color:var(--mtn-yellow);">
                    <h5 class="modal-title" style="color: #fff;">Verify Voucher Code</h5>
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
                            <label for="code" class="form-label">Voucher Code</label>
                            <input
								type="text"
								id="code"
								maxlength="8"
                                class="form-control"
                                placeholder="Enter Voucher Code"
                            />
							<div class="form-text" style="color:red;">
								Enter your 8 digit voucher code.
							</div>
                        </div>
                    </div>
                </div>
				<div class="modal-footer">
					<div class="d-grid gap-2 col-lg-12 mx-auto">
						<button type="button" class="btn btn-primary btn-lg fw-bold" onclick="initiateVerification()">
							Verify
						</button>
					</div>
                </div>
			</div>
		</div>
	</div>
	`;

inputError = `
	<div class="modal fade" id="inputError" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background-color:var(--mtn-yellow);">
                    <h5 class="modal-title" style="color: #fff;">Invalid Voucher Code</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						Please enter an 8 digit Voucher Code.
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

	
document.getElementById("vModals").innerHTML = `${scanQR}${voucherC}${vStarted}${inputError}`;

function initiateVerification(){
	let code = document.getElementById("code").value;
	
	if (code.length < 8){
		const errorModal = new bootstrap.Modal('#inputError');
		errorModal.show();
	}else{
		
		$("#voucherC").modal("hide");
			
		const modal = new bootstrap.Modal('#vStarted');
		modal.show();	
	}
}