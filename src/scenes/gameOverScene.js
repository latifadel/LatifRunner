class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: "GameOverScene" });
    }

    create() {
        this.add.text(400, 200, "Game Over", { fontSize: "32px", fill: "#ff0000" }).setOrigin(0.5);

        let retryButton = this.add.text(400, 300, "Retry", { fontSize: "24px", fill: "#ffffff" })
            .setOrigin(0.5)
            .setInteractive();

        retryButton.on("pointerdown", () => {
            this.scene.start("PlayScene");
        });
    }
}

export default GameOverScene;
