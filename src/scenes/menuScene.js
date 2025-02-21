class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: "MenuScene" });
    }

    create() {
        // Add title text
        this.add.text(400, 200, "Latif Runner", { fontSize: "32px", fill: "#ffffff" }).setOrigin(0.5);

        // Add start button
        let startButton = this.add.text(400, 300, "Start", { fontSize: "24px", fill: "#00ff00" })
            .setOrigin(0.5)
            .setInteractive();

        startButton.on("pointerdown", () => {
            this.scene.start("PlayScene");
        });
    }
}

export default MenuScene;
