notificationContent = `
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account /</span> Notifications</h4>
<div class="card mb-4">
  <h5 class="card-header my-popup-header my-popup-h5">New Notifications</h5>
  <div class="row g-0">
    <div class="col-12 p-4">
      <div class="toast-container" id="toast_area"></div>
    </div>
  </div>
</div>`;

document.getElementById("content").innerHTML = notificationContent;
getNotifications(LOGGED_IN_PHONE);

function displayNotifications(arrayObject) {
  let tElement = document.getElementById("toast_area");

  if (arrayObject.length == 0) {
    let msg = `<h6 style="text-align: center">No notifications available yet</h6>`;
    tElement.insertAdjacentHTML('beforeend', msg);

  } else {
  
    for (let i = 0; i < arrayObject.length; i++) {
      let row = `
        <div
          class="bs-toast toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <i class="bx bx-bell me-2"></i>
            <div class="me-auto fw-semibold">${arrayObject[i].title}</div>
            <small>${arrayObject[i].created_at.slice(0,10)}</small>
            <button type="button" id="${arrayObject[i].id}" onclick="deleteNotification(this.id)" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            ${arrayObject[i].message}
          </div>
        </div>`;
      
      tElement.insertAdjacentHTML('beforeend', row);
    }
  } 
}

function getNotifications(phone) {
  const raw = JSON.stringify({
    "phone_number": phone,
  });
  
  var req = $.ajax({
    "url": SERVER_URL + "notification",
    "method": "POST",
    "data": raw,
    "headers": {"Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
               }
    });

  req.done(function(data){
      //if the call is successful
      displayNotifications(data);
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      sessionTimedOut();
      showErrorMsgToast(textStatus.toString());
    });
}

function deleteNotification(id) {
  const raw = JSON.stringify({
    "id": id,
  });
  
  var req = $.ajax({
    "url": SERVER_URL + "notification",
    "method": "DELETE",
    "data": raw,
    "headers": {"Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
               }
    });

  req.done(function(data){
      //if the call is successful
      console.log(data.message);
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      sessionTimedOut();
      showErrorMsgToast(textStatus.toString());
    });
}