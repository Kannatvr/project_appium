describe('Android Chrome Web Automation', () => {
    it('should open Google and search', async () => {
        await browser.url('https://www.google.com');
        await browser.pause(5000);
    });
});
