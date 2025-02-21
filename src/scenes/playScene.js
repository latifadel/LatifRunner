import Player from "../models/player.js";
import Obstacle from "../models/obstacles.js";
import PowerUp from "../models/powerups.js";

class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: "PlayScene" });
    }

    create() {
        // Create player
        this.player = new Player(this, 100, 450);

        // Create groups for obstacles and power-ups
        this.obstacles = this.physics.add.group();
        this.powerups = this.physics.add.group();

        // Spawn obstacles periodically
        this.time.addEvent({
            delay: 2000, loop: true, callback: () => {
                let obstacle = new Obstacle(this, 800, 450, "roadblock");
                this.obstacles.add(obstacle);
            }
        });

        // Power-ups spawn
        this.time.addEvent({
            delay: 10000, loop: true, callback: () => {
                let powerup = new PowerUp(this, 800, 400, "speed_boost");
                this.powerups.add(powerup);
            }
        });

        // Player movement controls
        this.cursors = this.input.keyboard.createCursorKeys();

        // Collision handling
        this.physics.add.collider(this.player, this.obstacles, this.handleCollision, null, this);
        this.physics.add.overlap(this.player, this.powerups, this.collectPowerUp, null, this);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.moveLeft();
        }
        if (this.cursors.right.isDown) {
            this.player.moveRight();
        }
        if (this.cursors.up.isDown) {
            this.player.jump();
        }
    }

    handleCollision(player, obstacle) {
        this.scene.start("GameOverScene");
    }

    collectPowerUp(player, powerup) {
        powerup.applyEffect(player);
        powerup.destroy();
    }
}

export default PlayScene;
