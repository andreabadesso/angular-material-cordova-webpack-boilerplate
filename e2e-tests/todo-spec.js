describe('App test suite', function() {
    it('Entering home', function() {
        browser.get('http://localhost:9000/');
    });

    it('Writing on input', function() {
        expect(1).toEqual(1);
    });
});
