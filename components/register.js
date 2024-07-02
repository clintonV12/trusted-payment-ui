register = `
<div class="container-xxl">
      <div class="authentication-wrapper authentication-basic container-p-y">
        <div class="authentication-inner">
          <!-- Register Card -->
          <div class="card">
            <div class="card-body">
              <!-- Logo -->
				${authLogo}
              <!-- /Logo -->
              <h4 class="mb-2">Trust starts here <i class="bx bx-rocket"></i></h4>
              <p class="mb-4">Register to start transacting safely!</p>

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
                <div class="mb-3">
                  <label for="fname" class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter your name"
                    autofocus
                  />
                </div>
				<div class="mb-3">
                  <label for="lname" class="form-label">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    placeholder="Enter your surname"
                    autofocus
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="text" class="form-control" id="email" name="email" placeholder="Enter your email" />
                </div>

                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                    <label class="form-check-label" for="terms-conditions">
                      I agree to
                      <a href="javascript:void(0);">privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                <button class="btn btn-primary d-grid w-100 fw-bold">Sign up</button>
              </form>

              <p class="text-center">
                <span>Don't want to register?</span>
                <a href="#" onclick="setCurrentPage('login')" class="fw-bold">
                  <span>Sign in instead</span>
                </a>
              </p>
            </div>
          </div>
          <!-- Register Card -->
        </div>
      </div>
    </div>
`;

document.getElementById("app").innerHTML = register;