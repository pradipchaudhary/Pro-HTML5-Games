console.log("Hello world!");

var game = {
	// Start initializing Object preloading assets and display start screen
	init: function () {
		// Get handlers for game canvas and context
		game.canvas = document.getElementById("gameCanvas");
		game.context = game.canvas.getContext("2d");
		console.log(this);

		// Hide all game layer and display the start screen
		game.hideScreen();
	},

	// Hide function`
	hideScreen: function () {
		var screens = document.getElementById("gamelayer");
		// Iterate through all the game layers and set their  display to none
		for (let i = screens.length - 1; i >= 0; i--) {
			var screen = screens[i];
			screen.style.display = "none";
		}
	},
	hideScreen: function (id) {
		var screen = document.getElementById(id);
		screen.style.display = "none";
	},
	showScreen: function (id) {
		var screen = document.getElementById(id);
		screen.style.display = "block";
	},
};

window.addEventListener("load", function () {
	game.init();
});
