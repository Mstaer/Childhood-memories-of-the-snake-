function kg(){
	this.kaishi()
	this.newkaigshi()
	this.zhanting()
}
kg.prototype.zhanting = function(){
	document.getElementById("zhanting").addEventListener("click",function(){
		     game.jsq1.flag = 0
		   clearInterval(game.dsq1)
	})
	
	document.getElementById("jixu").addEventListener("click",function(){
		game.jsq1.flag = 1
		game.jsq1.start()
		  game.dsq()
		  
	})
	
}
kg.prototype.kaishi = function(){
	document.getElementById("kaishi").addEventListener("click",function(){
		  if (game.kaishia == 1){
				 game.f = 0
				 game.kaishia = 0
				 game.dsq()
			}
			 
	})
}

kg.prototype.newkaigshi = function(){
	document.getElementById("newkaishi").addEventListener("click",function(){
		   clearInterval(game.dsq1)
			 game.kaishia = 1
			 game.fs = 0 
			 game.f = 0
			 game.kg1.newbody()
			 game.shiwu1.addshiwu()
			 game.she.direction = "39"
			 game.she.fx="39"
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