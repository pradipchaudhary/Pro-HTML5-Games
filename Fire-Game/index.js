const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
console.log(canvas);
console.log(ctx);

class Player {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}
}

const player = new Player(100, 100, 20, "green");
console.log(player);
