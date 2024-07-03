/**
 * Generates the SVG markup for the brand logo.
 * @returns {string} The SVG HTML string.
 */
function getBrandLogo() {
  return `
    <svg width="25" viewBox="0 0 25 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M13.79,0.36 L3.40,7.44 C0.57,9.69 -0.38,12.48 0.56,15.80 C0.69,16.23 1.10,17.79 3.12,19.23 C3.81,19.72 5.32,20.38 7.65,21.22 L7.60,21.25 L2.63,24.55 C0.45,26.30 0.09,28.51 1.56,31.17 C2.84,32.82 5.21,33.26 7.09,32.54 C8.35,32.06 11.46,30.00 16.42,26.37 C18.03,24.50 18.70,22.45 18.41,20.24 C17.96,17.53 16.18,15.58 13.05,14.37 L10.92,13.47 L18.62,7.98 L13.79,0.36 Z" id="path-1"></path>
        <path d="M5.47,6.00 C4.05,8.22 4.36,10.07 6.40,11.57 C8.62,12.57 10.10,13.22 10.86,13.51 L15.51,14.43 L18.62,7.98 C15.54,3.12 13.93,0.57 13.79,0.36 C13.58,0.51 10.81,2.39 5.47,6.00 Z" id="path-3"></path>
        <path d="M7.50,21.23 L12.32,23.32 C14.17,24.76 14.40,26.49 13.01,28.51 C11.62,30.52 10.31,31.79 9.08,32.30 C5.78,33.43 4.13,34 4.13,34 C4.13,34 2.75,33.05 0,31.16 C-0.56,27.82 -0.56,26.06 0,25.88 C0.84,25.61 2.78,22.82 3.30,22.53 C3.65,22.33 5.05,21.90 7.50,21.23 Z" id="path-4"></path>
        <path d="M20.6,7.13 L25.6,13.8 C26.26,14.68 26.08,15.94 25.2,16.6 C24.85,16.86 24.43,17 24,17 L14,17 C12.90,17 12,16.10 12,15 C12,14.57 12.14,14.15 12.4,13.8 L17.4,7.13 C18.06,6.25 19.32,6.07 20.2,6.73 C20.35,6.85 20.49,6.98 20.6,7.13 Z" id="path-5"></path>
      </defs>
      <g id="g-app-brand" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
          <g id="Icon" transform="translate(27.000000, 15.000000)">
            <g id="Mask" transform="translate(0.000000, 8.000000)">
              <mask id="mask-2" fill="white">
                <use xlink:href="#path-1"></use>
              </mask>
              <use fill="var(--mtn-yellow)" xlink:href="#path-1"></use>
              <g id="Path-3" mask="url(#mask-2)">
                <use fill="var(--mtn-yellow)" xlink:href="#path-3"></use>
                <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-3"></use>
              </g>
              <g id="Path-4" mask="url(#mask-2)">
                <use fill="var(--mtn-yellow)" xlink:href="#path-4"></use>
                <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-4"></use>
              </g>
            </g>
            <g id="Triangle" transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000)">
              <use fill="var(--mtn-yellow)" xlink:href="#path-5"></use>
              <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-5"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `;
}


authLogo = `
<div class="app-brand justify-content-center">
	<a href="#" class="app-brand-link gap-2">
        <span class="app-brand-logo demo">
            ${getBrandLogo()}
        </span>
		
        <span class="app-brand-text demo text-body fw-bolder">
			<u class="my-logo-txt">TrustedPay</u>
		</span>
    </a>
</div>
`;

function changeAuthContent(page) {
	let scriptSrc = "";

	switch (page) {
		case '':
		case 'login':
			scriptSrc = "components/login.js";
			break;
		case 'otp':
			scriptSrc = "components/otp.js";
			break;
		default:
			console.error("Unsupported page:", page);
			return; // Exit function if page is unsupported
	}

	// Remove existing script element if any
	const existingScript = document.getElementById("dynamic-auth-script");
	if (existingScript) {
		existingScript.remove();
	}

	// Create new script element
	const script = document.createElement("script");
	script.src = scriptSrc;
	script.async = true;
	script.id = "dynamic-auth-script";

	// Append script element to the document body
	document.body.appendChild(script);
	loadMainScript();//defined in ui-helpers.js
}   

changeAuthContent(currentPage);
removeTransactionButton();