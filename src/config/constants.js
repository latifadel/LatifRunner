export const PLAYER = {
    START_X: 100,         // Initial X position of the player
    START_Y: 450,         // Initial Y position of the player
    LIVES: 3,             // Player starting lives
    INVINCIBILITY_TIME: 2000 // Invincibility duration after hit (ms)
};

export const OBSTACLES = {
    TYPES: ["car", "vendor", "roadblock"], // Different obstacles
    SPEED: 200,                             // Default obstacle speed
    SPAWN_RATE: 1500                        // Time (ms) between obstacle spawns
};

export const POWERUPS = {
    SPEED_BOOST: { duration: 5000, effect: 1.5 },   // 1.5x speed for 5 seconds
    COIN_MAGNET: { duration: 8000 },                // Attracts coins
    INVINCIBILITY: { duration: 4000 }               // No damage for 4 seconds
};

export const SCORE = {
    COIN_VALUE: 10,       // Points per collected coin
    DISTANCE_MULTIPLIER: 1 // Score per pixel moved
};
