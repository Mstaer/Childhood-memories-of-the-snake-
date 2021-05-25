function she() {
	this.body = [{
			"row": 10,
			"col": 11
		},
		{
			"row": 10,
			"col": 10
		},
		{
			"row": 10,
			"col": 9
		},
		{
			"row": 10,
			"col": 8
		},
		{
			"row": 10,
			"col": 7
		},

	];

	// this.shili()
	this.direction = "39"
	this.fx = "39"
	// myshe = this
	// return myshe

}

she.prototype.jieshou = function(a) {

	this.fx = a
}

she.prototype.dong = function() {
	this.direction = this.fx
	switch (this.direction) {
		case "39":
			this.body.unshift({
				"row": this.body[0].row,
				"col": this.body[0].col + 1
			})
			break;
		case "37":
			this.body.unshift({
				"row": this.body[0].row,
				"col": this.body[0].col - 1
			})
			break;
		case "40":
			this.body.unshift({
				"row": this.body[0].row + 1,
				"col": this.body[0].col
			})
			break;
		case "38":
			this.body.unshift({
				"row": this.body[0].row - 1,
				"col": this.body[0].col
			})
			break;
	}
	if (this.body[0].row > game.row-1 || this.body[0].col > game.col-1 || this.body[0].row < 0 || this.body[0].col <
		0) {
			console.log("gameover");
			game.jsq1.flag = 0
			game.jsq1.time = 0
		this.body.shift()
		
		clearInterval(game.dsq1)
		return
	} else {
		for (let i = 1; i < this.body.length; i++) {
			if (this.body[0].row == this.body[i].row && this.body[0].col == this.body[i].col) {
				console.log("gameover");
				game.jsq1.flag = 0
				game.jsq1.time = 0
				this.body.shift()
			
				clearInterval(game.dsq1)
				return
			}
		}
	} 
	if (this.body[0].row == game.shiwu1.y && this.body[0].col == game.shiwu1.x) {
		game.dom.getElementsByTagName("tr")[game.shiwu1.y].getElementsByTagName("td")[game.shiwu1.x].style
			.backgroundImage = ""
		game.shiwu1.addshiwu()
		game.fs++
		game.fengshu()
		game.f = 0
	} else {
		this.body.pop()
	}
}
she.prototype.shili = function() {
	let col1 = "url(./img/g2.png)"
	let col2 = "url(./img/g3.png)"


	game.shecolor(this.body[0].row, this.body[0].col, col1)

	for (let i = 1; i < this.body.length; i++) {
		game.shecolor(this.body[i].row, this.body[i].col, col2)
	}
}
