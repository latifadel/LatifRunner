class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        // Placeholder graphics (if no PNGs)
        this.load.image("playerPlaceholder", "assets/images/characters/player_placeholder.png");
        this.load.image("obstaclePlaceholder", "assets/images/obstacles/obstacle_placeholder.png");

        // UI Elements
        this.load.image("buttonStart", "assets/images/ui/button_start.png");

        // Load audio
        this.load.audio("bgMusic", "assets/audio/music/background.mp3");

        // Display Loading Progress
        let loadingText = this.add.text(400, 300, "Loading...", { fontSize: "20px", fill: "#fff" }).setOrigin(0.5);
        this.load.on("progress", (value) => {
            loadingText.setText(`Loading... ${Math.floor(value * 100)}%`);
        });
    }

    create() {
        this.scene.start("MenuScene");
    }
}

export default PreloadScene;
