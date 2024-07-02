notificationContent = `
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account /</span> Notifications</h4>
			<div class="card mb-4">
                <h5 class="card-header my-popup-header my-popup-h5">New Notifications</h5>
                <div class="row g-0">
                  <div class="col-12 p-4">
                    <div class="toast-container">
					  
					  <div
                        class="bs-toast toast fade show"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div class="toast-header">
                          <i class="bx bx-bell me-2"></i>
                          <div class="me-auto fw-semibold">Payment</div>
                          <small>30 mins ago</small>
                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                          Approval pending on initiated transaction.
                        </div>
                      </div>
					  
                    </div>
                  </div>
                </div>
            </div>
	`;
	document.getElementById("content").innerHTML = notificationContent;