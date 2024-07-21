profileContent = `
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account /</span> Profile</h4>

              <div class="row">
                <div class="col-md-12">
                  <div class="card mb-4">
                    <h5 class="card-header my-popup-header my-popup-h5">Profile Details</h5>
                    <!-- Account -->
                    <hr class="my-0" />
                    <div class="card-body">
                      <form id="formAccountSettings">
                        <div class="row">
                          <div class="mb-3 col-md-6">
                            <label for="firstName" class="form-label">First Name</label>
                            <input
                              class="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="First name"
                              maxlength="15"
                              autofocus
                            />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input class="form-control" maxlength="15" type="text" id="lastName" placeholder="Last name" />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="email" class="form-label">E-mail</label>
                            <input
                              class="form-control"
                              type="text"
                              id="email"
                              maxlength="50"
                              name="email"
                              placeholder="name@email.com"
                            />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="national-id" class="form-label">PIN</label>
                            <input
                              type="number"
                              class="form-control"
                              maxlength="15"
                              id="national-id"
                              placeholder="XXXXXX XXXX XXX"
                            />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label class="form-label" for="phoneNumber">Phone Number</label>
                            <div class="input-group input-group-merge">
                              <span class="input-group-text">+268</span>
                              <input
                                type="text"
                                id="phoneNumber"
                                maxlength="8"
                                name="phoneNumber"
                                class="form-control"
                                value="${LOGGED_IN_PHONE}"
                                placeholder="7000 0000"
                                readonly
                              />
                            </div>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" maxlength="40" id="address" name="address" placeholder="Address" />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="region" class="form-label">Region</label>
                            <input class="form-control" type="text" maxlength="15" id="region" placeholder="Manzini" />
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="zipCode" class="form-label">Zip Code</label>
                            <input
                              type="text"
                              class="form-control"
                              id="zipCode"
                              name="zipCode"
                              placeholder="M000"
                              maxlength="6"
                            />
                          </div>
                          
                        </div>
                        <div class="mt-2">
                          <button type="button" onclick="getProfileInput()" class="btn btn-primary me-2">Save changes</button>
                          <button type="button" onclick="cancelProfile()" class="btn btn-outline-danger">Clear</button>
                        </div>
                      </form>
                    </div>
                    <!-- /Account -->
                  </div>
                  <div class="card">
                    <h5 class="card-header">Delete Account</h5>
                    <div class="card-body">
                      <div class="mb-3 col-12 mb-0">
                        <div class="alert alert-warning">
                          <h6 class="alert-heading fw-bold mb-1">Are you sure you want to delete your account?</h6>
                          <p class="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                      </div>
                      <form id="formAccountDeactivation">
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="accountActivation"
                            id="accountActivation"
                          />
                          <label class="form-check-label" for="accountActivation"
                            >I confirm my account deactivation</label
                          >
                        </div>
                        <button type="button" onclick="deleteProfile()" class="btn btn-danger deactivate-account">Deactivate Account</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
	`;
	
document.getElementById("content").innerHTML = `${profileContent}${errorPopUp}`;
var profileID = 0;
profileObj = new Object();
getProfile(LOGGED_IN_PHONE);

function getProfileInput() {
  profileObj.first_name  = document.getElementById("firstName").value;
  profileObj.last_name   = document.getElementById("lastName").value;
  profileObj.email       = document.getElementById("email").value;
  profileObj.national_id = document.getElementById("national-id").value;
  profileObj.address     = document.getElementById("address").value;
  profileObj.region      = document.getElementById("region").value;
  profileObj.zip_code    = document.getElementById("zipCode").value;

  createNewProfile(profileObj);
}

function cancelProfile() {
  document.getElementById("firstName").value   = '';
  document.getElementById("lastName").value    = '';
  document.getElementById("email").value       = '';
  document.getElementById("national-id").value = '';
  document.getElementById("address").value     = '';
  document.getElementById("region").value      = '';
  document.getElementById("zipCode").value     = '';
}

function setProfile(obj) {
  document.getElementById("firstName").value   = obj.first_name != null ? obj.first_name : '';
  document.getElementById("lastName").value    = obj.last_name != null ? obj.last_name : '';
  document.getElementById("email").value       = obj.email != null ? obj.email : '';
  document.getElementById("national-id").value = obj.pin != null ? obj.pin : '';
  document.getElementById("address").value     = obj.address != null ? obj.address : '';
  document.getElementById("region").value      = obj.region != null ? obj.region : '';
  document.getElementById("zipCode").value     = obj.zip_code != null ? obj.zip_code : '';
}

function createNewProfile(userInputObj) {
  const raw = JSON.stringify({
    "new": 1,
    "phone_number": LOGGED_IN_PHONE,
    "first_name": userInputObj.first_name,
    "last_name": userInputObj.last_name,
    "national_id": userInputObj.national_id,
    "email": userInputObj.email,
    "address": userInputObj.address,
    "region": userInputObj.region,
    "zip_code": userInputObj.zip_code
  });

  
  var req = $.ajax({
    "url": SERVER_URL + "user",
    "method": "POST",
    "data": raw,
    "headers": {"Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
               }
    });

  req.done(function(data){
      //if the call is successful
      if (data.message == 'User created successfully') {
        showErrorMsgToast("Your account information has been successfully saved. Refresh to see the changes.");
      } else if(data.message == 'User updated successfully') {
        showErrorMsgToast("Your account information has been successfully updated. Refresh to see the changes.");
      } else {
        showErrorMsgToast("Unknown error occured while saving account details.");
      }
      
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      sessionTimedOut();
      showErrorMsgToast(textStatus.toString());
    });
}

function getProfile(phone) {
  const raw = JSON.stringify({
    "phone_number": phone,
  });

  var req = $.ajax({
    "url": SERVER_URL + "user",
    "method": "POST",
    "data": raw,
    "headers": {"Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
               }
    });

  req.done(function(data){
      //if the call is successful
      profileID = data.id;
      setProfile(data);
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      sessionTimedOut();
      showErrorMsgToast(textStatus.toString());
    });
}

function deleteProfile() {
  const raw = JSON.stringify({
    "id": profileID,
  });
  
  var accountActivation = document.getElementById("accountActivation").checked;

  if (accountActivation) {
    var req = $.ajax({
      "url": SERVER_URL + "user",
      "method": "DELETE",
      "data": raw,
      "headers": {"Authorization": `Bearer ${TOKEN}`,
                  "Content-Type": "application/json"
                 }
      });

    req.done(function(data){
        //if the call is successful
        if (data.message == 'This account is not registered') {
          showErrorMsgToast(data.message);
        }
        else if (data.message == 'User deleted successfully'){
          showErrorMsgToast("Account has been deleted. Refresh to see the changes.");
        }
        
      });

    req.fail(function(jqXHR, textStatus, errorThrown){
        sessionTimedOut();
        showErrorMsgToast(textStatus.toString());
      });
  } else {
    showErrorMsgToast("Please check the confirm box first.");
  }
}