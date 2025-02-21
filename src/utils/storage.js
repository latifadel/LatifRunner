class Storage {
    static saveHighScore(score) {
        const highScore = Math.max(score, this.getHighScore());
        localStorage.setItem("highScore", highScore);
    }

    static getHighScore() {
        return parseInt(localStorage.getItem("highScore")) || 0;
    }

    static saveSettings(settings) {
        localStorage.setItem("gameSettings", JSON.stringify(settings));
    }

    static getSettings() {
        return JSON.parse(localStorage.getItem("gameSettings")) || {};
    }
}

export default Storage;
