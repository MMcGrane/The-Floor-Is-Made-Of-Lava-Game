const gameState = {}

function preload() {
    this.load.image("Stickman", "stickman.png")
}

function create() {
    gameState.stickman = this.physics.add.sprite(70, 50, "Stickman")
    gameState.keys = this.input.keyboard.createCursorKeys();
}

function update() {
    if(gameState.keys.right.isDown) {
        gameState.stickman.setVelocityX(180);
    }
    else if(gameState.keys.left.isDown) {
        gameState.stickman.setVelocityX(-180);
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