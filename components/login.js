login = `
<div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <!-- Register -->
          <div class="card">
            <div class="card-body">
              <!-- Logo -->
				${authLogo}
              <!-- /Logo -->
              <h4 class="mb-2">Welcome to TrustedPay! <i class="bx bx-home-smile"></i></h4>
              <p class="mb-4">Please sign-in to your account and continue with business</p>

              <form id="formAuthentication" class="mb-3">
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
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">One Time Password</label>
                  </div>
                  <div class="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
					  maxlength="5"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                  </div>
                </div>
                
                <div class="mb-3">
                  <button class="btn btn-primary d-grid w-100 fw-bold" onclick="getLoginInput()">Sign in</button>
                </div>
              </form>

              <p class="text-center">
                <span>Optionally you can?</span>
                <a href="#" onclick="setCurrentPage('register')" class="fw-bold">
                  <span>Create an account</span>
                </a>
              </p>
			  
            </div>
          </div>
          <!-- /Register -->
        </div>
      </div>
    </div>
`;

document.getElementById("app").innerHTML = login;
var loginObj = new Object();

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
	loginObj.phone    = document.getElementById("phoneNum").value;
	loginObj.password = document.getElementById("password").value;

	console.log(loginObj.phone);
	console.log(loginObj.password);
	
	//call function to do login
	let loginCorrect = true;

	if (loginCorrect){
		LOGGED_IN_PHONE = 78679654;
		setCurrentPage('home');
	} else {
		//show alert
	}
}