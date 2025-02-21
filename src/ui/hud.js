import { SCORE } from "../config/constants.js";

class HUD extends Phaser.Scene {
    constructor() {
        super({ key: "HUDScene" });
    }

    create() {
        // Score Display
        this.score = 0;
        this.scoreText = this.add.text(20, 20, `Score: ${this.score}`, { fontSize: "20px", fill: "#fff" });

        // Level Display
        this.level = 1;
        this.levelText = this.add.text(20, 50, `Level: ${this.level}`, { fontSize: "20px", fill: "#fff" });

        // Power-up Display
        this.activePowerup = this.add.text(20, 80, `Power-Up: None`, { fontSize: "18px", fill: "#ff0" });

        // Listen for score updates
        this.scene.get("PlayScene").events.on("updateScore", this.updateScore, this);
        this.scene.get("PlayScene").events.on("activatePowerUp", this.displayPowerUp, this);
    }

    updateScore(points) {
        this.score += points;
        this.scoreText.setText(`Score: ${this.score}`);

        if (this.score > this.level * 100) {
            this.level++;
            this.levelText.setText(`Level: ${this.level}`);
        }
    }

    displayPowerUp(type) {
        this.activePowerup.setText(`Power-Up: ${type}`);
        this.time.delayedCall(5000, () => {
            this.activePowerup.setText(`Power-Up: None`);
        });
    }
}

export default HUD;
