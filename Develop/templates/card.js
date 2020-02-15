
function generateHtml(data){
	return (`<div class = "col" style="padding: 20px 5px 5px 5px;">
		<div class="card shadow " style="width: 18rem;">
				<h4 class = "card-header"> Name </h4>
				<div class = "card-header"> 
					<i class='${data.icon}'></i>
					<h4> ${data.name} </h4>
				</div>
				<div class = "card-body"> 
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							<span> 
								<p>ID:</p>
								<p>${data.id}</p>
							</span>
						</li>
						<li class="list-group-item">											
							<span> 
								<p>Email:</p>
								<a href = ${data.email}>${data.email}</a>
							</span>
						</li>
						<li class="list-group-item">											
							<span> 
								<p>${data.special} :</p>
								<p>${data.specialVal}</p>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>`)
}

module.exports ={
	generateHtml
}

