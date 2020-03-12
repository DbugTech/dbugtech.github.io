fetch('https://google.com')
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.error(error);
	});
