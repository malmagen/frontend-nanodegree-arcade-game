//Sorry about first submit thought this version was already pushed to github
//keeps the score when player reaches the water
var score = 0;

// Enemies our player must avoid
var Enemy = function() {

    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    var random_pos = Math.floor(Math.random() * 3);
    this.y = 60 + 83 * random_pos;
    this.speed = Math.floor(Math.random()*200);
    if(this.speed<50){
        this.speed = 50;
    }



};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    this.x = this.speed * dt + this.x;
    if(this.x > 403){
        this.x = 0;
        random_pos = Math.floor(Math.random() *3);
        this.y = 60 + 83 * random_pos;

    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);


}


var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.y = 400 ;//
    this.x = 202;


};

//draws the score and add points if player is able to reach the water.
//Calls the collison function
Player.prototype.update = function() {
    ctx.font = "30pt Calibri";
    ctx.fillStyle = "black";

    ctx.fillText('Score'+' '+ score , 200,30);

    player.collision();
    console.log(this.y);
    if(this.y <= -20){

        ctx.clearRect(300,0, 40,40);
        score++;
        player.restart();

    }


}

//update players x and y coordinate depending on which
//key was pressed
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

//check the players x and y position with all the enemies
//if they are touching the restart function is called
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
//is called if collision is true and resets players position
Player.prototype.restart = function(){

    this.y = 400;
    this.x = 202;
}
//draws the player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}


//instantiate the enemiees and place them in the allEnemies array.
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
