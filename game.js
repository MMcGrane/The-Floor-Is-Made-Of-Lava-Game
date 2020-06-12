const gameState = {}



function preload() {
    this.load.image("Stickman", "stickman2.png")
    this.load.image("platform", "couches.png")
    this.load.image("lavadrop", "lavadrop.png")
    this.load.image("background", "background.png")
}

function create() {
    this.add.image(400, 300, "background");
    gameState.stickman = this.physics.add.sprite(70, 50, "Stickman")
    gameState.keys = this.input.keyboard.createCursorKeys();
    const platform = this.physics.add.staticGroup();
    platform.create(400, 400, "platform");
    gameState.stickman.setCollideWorldBounds(true);

    this.physics.add.collider(gameState.stickman, platform);

    const drop = this.physics.add.group();
    const coordinates = Math.random() * 450;
    var x = 1;
    
}

function update() {
    if(gameState.keys.right.isDown) {
        gameState.stickman.setVelocityX(160);
    }
    else if(gameState.keys.left.isDown) {
        gameState.stickman.setVelocityX(-160);
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