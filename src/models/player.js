import { PLAYER } from "../config/constants.js";

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "playerPlaceholder"); // Uses placeholder for now

        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Player physics settings
        this.setCollideWorldBounds(true);
        this.setGravityY(PLAYER.GRAVITY || 1000);

        // Track power-ups
        this.hasPowerUp = false;
        this.speedMultiplier = 1;
    }

    moveLeft() {
        this.setVelocityX(-PLAYER.SPEED * this.speedMultiplier);
    }

    moveRight() {
        this.setVelocityX(PLAYER.SPEED * this.speedMultiplier);
    }

    jump() {
        if (this.body.blocked.down) {
            this.setVelocityY(PLAYER.JUMP_VELOCITY);
        }
    }

    slide() {
        // Can be used for sliding animation later
        this.setVelocityY(PLAYER.SLIDE_SPEED || -300);
    }

    applyPowerUp(type) {
        if (type === "speed_boost") {
            this.speedMultiplier = 1.5;
            this.scene.time.delayedCall(5000, () => (this.speedMultiplier = 1));
        }
    }
}

export default Player;
