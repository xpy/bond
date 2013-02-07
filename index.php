<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>BOND - a jQuery View - Model - View Plugin?</title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">

    <link rel="stylesheet" href="css/screen.css">

    <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
    <script type="text/javascript" src="js/angular.js"></script>
    <script type="text/javascript" src="js/ready.js"></script>

    <script type="text/javascript" src="js/bond.js"></script>  <!--Refactor That-->

</head>
<body>

<div id="main-wrapper">
<header><h1>Bond</h1></header>
	<section id="main-section">
		<div class="person1">
			<div class="age">25</div>
			<div class="first-name">Foo</div>
			<div class="last-name">Bar</div>
			<div class="full-name">Foo Bar</div>
		</div>
		<div class="person2">
			<div class="age">30</div>
			<div class="first-name">Fee</div>
			<div class="last-name">Bee</div>
			<div class="full-name">Fee Bee</div>
		</div>
	</section>
	<footer></footer>
    <script type="text/javascript">
		var person = new Bond(['first-name','last-name','age']);
//        console.log(person);

        var foo = new person($('.person1'));
        var fee = new person($('.person2'));
//console.log(foo.age);
    </script>
</div>
</body>
</html>