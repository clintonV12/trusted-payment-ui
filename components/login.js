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
                    <span class="input-group-text">SZ (+268)</span>
					<input
						type="text"
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
              </form>

            </div>
          </div>
          <!-- /Register -->
        </div>
      </div>
    </div>
`;

document.getElementById("app").innerHTML = `${login}${errorPopUp}`;

//phone number of logged in user
var LOGGED_IN_PHONE = 0;

var transactionJson = `{
"transactions": [
	{"id":1,"voucherCode":"PTT9766","durationStart":1719786996712,"pin":"38541","status":"Active","senderPhone":78679654,"fname":"Jack", "lname":"Jones","nationalID":"N/A","phone":76089768,"payFrom":"MoMo","payTo":"MoMo","validityPeriod":15,"amount":3000.00,"serviceCharge":60.00,"totalAmount":3060.00,"ref":"Supply for computer parts","createdAt":"TIMESTAMP","modifiedAt":"TIMESTAMP"},
	{"id":2,"voucherCode":"MVT9766","durationStart":1719876276410,"pin":"99543","status":"Active","senderPhone":78679654,"fname":"Musa", "lname":"Jones","nationalID":"N/A","phone":78453202,"payFrom":"MoMo","payTo":"MoMo","validityPeriod":45,"amount":3500.00,"serviceCharge":60.00,"totalAmount":3560.00,"ref":"Supply for computer parts","createdAt":"TIMESTAMP","modifiedAt":"TIMESTAMP"},
	{"id":3,"voucherCode":"AMZ9766","durationStart":1719354996712,"pin":"75431","status":"Active","senderPhone":76017827,"fname":"Clinton", "lname":"Vilakati","nationalID":"N/A","phone":78679654,"payFrom":"MoMo","payTo":"MoMo","validityPeriod":15,"amount":2200.00,"serviceCharge":40.00,"totalAmount":2240.00,"ref":"Supply for computer parts","createdAt":"TIMESTAMP","modifiedAt":"TIMESTAMP"},
	{"id":4,"voucherCode":"ZPQ0932","durationStart":1718490996712,"pin":"82630","status":"Active","senderPhone":76099827,"fname":"Clinton", "lname":"Vilakati","nationalID":"N/A","phone":78679654,"payFrom":"MoMo","payTo":"MoMo","validityPeriod":15,"amount":900.00,"serviceCharge":20.00,"totalAmount":920.00,"ref":"Supply of mobile phone","createdAt":"TIMESTAMP","modifiedAt":"TIMESTAMP"}
]
}`;

function getLoginInput(){
	let phone = document.getElementById("phoneNum").value;
	console.log(phone);

	if (phone.length == 8){
		LOGGED_IN_PHONE = phone;
    //requestOTP(LOGGED_IN_PHONE);
		setCurrentPage('otp');
	} else {
    var errorMsg = '<p>Please enter a valid phone number.</p>'
    showErrorMsgToast(errorMsg);
	}
}

function requestOTP(phone) {
  var settings = {
    "url": SERVER_URL + "login",
    "method": "GET",
    "dataType": "json",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "phone_number": phone
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}