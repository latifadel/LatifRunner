import { OBSTACLES } from "../config/constants.js";

class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, type = "roadblock") {
        super(scene, x, y, "obstaclePlaceholder");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setVelocityX(-OBSTACLES.SPEED);
        this.type = type;

        if (type === "moving_car") {
            this.setVelocityX(-OBSTACLES.SPEED * 1.5); // Cars move faster
        }
    }
}

export default Obstacle;
