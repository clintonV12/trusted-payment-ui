voucherCode = `
	<div class="col-lg-6 col-md-12 col-12 mb-4">
        <div class="card text-center mb-3">
            <div class="card-body">
                <h5 class="card-title">With Voucher Code or PIN</h5>
                <p class="card-text">You can use a voucher code or PIN to check the validity of the TrustedPay voucher and confirm if it has not expired.</p>
                
				<button type="button" class="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#voucherC">
				<span class="tf-icons bx bx-calculator"></span>&nbsp; Enter Voucher Code or PIN
				</button>
            </div>
        </div>
    </div>
`;

qrCode = `
	<div class="col-lg-6 col-md-12 col-12 mb-4">
        <div class="card text-center mb-3">
            <div class="card-body">
                <h5 class="card-title">With QR Code</h5>
                <p class="card-text">You can scan a voucher QR code to check the validity of the TrustedPay voucher and confirm if it has not expired.</p>
                <button type="button" class="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#scanQR">
				<span class="tf-icons bx bx-qr-scan"></span>&nbsp; Scan QR Code
				</button>
            </div>
        </div>
    </div>
`;

verifyTab = `
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account /</span> Verification</h4>
<div class="row"> ${voucherCode}${qrCode} </div>
<div id="vModals"></div>
`;

document.getElementById("content").innerHTML = verifyTab;
var resultContainer = document.getElementById('qr-reader-results');
var lastResult, countResults = 0;


// Remove existing script element if any
existingTScript = document.getElementById("verify-script");
if (existingTScript) {
	existingTScript.remove();
}

// Create new script element
tscript = document.createElement("script");
tscript.src = "components/verify-modal.js";
tscript.async = true;
tscript.id = "verify-script";

// Append script element to the document body
document.body.appendChild(tscript);