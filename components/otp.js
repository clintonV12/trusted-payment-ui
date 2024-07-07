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

document.getElementById("app").innerHTML = `${otp}${errorPopUp}`;

function getOTPInput(){
	let otp = document.getElementById("otp-code").value;

	if (otp.length == 6){
		//verify otp in server
		isVerified = true;
		
		if (isVerified){
			setCurrentPage('home');
		} else {
            var errorMsg = '<p>OTP Verification failed. Please make sure you entered the OTP correctly or request a new OTP.</p>';
            showErrorMsgToast(errorMsg);
		}
	} else {
        var errorMsg = '<p>Please enter a valid OTP.</p>';
        showErrorMsgToast(errorMsg);
	}
}