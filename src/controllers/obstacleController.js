import Obstacle from "../models/obstacles.js";
import { OBSTACLES } from "../config/constants.js";

class ObstacleController {
    constructor(scene) {
        this.scene = scene;
        this.obstacles = this.scene.physics.add.group();
        this.startSpawning();
    }

    startSpawning() {
        this.scene.time.addEvent({
            delay: OBSTACLES.SPAWN_RATE,
            loop: true,
            callback: () => {
                this.spawnObstacle();
            }
        });
    }

    spawnObstacle() {
        let x = 800; // Spawn off-screen
        let y = 450;
        let type = Phaser.Math.RND.pick(OBSTACLES.TYPES);

        let obstacle = new Obstacle(this.scene, x, y, type);
        this.obstacles.add(obstacle);
    }

    update() {
        this.obstacles.children.iterate((obstacle) => {
            if (obstacle.x < -50) {
                obstacle.destroy();
            }
        });
    }
}

export default ObstacleController;
