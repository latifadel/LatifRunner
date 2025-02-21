import Obstacle from "../src/models/obstacles.js";

describe("Obstacle Behavior", () => {
    let scene, obstacle;

    beforeEach(() => {
        scene = { physics: { add: { existing: jest.fn() } } }; // Mock Phaser scene
        obstacle = new Obstacle(scene, 800, 450, "roadblock");
    });

    test("Obstacle should have correct type", () => {
        expect(obstacle.type).toBe("roadblock");
    });

    test("Obstacle should move left", () => {
        expect(obstacle.body.velocity.x).toBeLessThan(0);
    });

    test("Moving car should be faster than normal obstacles", () => {
        let movingCar = new Obstacle(scene, 800, 450, "moving_car");
        expect(movingCar.body.velocity.x).toBeLessThan(obstacle.body.velocity.x);
    });
});
