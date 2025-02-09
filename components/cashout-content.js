sellerTransactions = `
	<div class="card" style="padding: 20px">
    <h5 class="card-header">Received Trusted Payments</h5>
    <div class="table-responsive text-nowrap" id="tblBody">
      <table class="table table-striped table-hover" id="cashoutTableBody"></table>
    </div>
  </div>
`;

transactionTab = `
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account /</span> Cashout</h4>
${sellerTransactions} 
<div id="cashoutTransaction"></div>
`;
	
document.getElementById("content").innerHTML = transactionTab;
getReceivedTransactions(LOGGED_IN_PHONE);

// Remove existing script element if any
existingTScript = document.getElementById("cashout-script");
if (existingTScript) {
	existingTScript.remove();
}

// Create new script element
tscript = document.createElement("script");
tscript.src = "components/cashout-modal.js";
tscript.async = true;
tscript.id = "cashout-script";

// Append script element to the document body
document.body.appendChild(tscript);

function getReceivedTransactions(phone) {
  let raw = new Object();
  raw.receipient_phone = phone;
  
  var table2 = $('#cashoutTableBody').DataTable({
    processing: true,
    serverSide: false,
    pageLength: 5,
    responsive: true,
    bLengthChange: false,
    bFilter: false,
    ajax: {
      method: "POST",
      url: SERVER_URL + "transaction",
      data: function(d) {
        return JSON.stringify(raw);
      },
      dataSrc: "",
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Content-Type": "application/json"
      },
      error: function(xhr, error, code) {
        console.error("AJAX Error: ", error, code);
        if (code == "Unauthorized"){
            setCurrentPage('login');
        }
      }
    },

    columnDefs: [
      {
        targets: 0,
        className: 'dt-body-left'
      }
    ],

    columns: [
      {
        title: "Sender Phone",
        data: "sender_phone"
      },
      {
        title: "Alt Sender Phone",
        data: "alt_sender_phone"
      },
      {
        title: "Transaction ID",
        data: "transaction_number"
      },
      {
        title: "Status",
        data: "status"
      },
      {
        title: "Amount (SZL)",
        data: "amount",
      },
      {
        title: "Pay Into",
        data: "pay_to",
      },
      {
        title: "Validity Period",
        data: "validity_period",
      },
      {
        title: "Created At",
        data: "created_at",
      },
      {
        title: "Reference",
        data: "reference",
      }
    ],

  });

  $("#cashoutTableBody tbody").on("click", "tr", function() {
    let data = table2.row(this).data();
    displayCashoutTransaction(data);
  });

  // Debugging: Check if DataTable initialization is successful
  console.log("DataTable initialized: ", table2);
}