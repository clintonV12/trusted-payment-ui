import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7EYet_vbmgiZau5aqivSDETxLo13J89E",
  authDomain: "trustedpayments-765b0.firebaseapp.com",
  projectId: "trustedpayments-765b0",
  storageBucket: "trustedpayments-765b0.appspot.com",
  messagingSenderId: "377415708504",
  appId: "1:377415708504:web:0935bdb9208a4624d63f2d",
  measurementId: "G-LZR98C0P91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);
auth.useDeviceLanguage();

var login = `
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
                  <a href="#" id="sign-in-button" class="btn btn-primary d-grid w-100 fw-bold">Request OTP</a>
                </div>

                <div id="loader" class="mb-3" style="text-align:center"></div>
              </form>
            </div>
          </div>
          <!-- /Register -->
        </div>
      </div>
    </div>
    <div id="lllrecaptcha-container"></div>
`;

document.getElementById("app").innerHTML = `${login}${errorPopUp}`;

// Initialize the RecaptchaVerifier
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    getLoginInput();
  },

  'expired-callback': () => {
    console.log('reCAPTCHA expired');
  }

});

const signInButton = document.getElementById('sign-in-button');
signInButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  getLoginInput();
});

function getLoginInput() {
  let phone = document.getElementById("phoneNum").value;
  createLoginLoader();
  
  if (phone.length == 8) {
    LOGGED_IN_PHONE = phone;
    document.cookie = 'myCookie=value; SameSite=None; Secure';
    const phoneNumber = `+268${phone}`;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // Go to OTP page
        hideLoginLoader();
        setCurrentPage('otp');
      })
      .catch((error) => {
        // Error; SMS not sent
        window.recaptchaVerifier.render().then(function(widgetId) {
          grecaptcha.reset(widgetId);
        });

        var errorMsg = '<p>Error sending SMS: ' + error.message + '</p>';
        showErrorMsgToast(errorMsg);
        hideLoginLoader();
      });
  } else {
    var errorMsg = '<p>Please enter a valid phone number.</p>';
    showErrorMsgToast(errorMsg);
    hideLoginLoader();
  }
}
