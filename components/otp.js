otpVerificationError = `
	<div class="modal fade" id="otpVerificationError" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header my-popup-header">
                    <h5 class="modal-title my-popup-h5">Verification Error</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						OTP Verification failed. Please make sure you entered the OTP correctly or request a new OTP.
                    </p>
                </div>
				<div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                        OK
                    </button>
                </div>
			</div>
		</div>
	</div>`;

otpError = `
	<div class="modal fade" id="otpError" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header my-popup-header">
                    <h5 class="modal-title my-popup-h5">Error</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
				<div class="modal-body">
					<p>
						Please enter a valid OTP.
                    </p>
                </div>
				<div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                        OK
                    </button>
                </div>
			</div>
		</div>
	</div>`;

otp = `
<div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <!-- Register Card -->
          <div class="card" style="border-radius: 20px">
            <div class="card-body">
              <!-- Logo -->
				${authLogo}
              <!-- /Logo -->
              <h4 class="mb-2">Trust starts here <i class="bx bx-rocket"></i></h4>
              <p class="mb-4">Enter your OTP to start transacting safely!</p>

              <form id="otpForm" class="mb-3">
			    
                <div class="mb-3">
                  <label for="otp-code" class="form-label">One time password (OTP)</label>
                  <input type="text" maxlength="6" class="form-control" id="otp-code" placeholder="Enter your OTP" />
                </div>
				
				<br>
                <a href="#" class="btn btn-primary d-grid w-100 fw-bold" onclick="getOTPInput()">Verify OTP</a>
              </form>

              <p class="text-center">
                <span>Not getting OTP?</span>
                <a href="#" onclick="setCurrentPage('login')" class="fw-bold">
                  <span>Use another number</span>
                </a>
              </p>
            </div>
          </div>
          <!-- Register Card -->
        </div>
      </div>
    </div>
`;

document.getElementById("app").innerHTML = `${otp}${otpError}${otpVerificationError}`;

function getOTPInput(){
	let otp = document.getElementById("otp-code").value;

	if (otp.length == 6){
		//verify otp in server
		isVerified = true;
		
		if (isVerified){
			setCurrentPage('home');
		} else {
			const modal = new bootstrap.Modal('#otpVerificationError');
			modal.show();
		}
	} else {
		//show alert
		const modal = new bootstrap.Modal('#otpError');
		modal.show();
	}
}