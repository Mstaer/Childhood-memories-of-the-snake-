
function Game() {
	this.col1 = "url(./img/g2.png)"
	this.col2 = "url(./img/g3.png)"
	this.col3 = ""
  this.col4="url(./img/g1.png)"
	this.fs = 0
	this.kaishia = 1
	this.zt = 1
	this.shij()
	this.fengshu()
	this.init()
	this.fx()
	this.shud()
	this.she = new she()
	this.kg1 = new kg()
	this.shiwu1 = new shiwu()
	this.jsq1 = new jsq()
}

Game.prototype.init = function() {
	this.row = 30;
	this.col = 40;
	this.dom = document.createElement("table")
	let tr, td
	for (let i = 0; i < this.row; i++) {
		tr = document.createElement("tr")
		for (let j = 0; j < this.col; j++) {
			td = document.createElement("td")
			tr.appendChild(td)
		}
		this.dom.appendChild(tr)
	}
	document.getElementById("app").appendChild(this.dom)
}

Game.prototype.shecolor = function(row1, col1, color1) {
	this.dom.getElementsByTagName("tr")[row1].getElementsByTagName("td")[col1].style.backgroundImage = color1
	for (let i = 1; i < game.she.body.length; i++) {
		this.dom.getElementsByTagName("tr")[row1].getElementsByTagName("td")[col1].style.backgroundImage = color1
	}
}

Game.prototype.qp = function() {
	for (let i = 0; i < this.row; i++) {
		for (let j = 0; j < this.col; j++) {
			this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.backgroundImage = this.col3
		};
	};

};

Game.prototype.fx = function() {
	let shethis = this
	document.onkeydown = function(e) {
		switch (e.keyCode) {
			case 37:
				if (shethis.she.direction == 39) {
					return
				} else {
					shethis.she.jieshou("37")
				}
				break;
			case 38:
				if (shethis.she.direction == 40) {
					return
				} else {
					shethis.she.jieshou("38")
				}
				break;
			case 39:
				if (shethis.she.direction == 37) {
					return
				} else {
					shethis.she.jieshou("39")
				}
				break;
			case 40:
				if (shethis.she.direction == 38) {
					return
				} else {
					shethis.she.jieshou("40")
				}
				break;
			default:
				break;
		}
	}
}

Game.prototype.dsq = function() {
	this.f = 0
	this.dsq1 = setInterval(function() {
		game.f++
		game.qp()
			
		document.getElementById("shudu").innerHTML = "??????:" + game.f + "/km"
		let dr = game.she.body.length < 30 ? 30 - game.she.body.length : 1;
		game.f % dr == 0 && game.she.dong();
		game.shiwu1.xrshiwu()
		game.she.shili()
	}, 20)
}

Game.prototype.fengshu = function() {
	document.getElementById("fengshu").innerHTML = "????????????:" + this.fs
}

Game.prototype.shij = function() {
	document.getElementById("jsq").innerHTML = "??????????????????: 00:00:00"
}

Game.prototype.shud = function() {
	document.getElementById("shudu").innerHTML = "??????: 0 /km"

}
