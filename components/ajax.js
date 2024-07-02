		$.ajax({
		"url": 'http://mydomain.com/transactions'
		}).done(function(data){
			//if the call is successful
			console.log(data);
		}).fail(function(jqXHR, textStatus, errorThrown){
			//if the call is not successful
		}).always(function(){
			//runs all the time
		});