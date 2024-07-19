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
                  <input type="number" maxlength="6" class="form-control" id="otp-code" placeholder="Enter your OTP" />
                </div>
				
				      <br>
                <a href="#" class="btn btn-primary d-grid w-100 fw-bold" onclick="getOTPInput()">Verify OTP</a>
                <br>
                <div id="loader" class="mb-3" style="text-align:center"></div>
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
var errorMsg = `<p>Your OTP is ${OTP}.</p>`;
showErrorMsgToast(errorMsg);

function getOTPInput(){
	let otp = document.getElementById("otp-code").value;

	if (otp.length == 6){
		//verify otp in server
    verifyOTP(LOGGED_IN_PHONE, otp);
		
	} else {
        var errorMsg = '<p>Please enter a valid OTP.</p>';
        showErrorMsgToast(errorMsg);
	}
}

function verifyOTP(phone, otp_code) {
  const raw = JSON.stringify({
    "phone_number": phone, "otp_code": otp_code
  });
  createLoginLoader();

  var req = $.ajax({
    "url": SERVER_URL + "login",
    "method": "POST",
    "data": raw,
    "headers": {"Content-Type": "application/json"}
    });

  req.done(function(data){
      //if the call is successful
      hideLoginLoader();
      if (data.token) {
        TOKEN = data.token;
        setCurrentPage('home');
      } else {
        showErrorMsgToast(data.error);
      }
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      //if the call is not successful
      hideLoginLoader();
      console.log(jqXHR);
      showErrorMsgToast(textStatus.toString());
    });
}