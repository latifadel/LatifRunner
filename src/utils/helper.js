class Helper {
    static getRandomElement(array) {
        return array[Phaser.Math.Between(0, array.length - 1)];
    }

    static formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }

    static clamp(value, min, max) {
        return Math.max(min, Math.min(value, max));
    }
}

export default Helper;
