import Player from "../src/models/player.js";

describe("Player Mechanics", () => {
    let scene, player;

    beforeEach(() => {
        scene = { physics: { add: { existing: jest.fn() } } }; // Mock Phaser scene
        player = new Player(scene, 100, 450);
    });

    test("Player should move left", () => {
        player.moveLeft();
        expect(player.body.velocity.x).toBeLessThan(0);
    });

    test("Player should move right", () => {
        player.moveRight();
        expect(player.body.velocity.x).toBeGreaterThan(0);
    });

    test("Player should jump if on the ground", () => {
        player.body.blocked = { down: true };
        player.jump();
        expect(player.body.velocity.y).toBeLessThan(0);
    });

    test("Player should not jump if not on the ground", () => {
        player.body.blocked = { down: false };
        player.jump();
        expect(player.body.velocity.y).toBe(0);
    });

    test("Speed boost should increase speed temporarily", () => {
        player.applyPowerUp("speed_boost");
        expect(player.speedMultiplier).toBe(1.5);
    });
});
