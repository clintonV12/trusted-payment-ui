pricingCard = `
	<div class="col-md-8 col-lg-8 order-2 mb-4" id="pricing">
                  <div class="card h-100">
                    <div class="card-header d-flex align-items-center justify-content-between my-popup-header">
                      <h5 class="card-title m-0 me-2 my-popup-h5">Pricing Structure</h5>
                    </div>
                    <div class="card-body"><br>
                        <div class="table-responsive text-nowrap">
						  <table class="table table-striped table-hover">
							<thead>
							  <tr>
								<th>Amount (E)</th>
								<th>Service Charge (E)</th>
							  </tr>
							</thead>
							<tbody class="table-border-bottom-0">
							  <tr data-bs-toggle="modal" data-bs-target="#tInfoModal">
								<td><strong>0.00 - 499</strong></td>
								<td>20.00</td>
							  </tr>
							   <tr data-bs-toggle="modal" data-bs-target="#tInfoModal">
								<td><strong>500 - 1999</strong></td>
								<td>40.00</td>
							  </tr>
							  <tr data-bs-toggle="modal" data-bs-target="#tInfoModal">
								<td><strong>2000 - 3999</strong></td>
								<td>60.00</td>
							  </tr>
							  <tr data-bs-toggle="modal" data-bs-target="#tInfoModal">
								<td><strong>4000 and Above</strong></td>
								<td>80.00</td>
							  </tr>
							</tbody>
						  </table>
						</div>
                    </div>
                  </div>
                </div>`;
				
