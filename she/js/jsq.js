function jsq() {
	this.flag = 0
	this.time = 0
  console.log("kaishi");
	this.jsqkaishi()
	this.newjsq()
}

jsq.prototype.start =function(){
	
	if (game.jsq1.flag == 1) {
	game.jsq1.time+=1000;
		game.jsq1.show();
	}
	setTimeout("game.jsq1.start()",100)
	
}
jsq.prototype.show = function(){
	let f = game.jsq1.shou2(game.jsq1.time * 100 / 1000 % 60);
	let m = game.jsq1.shou2(game.jsq1.time * 100 / 1000 / 60 % 60);
	let s = game.jsq1.shou2(game.jsq1.time * 100 / 1000 / 60 / 60);
	let addtimi =  "本局战斗时间:" + s + ":" + m + ":" + f;
	
	document.getElementById("jsq").innerText=addtimi
}

jsq.prototype.shou2 =function(n){
	  let n1= parseInt(n)
		
	  if(n1<10){
			
	  	return "0"+n1
	  }else{
	  	return n1
	  }
}
jsq.prototype.jsqkaishi = function() {
	document.getElementById("kaishi").addEventListener("click", function() {
		
		game.jsq1.flag = 1
		game.jsq1.start()
	})


}

jsq.prototype.newjsq = function() {

	document.getElementById("newkaishi").addEventListener("click", function() {
       game.jsq1.flag = 1
			 game.jsq1.time = 0
			 game.jsq1.start()
	})

}
