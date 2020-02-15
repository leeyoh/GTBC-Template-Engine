

function generateHtml(data){
	return `<!DOCTYPE html>
	<html lang="en">
		<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
		<link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

		<title>Document</title>
		<style>
			@page {
			margin: 0;
			}
			*,
			*::after,
			*::before {
			box-sizing: border-box;
			}
			html, body {
			padding: 0;
			margin: 0;
			}
			html, body, .wrapper {
			height: 100%;
			}
			main {
			height: auto;
			padding-top: 30px;
			}
			h1, h2, h3, h4, h5, h6 {
			font-family: 'BioRhyme', serif;
			margin: 0;
			}
			h1 {
			font-size: 3em;
			}
			h2 {
			font-size: 2.5em;
			}
			h3 {
			font-size: 2em;
			}
			h4 {
			font-size: 1.5em;
			}
			h5 {
			font-size: 1.3em;
			}
			h6 {
			font-size: 1.2em;
			}
			p,a,i,h4{
				display: inline-block;
			}
			.container {
				padding: 50px;
				padding-left: 100px;
				padding-right: 100px;
			}
			.row {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				margin-top: 20px;
				margin-bottom: 20px;
			}
			.card {
				border-radius: 10px;	
				width: 100%;		
			}
			.card-body {
				background-color: #E9EDEE;
				color: white;
			}
			.card-header{
				background-color: blue;
				color: white;
			}
			.list-group{
				border-radius: 10px;
			}
			.col {
				flex: 1;
			
			}
			.list-group-item{
				color: black;
			}
	
			}
		</style>
	</head>

	<body>
		<div class = "wrapper">
			<main> 
				<div class = " container">
					<div class = "row">
						${data}
					</div>
				</div>
			</main>
		</div>
	</body>`
}
module.exports ={
	generateHtml
}