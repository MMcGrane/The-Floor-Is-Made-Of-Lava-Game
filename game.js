const gameState = {
    score: 0
}



function preload() {
    this.load.image("Stickman", "stickman2.png")
    this.load.image("platform", "couches.png")
    this.load.image("lavadrop", "lavadrop.png")
    this.load.image("background", "background.png")
}

function create() {
    this.add.image(400, 300, "background");
    gameState.scoretext = this.add.text(16, 16, "Score 0", {fontSize: "15px", fill: "#000000"})
    gameState.stickman = this.physics.add.sprite(70, 50, "Stickman")
    gameState.keys = this.input.keyboard.createCursorKeys();
    const platform = this.physics.add.staticGroup();
    platform.create(400, 400, "platform");
    gameState.stickman.setCollideWorldBounds(true);
    
    this.physics.add.collider(gameState.stickman, platform);

    const drop = this.physics.add.group();

    

function fireDrops() {
    const coordinates = Math.random() * 500;
    drop.create(coordinates, 0, "lavadrop")
}

const fireLoop = 
this.time.addEvent({
    delay: 2050,
    callback: fireDrops,
    callbackScope: this,
    loop: true
})

const scoreTiming  =
    this.time.addEvent({
        delay: 1,
        loop: true,
        callback: function() {
            if (gameState.stickman.alive) {
                gameState.scoreText += 10;
            }
        }

    });
}


function update() {
    if(gameState.keys.right.isDown) {
        gameState.stickman.setVelocityX(180);
    }
    else if(gameState.keys.left.isDown) {
        gameState.stickman.setVelocityX(-160);
    }
    else if(gameState.keys.space.isDown) {
        gameState.stickman.setVelocityY(-200)
    }
    else {
        gameState.stickman.setVelocityX(0);
    }
}



const config = {
    type: Phaser.AUTO,
    height: 500, 
    width: 850,
    backgroundColor: "#e5ed53",
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y:300},
            debug: true
        }
    },
    scene: {
        preload,
        create,
        update
    }
}


const game = new Phaser.Game(config)