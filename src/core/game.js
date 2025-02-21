import { GAME_SETTINGS } from "../config/settings.js";
import BootScene from "../scenes/bootScene.js";
import PreloadScene from "../scenes/preloadScene.js";
import PlayScene from "../scenes/playScene.js";
import MenuScene from "../scenes/menuScene.js";
import GameOverScene from "../scenes/gameOverScene.js";

const config = {
    type: Phaser.AUTO,
    width: GAME_SETTINGS.width,
    height: GAME_SETTINGS.height,
    backgroundColor: GAME_SETTINGS.backgroundColor,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: GAME_SETTINGS.gravity },
            debug: GAME_SETTINGS.enableDebug
        }
    },
    scene: [BootScene, PreloadScene, MenuScene, PlayScene, GameOverScene]
};

const game = new Phaser.Game(config);

export default game;
