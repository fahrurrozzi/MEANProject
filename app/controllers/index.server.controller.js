// exports.render = function(req, res){

// 	if(req.session.lastVisit){
// 		console.log(req.session.lastVisit);
// 	}

// 	req.session.lastVisit = new Date();
// 	res.render('index', {
// 		title:'Hello World'
// 	});
// };

//index.ejs
//<!DOCTYPE html> 
// <html>
// 	<head>
// 		<title><%=title %></title>
// 	</head>
// 	<body>
// 		<img src="img/logo.png" alt="Logo">
// 		<h1><%=title %></h1>
// 	</body>
// </html>

exports.render = function(req, res) {
	const user = (!req.user) ? null : {
		_id: req.user.id,
		firstName: req.user.firstName,
		lastName: req.user.lastName
	};
		res.render('index', {
		title: 'Hello World',
		user: JSON.stringify(user)
	});
};
