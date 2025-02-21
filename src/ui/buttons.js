class Button extends Phaser.GameObjects.Text {
    constructor(scene, x, y, label, callback) {
        super(scene, x, y, label, { fontSize: "24px", fill: "#ffffff", backgroundColor: "#000000", padding: { x: 10, y: 5 } });

        this.setOrigin(0.5);
        this.setInteractive({ useHandCursor: true });

        this.on("pointerdown", callback);
        this.on("pointerover", () => this.setStyle({ fill: "#ff0" }));
        this.on("pointerout", () => this.setStyle({ fill: "#fff" }));

        scene.add.existing(this);
    }
}

export default Button;
