import PowerUp from "../models/powerups.js";
import { POWERUPS } from "../config/constants.js";

class PowerUpController {
    constructor(scene, player) {
        this.scene = scene;
        this.player = player;
        this.powerups = this.scene.physics.add.group();
        this.startSpawning();
    }

    startSpawning() {
        this.scene.time.addEvent({
            delay: 10000, // Power-up spawn rate
            loop: true,
            callback: () => {
                this.spawnPowerUp();
            }
        });
    }

    spawnPowerUp() {
        let x = 800; // Spawn off-screen
        let y = Phaser.Math.Between(300, 450);
        let type = Phaser.Math.RND.pick(Object.keys(POWERUPS));

        let powerup = new PowerUp(this.scene, x, y, type);
        this.powerups.add(powerup);
    }

    handleCollision(player, powerup) {
        powerup.applyEffect(player);
        powerup.destroy();
    }
}

export default PowerUpController;
