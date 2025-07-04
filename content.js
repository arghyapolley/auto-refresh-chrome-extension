let idleTime = 0;
const refreshInterval = 60;

function resetIdleTime() {
    idleTime = 0;
}

["mousemove", "mousedown", "keypress", "DOMMouseScroll", "mousewheel", "touchmove"].forEach(event => {
    document.addEventListener(event, resetIdleTime, true);
});

setInterval(() => {
    idleTime += 1;
    if (idleTime >= refreshInterval) {
        location.reload();
    }
}, 1000);
