import { SCORE } from "../config/constants.js";

class LevelScene extends Phaser.Scene {
    constructor() {
        super({ key: "LevelScene" });
    }

    create() {
        this.score = 0;
        this.level = 1;

        this.scoreText = this.add.text(20, 20, `Score: ${this.score}`, { fontSize: "20px", fill: "#fff" });
        this.levelText = this.add.text(20, 50, `Level: ${this.level}`, { fontSize: "20px", fill: "#fff" });

        this.events.on("updateScore", this.updateScore, this);
    }

    updateScore(points) {
        this.score += points;
        this.scoreText.setText(`Score: ${this.score}`);

        if (this.score > this.level * 100) {
            this.level++;
            this.levelText.setText(`Level: ${this.level}`);
            this.events.emit("levelUp", this.level);
        }
    }
}

export default LevelScene;
