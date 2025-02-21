class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: "BootScene" });
    }

    preload() {
        // Can load a minimal loading bar here
    }

    create() {
        this.scene.start("PreloadScene");
    }
}

export default BootScene;
