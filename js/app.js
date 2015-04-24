
var score = 0;
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    var random_pos = Math.floor(Math.random() * 3);
    this.y = 60 + 83 * random_pos;
    this.speed = Math.floor(Math.random()*200);
    if(this.speed<50){
        this.speed = 50;
    }



}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

     // The image/sprite for our enemies, this uses


    this.x = this.speed * dt + this.x;
    if(this.x > 403){
        this.x = 0;
        random_pos = Math.floor(Math.random() *3);
        this.y = 60 + 83 * random_pos;

    }
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

Enemy.prototype.restart = function() {
    //location.reload();
    //var length = allEnemies.length;
    //allEnemies.slice(0,length);
    //allEnemies.push(new Enemy(), new Enemy, new Enemy);

}

var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.y = 400 ;// The image/sprite for our enemies, this uses
    this.x = 202;


}



Player.prototype.update = function() {
    ctx.font = "30pt Calibri";
    ctx.fillStyle = "black";

    ctx.fillText("Score"+" "+ score , 200,30);

    player.collision();
    console.log(this.y);
    if(this.y <= -20){

        ctx.clearRect(300,0, 40,40);
        score++;
        player.restart();

    }


}


Player.prototype.handleInput = function(key){
    switch(key){
        case 'left':
            if(this.x > 0){
                this.x += -101;


            }

            break;
        case 'right':
            if(this.x <= 403){
                this.x +=101;
            }
            break;
        case 'up':
            if(this.y > 0){
                if(this.y===40){
                    this.y+=-60;
                }
                else{
               console.log(this.y);
               this.y +=- 90;
               }
            }

            break;
        case 'down':
            if(this.y < 400){
            this.y +=90;

            }

            break;
        default:
            this.key = null;
    }
    }

Player.prototype.restart = function(){

   this.y = 400;
    this.x = 202;
}

Player.prototype.collision = function(){
    var collision = false;
    for(var i = 0; i < allEnemies.length; i++){
    if(this.x < allEnemies[i].x+50 && this.x+50 > allEnemies[i].x && this.y < allEnemies[i].y+30 && this.y+30 > allEnemies[i].y){
        collision = true;
        player.restart();
        break;
    }

}
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}


// Now instantiate your objects.
var allEnemies = [];
allEnemies.push(new Enemy(), new Enemy, new Enemy);// Place all enemy objects in an array called allEnemies
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
