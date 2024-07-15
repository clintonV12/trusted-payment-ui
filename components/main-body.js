// Define the main body HTML as a template literal
mainBody = `
    <!-- Layout wrapper -->
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <!-- Menu -->
        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme"></aside>
        <!-- / Menu -->
        
        <!-- Layout container -->
        <div class="layout-page">
          <!-- Navbar -->
          <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar"></nav>
          <!-- / Navbar -->

          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->
            <div id="content" class="container-xxl flex-grow-1 container-p-y"></div>
            <!-- / Content -->
			
			<!-- New Transaction Button -->
			<div id="transaction"></div>
			<!-- New Transaction Button -->
			
            <!-- Footer -->
            <footer id="footer" class="content-footer footer bg-footer-theme"></footer>
            <!-- / Footer -->

            <div class="content-backdrop fade"></div>
          </div>
          <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
    <!-- / Layout wrapper -->
`;

// Get the app element and inject the HTML
appElement = document.getElementById("app");
if (appElement) {
	
	appElement.innerHTML = mainBody;
	
	createAndAppendScript(1, "components/layout-menu.js");
	createAndAppendScript(2, getBodyScript(currentPage));
	
	if (currentPage === "transactions"){
		injectTransactionButton();
	}else{
		removeTransactionButton();
	}
	
	createAndAppendScript(3, "components/nav-bar.js");
	createAndAppendScript(4, "components/footer.js");
	loadMainScript();//defined in ui-helpers.js
} else {
	console.error("Element with ID 'app' not found.");
}

function getBodyScript(page) {
	let bdScript = "";
		switch (page) {
			case 'home':
				bdScript = "components/home-content.js";
				break;
			case 'profile':
				bdScript = "components/profile-content.js";
				break;
			case 'transactions':
				bdScript = "components/transaction-content.js";
				break;
			case 'cashout':
				bdScript = "components/cashout-content.js";
				break;
			case 'verify':
				bdScript = "components/verify-content.js";
				break;
			case 'notifications':
				bdScript = "components/notification-content.js";
				break;
			default:
				console.error("Unsupported page:", page);
				return; // Exit function if page is unsupported
		}
	return bdScript;
}