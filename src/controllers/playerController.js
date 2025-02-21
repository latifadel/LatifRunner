import { PLAYER } from "../config/constants.js";

class PlayerController {
    constructor(player, scene) {
        this.player = player;
        this.scene = scene;
        this.speedMultiplier = 1;
        this.initControls();
    }

    initControls() {
        this.cursors = this.scene.input.keyboard.createCursorKeys();

        this.scene.input.on("pointerup", (pointer) => {
            if (pointer.up) this.jump();
        });
    }

    update() {
        if (this.cursors.left.isDown) {
            this.moveLeft();
        }
        if (this.cursors.right.isDown) {
            this.moveRight();
        }
        if (this.cursors.up.isDown) {
            this.jump();
        }
        if (this.cursors.down.isDown) {
            this.slide();
        }
    }

    moveLeft() {
        this.player.setVelocityX(-PLAYER.SPEED * this.speedMultiplier);
    }

    moveRight() {
        this.player.setVelocityX(PLAYER.SPEED * this.speedMultiplier);
    }

    jump() {
        if (this.player.body.blocked.down) {
            this.player.setVelocityY(PLAYER.JUMP_VELOCITY);
        }
    }

    slide() {
        this.player.setVelocityY(PLAYER.SLIDE_SPEED || -200);
    }

    applyPowerUp(type) {
        if (type === "speed_boost") {
            this.speedMultiplier = 1.5;
            this.scene.time.delayedCall(5000, () => (this.speedMultiplier = 1));
        }
    }
}

export default PlayerController;
