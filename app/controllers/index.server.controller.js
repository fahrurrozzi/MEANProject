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
	res.render('index', {
		title: 'Hello World',
		userFullName: req.user ? req.user.fullName : ''
	});
};