descriptionCard = `
	<div class="col-lg-8 mb-4 order-0" id="desc">
                  <div class="card">
                    <div class="d-flex align-items-end row">
                      <div class="col-sm-7">
                        <div class="card-body">
                          <h5 class="card-title text-primary">About <span class="text-primary">TrustedPay</span> <i class="bx bx-info-circle"></i></h5>
                          <p class="mb-4">
                            Trusted pay lets you carry out high value transactions without the risk of being de-frauded.
                          </p>

                          <a href="#" onclick="showUserJourney()" class="btn btn-sm btn-outline-primary">Learn More</a>
                        </div>
                      </div>
                      <div class="col-sm-5 text-center text-sm-left">
                        <div class="card-body pb-0 px-0 px-md-4">
                          <img
                            src="assets/img/illustrations/man-with-laptop-light.png"
                            height="140"
                            alt="View Badge User"
                            data-app-dark-img="illustrations/man-with-laptop-dark.png"
                            data-app-light-img="illustrations/man-with-laptop-light.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;

infoCard1 = `
	<div class="col-lg-12 col-md-12 col-12 mb-4" id="createNew">
        <div class="card text-center mb-3">
            <div class="card-body">
                <h5 class="card-title fw-bold">Try it now</h5>
                <p class="card-text">Click below to make a transaction with TrustedPay.</p>
                <button type="button" class="btn btn-lg btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#modalToggle">
				<span class="tf-icons bx bx-receipt"></span>&nbsp; Initiate New Transaction
				</button>
            </div>
        </div>
		<div id="newTransaction"></div>
    </div>`;

infoCard3 = `
	<div class="col-6 mb-4" id="c3">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <div class="avatar flex-shrink-0">
                              <img src="assets/img/icons/unicons/cc-warning.png" alt="Credit Card" class="rounded" />
                            </div>
                            <div class="dropdown">
                              <button
                                class="btn p-0"
                                type="button"
                                id="cardOpt4"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt4">
                                <a class="dropdown-item" href="#" onclick="setCurrentPage('transactions')">View More</a>
                              </div>
                            </div>
                          </div>
                          <span class="fw-semibold d-block mb-1">Sent</span>
                          <h5 class="card-title text-nowrap mb-2">E <small id="totalS"></small> </h5>
                        </div>
                      </div>
                    </div>`;
infoCard4 = `
	<div class="col-6 mb-4" id="c4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <div class="avatar flex-shrink-0">
                              <img src="assets/img/icons/unicons/cc-success.png" alt="Credit Card" class="rounded" />
                            </div>
                            <div class="dropdown">
                              <button
                                class="btn p-0"
                                type="button"
                                id="cardOpt1"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu" aria-labelledby="cardOpt1">
                                <a class="dropdown-item" href="#" onclick="setCurrentPage('transactions')">View More</a>
                              </div>
                            </div>
                          </div>
                          <span class="fw-semibold d-block mb-1">Received</span>
                          <h5 class="card-title mb-2">E <small id="totalR"></small> </h5>
                        </div>
                      </div>
                    </div>`;
					
homeContent = `
	<div class="row">
        ${descriptionCard}
        <div class="col-lg-4 col-md-4 order-1">
            <div class="row">
                ${infoCard1}
            </div>
        </div>
				
        <!-- Pricing structure -->
            ${pricingCard}
        <!--/ Pricing structure -->
				
        <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
            <div class="row">
                ${infoCard3}
                ${infoCard4}
            </div>
        </div>
    </div>`;

function showUserJourney(){
	const driver = window.driver.js.driver;
	
	const driverObj = driver({
	  popoverClass: 'bg-primary',
	  showProgress: true,
	  steps: [
	    { popover: { title: 'About TrustedPay', description: 'In the realm of commerce and service provision, a trust gap often exists between customers and service providers/sellers.', side: "left", align: 'start' }},
		{ popover: { title: 'About TrustedPay', description: '. Buyers are hesitant to pay upfront due to the fear of non-delivery, while service providers fear non-payment despite delivering goods or services.', side: "left", align: 'start' }},
		{ popover: { title: 'About TrustedPay', description: 'To bridge this gap, a trusted payment solution is essential.', side: "left", align: 'start' }},
		{ popover: { title: 'About TrustedPay', description: 'This solution acts as a middle player, holding funds in escrow until certain conditions are met, ensuring both parties\’ interests are protected.', side: "left", align: 'start' }},
		{ popover: { title: 'Site Tour', description: 'Here is a short tutorial on how to use the TrustedPay web app. Let\'s walk you through it.', side: "left", align: 'start' }},
		{ element: '#desc', popover: { title: 'Get Started', description: 'Learn more about TrustedPay and why you should consider it for your next high value transaction', side: "left", align: 'start' }},
		{ element: '#createNew', popover: { title: 'Create New Transaction', description: 'Start new transactions by clicking the button and following the given prompts.', side: "bottom", align: 'start' }},
		{ element: '#pricing', popover: { title: 'Pricing', description: 'Get precise service charge information from our pricing table.', side: "bottom", align: 'start' }},
		{ element: '#c4', popover: { title: 'Total Received', description: 'Keep track of how much you have used TrustedPay to receive funds.', side: "top", align: 'start' }},
		{ element: '#c3', popover: { title: 'Total Sent', description: 'Keep track of how much you have used TrustedPay to send funds.', side: "right", align: 'start' }},
		{ element: '#transactions', popover: { title: 'All Transactions', description: 'Visit the transactions page to manage all you transactions in a single location.', side: "right", align: 'start' }},
		{ element: '#cashout', popover: { title: 'Cashout', description: 'Cashout your received funds directly to your MoMo account.', side: "right", align: 'start' }},
		{ element: '#verify', popover: { title: 'Verification', description: 'Verify if a given voucher code is valid', side: "right", align: 'start' }},
		{ popover: { title: 'Get Started', description: 'And that is all, go ahead and start transacting with trust assured.' } }
	  ]
	});

	driverObj.drive();
}

function getTransactions(){
	$.ajax({
		"url":"http:mydomain.com/api",
		"type":"get",
		"dataType":"jsonp",
		
	}).done(function(results){
		console.log(results);
		
	}).fail(function(){
		console.log(arguments);
		
	}).always(function(){
		//should be moved to done()
		let parsed = JSON.parse(transactionJson);
		
		calcTotalSentTransactions(parsed["transactions"]);
		document.getElementById("totalR").innerText = calcTotalReceivedTransactions(parsed["transactions"]);
		document.getElementById("totalS").innerText = calcTotalSentTransactions(parsed["transactions"]);
	});
}

function calcTotalReceivedTransactions(arrayObject) {
	let sum = 0;
	
	for (let i = 0; i < arrayObject.length; i++) {
		if (arrayObject[i].phone == LOGGED_IN_PHONE){
			sum = Number(sum) + Number(arrayObject[i].amount);
		}else{
			continue;
		}
	}
	
	return Number(sum).toFixed(2);
}

function calcTotalSentTransactions(arrayObject) {
	let sum = 0;
	
	for (let i = 0; i < arrayObject.length; i++) {
		if (arrayObject[i].senderPhone == LOGGED_IN_PHONE){
			sum = Number(sum) + Number(arrayObject[i].amount);
		}else{
			continue;
		}
	}
	
	return Number(sum).toFixed(2);
}

//defined in ui-helpers.js
loadTransactionScript();

document.getElementById("content").innerHTML = homeContent;

getTransactions();