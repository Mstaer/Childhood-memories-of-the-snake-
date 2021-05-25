function kg(){
	
	
	
	this.kaishi()
	this.newkaigshi()
	
}

kg.prototype.kaishi = function(){
	document.getElementById("kaishi").addEventListener("click",function(){
			 game.dsq()
	})
}

kg.prototype.newkaigshi = function(){
	document.getElementById("newkaishi").addEventListener("click",function(){
		   clearInterval(game.dsq1)
			 game.fs = 0 
			 game.f = 0
			 game.kg1.newbody()
			 game.shiwu1.addshiwu()
			 
			 game.fengshu()
			 game.dsq()
	})
}

kg.prototype.newbody = function(){
	game.she.body = [
				 {"row":10,"col":11},
				 {"row":10,"col":10},
				 {"row":10,"col":9},
				 {"row":10,"col":8},
				 {"row":10,"col":7},
				 
	];
	
}