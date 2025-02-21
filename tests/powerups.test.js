import PowerUp from "../src/models/powerups.js";

describe("Power-Up Behavior", () => {
    let scene, powerup, player;

    beforeEach(() => {
        scene = { physics: { add: { existing: jest.fn() } } }; // Mock Phaser scene
        player = { applyPowerUp: jest.fn() };
        powerup = new PowerUp(scene, 800, 400, "speed_boost");
    });

    test("Power-up should have correct type", () => {
        expect(powerup.type).toBe("speed_boost");
    });

    test("Power-up should apply effect to player", () => {
        powerup.applyEffect(player);
        expect(player.applyPowerUp).toHaveBeenCalledWith("speed_boost");
    });

    test("Power-up should move left", () => {
        expect(powerup.body.velocity.x).toBeLessThan(0);
    });
});
