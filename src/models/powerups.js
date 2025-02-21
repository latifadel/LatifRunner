import { POWERUPS } from "../config/constants.js";

class PowerUp extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, type = "speed_boost") {
        super(scene, x, y, "powerupPlaceholder");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.type = type;
        this.setVelocityX(-200); // Moves towards player

        if (type === "coin_magnet") {
            this.setTint(0xffff00); // Yellow tint for coins
        } else if (type === "invincibility") {
            this.setTint(0xff0000); // Red tint for shield
        }
    }

    applyEffect(player) {
        if (this.type === "speed_boost") {
            player.applyPowerUp("speed_boost");
        }
    }
}

export default PowerUp;
