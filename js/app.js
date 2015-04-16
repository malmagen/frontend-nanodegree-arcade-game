//make game over when  you hit the bug
//need to see if they are on the same x coordinate and y coordinate
//restart the game

//Fråga om this.x och x  för enemies hur kan jag få access till den variabeln?

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.sprite = 'images/enemy-bug.png';
    var random = Math.floor(Math.random() * 3);

    //var height_stone = Resources.get(stone-block.png);
    this.y = 60 + 83 * random ;// The image/sprite for our enemies, this uses
    this.x = 0;
    this.speed = 0;
//83 (1-3)
//0

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.speed * dt + this.x;
    //;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.height = Resources.get(this.sprite).height;
    this.width = Resources.get(this.sprite).width;

}

var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.y = 400 ;// The image/sprite for our enemies, this uses
    this.x = 202;


}



Player.prototype.update = function() {
    player.collision();

}


Player.prototype.handleInput = function(key){
    switch(key){
        case 'left':
            if(this.x > 0){
                this.x = this.x -101;


            }

            break;
        case 'right':
            if(this.x <= 403){
                this.x = this.x + 101;
            }
            break;
        case 'up':
            if(this.y > 40){
            this.y = this.y - 90;

            }


            break;
        case 'down':
            if(this.y < 400){
            this.y = this.y + 90;

            }

            break;
        default:
            this.key = null;
    }
    }

Player.prototype.collision = function(){
    if(this.x <= allEnemies[0].x){
        console.log("fail");
    }
    console.log("success");
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}


// Now instantiate your objects.
var allEnemies = [];
allEnemies.push(new Enemy());// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
