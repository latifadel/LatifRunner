class Collision {
    static checkPlayerObstacle(player, obstacles, scene) {
        scene.physics.add.collider(player, obstacles, () => {
            scene.scene.start("GameOverScene");
        });
    }

    static checkPlayerPowerup(player, powerups, scene) {
        scene.physics.add.overlap(player, powerups, (player, powerup) => {
            powerup.applyEffect(player);
            powerup.destroy();
            scene.events.emit("activatePowerUp", powerup.type);
        });
    }
}

export default Collision;
