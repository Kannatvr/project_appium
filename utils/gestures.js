exports.swipeUp = async function () {
    const { height, width } = await driver.getWindowSize();
    const startX = width / 2;
    const startY = height * 0.85;
    const endY = height * 0.15;

    await driver.touchPerform([
        { action: 'press', options: { x: startX, y: startY } },
        { action: 'wait', options: { ms: 300 } },
        { action: 'moveTo', options: { x: startX, y: endY } },
        { action: 'release' }
    ]);

    await driver.pause(1000);
}
