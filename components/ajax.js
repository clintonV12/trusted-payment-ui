		
function ajaxOTP(phone) {
  const raw = JSON.stringify({
    "phone_number": phone
  });

  var req = $.ajax({
    "url": SERVER_URL + "login",
    "method": "POST",
    "data": raw,
    "headers": {"Content-Type": "application/json"}
    });

  req.done(function(data){
      //if the call is successful
      console.log(data);
    });

  req.fail(function(jqXHR, textStatus, errorThrown){
      //if the call is not successful
    console.log(textStatus);
    });

  req.always(function(){
      //runs all the time
    });
}


		//fetch template
		fetch(SERVER_URL + "login", requestOptions)
	    .then((response) => {
	      return response.json()
	    })
	    .then((result) => {
	      console.log(result)
	    })
	    .catch((error) => {
	      console.error(error)
	    });