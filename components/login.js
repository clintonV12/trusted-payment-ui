login = `
<div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <!-- Register -->
          <div class="card my-auth-card" style="border-radius: 20px">
            <div class="card-body">
              <!-- Logo -->
				      ${authLogo}
              <!-- /Logo -->
              <h4 class="mb-2">Welcome to TrustedPay! <i class="bx bx-home-smile"></i></h4>
              <p class="mb-4">Please sign-in to your account and continue with business</p>

              <form id="loginForm" class="mb-3">
                <div class="mb-3">
                  <label for="phoneNum" class="form-label">Phone Number</label>
				          <div class="input-group input-group-merge">
                    <span class="input-group-text">+268</span>
          					<input
          						type="number"
          						class="form-control"
          						id="phoneNum"
          						maxlength="8"
          						placeholder="Enter your phone number"
          						autofocus />
				          </div>
                </div>
                <br>

                <div class="mb-3">
                  <a href="#" class="btn btn-primary d-grid w-100 fw-bold" onclick="getLoginInput()">Request OTP</a>
                </div>

                <div id="loader" class="mb-3" style="text-align:center"></div>
              </form>
            </div>
          </div>
          <!-- /Register -->
        </div>
      </div>
    </div>
`;

document.getElementById("app").innerHTML = `${login}${errorPopUp}`;
TOKEN = '';
var OTP = ''; ///Remove in production
function getLoginInput(){
	let phone = document.getElementById("phoneNum").value;
	console.log(phone);

	if (phone.length == 8){
		LOGGED_IN_PHONE = phone;
    requestOTP(LOGGED_IN_PHONE);
	} else {
    var errorMsg = '<p>Please enter a valid phone number.</p>'
    showErrorMsgToast(errorMsg);
	}
}

function requestOTP(phone) {
  const raw = JSON.stringify({
    "phone_number": phone
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
      if (data.message == 'OTP sent successfully') {
        console.log(data);
        setCurrentPage('otp');
        OTP = data.otp;
      }
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      //if the call is not successful
      hideLoginLoader();
      showErrorMsgToast(textStatus.toString() + errorThrown);
    });
}