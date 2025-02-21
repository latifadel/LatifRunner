export const ENVIRONMENT = {
    isMobile: /Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
    touchControls: "ontouchstart" in document.documentElement,
    soundEnabled: true, // Enable sound by default
    uiScale: this.isMobile ? 0.8 : 1.0, // UI scaling for mobile
};
