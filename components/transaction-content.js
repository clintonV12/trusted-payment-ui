buyerTransactions = `
    <div class="table-responsive text-nowrap" id="tbl1">
      <table class="table table-striped table-hover" id="sentTable"></table>
    </div>
`;
	
sellerTransactions = `
    <div class="table-responsive text-nowrap" id="tbl2">
      <table class="table table-striped table-hover" id="receivedTable"></table>
    </div>
  
	<div id="transactionInfo"></div>
`;

transactionTab = `
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account /</span> Transactions</h4>
<div class="nav-align-top mb-4">
        <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
            <li class="nav-item">
                <button
                type="button"
                class="nav-link active"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#buyerTransaction"
                aria-controls="buyerTransaction"
                aria-selected="true"
                >
                    <i class="tf-icons bx bx-user-minus"></i> Sent
                </button>
            </li>
            <li class="nav-item">
                <button
                type="button"
                class="nav-link"
                role="tab"
                data-bs-toggle="tab"
                data-bs-target="#sellerTransaction"
                aria-controls="sellerTransaction"
                aria-selected="false"
                >
                    <i class="tf-icons bx bx-user-plus"></i> Received
                </button>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="buyerTransaction" role="tabpanel">
                <!--tab content here-->
				${buyerTransactions}
            </div>
            <div class="tab-pane fade" id="sellerTransaction" role="tabpanel">
                <!--tab content here-->
				${sellerTransactions}
            </div>
        </div>
    </div>
    <div id="modalGroup"></div>
	`;
	
document.getElementById("content").innerHTML = `${transactionTab}${errorPopUp}`;
var isInitialised            = false;
var clickedRowData           = "";

getSentTransactions(LOGGED_IN_PHONE);

document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((el) => {
    el.addEventListener('shown.bs.tab', () => {
        if (!isInitialised) {
            getReceivedTransactions(LOGGED_IN_PHONE);
            isInitialised = true;
        }
    });
});


// Remove existing script element if any
existingTScript = document.getElementById("transaction-info-script");
if (existingTScript) {
	existingTScript.remove();
}

// Create new script element
tscript = document.createElement("script");
tscript.src = "components/transaction-info.js";
tscript.async = true;
tscript.id = "transaction-info-script";

// Append script element to the document body
document.body.appendChild(tscript);

function getSentTransactions(phone) {
  let raw = new Object();
  raw.sender_phone = phone;
  
  var table = $('#sentTable').DataTable({
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
        console.log(xhr);
        console.error("AJAX Error: ", error, code);
        if (code == "Unauthorized"){
            setCurrentPage('login');
        }
      }
    },

    columnDefs: [
      {
        targets: [0, 15],
        className: 'dt-body-left'
      }, 
      {
        targets: 0,
        className: 'dt-head-left'
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
        title: "Recepient Name",
        data: "first_name",
      },
      {
        title: "Recepient Surname",
        data: "last_name",
      },
      {
        title: "Recepient Phone",
        data: "phone",
      },
      {
        title: "National ID",
        data: "national_id",
      },
      {
        title: "Amount (SZL)",
        data: "amount",
      },
      {
        title: "Service Charge",
        data: "service_charge",
      },
      {
        title: "Total Amount",
        data: "total_amount",
      },
      {
        title: "Pay From",
        data: "pay_from",
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
      },
      {
        title: "Actions",
        data: null,
        defaultContent: `
                <div class="dropdown">
                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="javascript:void(0);" data-bs-target="#extendValidity" data-bs-toggle="modal" data-bs-dismiss="modal">Extend Validity Period</a>
                      <a class="dropdown-item" href="javascript:void(0);" data-bs-target="#newPin" data-bs-toggle="modal" data-bs-dismiss="modal">Request New PIN</a>
                      <a class="dropdown-item" href="javascript:void(0);" data-bs-target="#cancelTransaction" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel Transaction</a>
                      <a class="dropdown-item" href="javascript:void(0);" data-bs-target="#reportModal" data-bs-toggle="modal" data-bs-dismiss="modal">Report Issue</a>
                    </div>
                </div>`,
        targets: -1
      }

    ],

  });

  $("#sentTable tbody").on("click", "tr", function() {
    //let data = table.row(this).data();
    //console.log(data);
  });

  table.on("click", "button", function(e) {
    let data = table.row(e.target.closest('tr')).data();
    clickedRowData = data;
  });

  // Debugging: Check if DataTable initialization is successful
  console.log("DataTable initialized: ", table);
}

function getReceivedTransactions(phone) {
  let raw = new Object();
  raw.receipient_phone = phone;
  
  var table2 = $('#receivedTable').DataTable({
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
        title: "Actions",
        data: null,
        defaultContent: `
                <div class="dropdown">
                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#" onclick="displayClickedReceivedTransaction()">Display Transaction</a>
                      <a class="dropdown-item" href="#" data-bs-target="#reportModal" data-bs-toggle="modal" data-bs-dismiss="modal">Report Issue</a>
                    </div>
                </div>`,
        targets: -1
      }
    ],

  });

  $("#receivedTable tbody").on("click", "tr", function() {
    let data = table2.row(this).data();
    clickedRowData = data;
  });

  // Debugging: Check if DataTable initialization is successful
  console.log("DataTable initialized: ", table2);
}