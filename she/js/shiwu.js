function shiwu() {
	this.y = parseInt(Math.random() * 20)
	this.x = parseInt(Math.random() * 20)
}

shiwu.prototype.addshiwu = function() {
	do {
		this.y = parseInt(Math.random() * game.row)
		this.x = parseInt(Math.random() * game.col)
	} while (function() {
			for (let i = 0; i < game.she.body.length; i++) {
				if (this.y == game.she.body[i].row && this.x == game.she.body[i].col) {
					return true
				}
			}
			return false
		}());
}

shiwu.prototype.xrshiwu = function() {
	game.dom.getElementsByTagName("tr")[this.y].getElementsByTagName("td")[this.x].style.backgroundImage = game.col4
		
}
