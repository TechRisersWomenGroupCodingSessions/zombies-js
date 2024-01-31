const Survivor = require('./survivor');

test('Survivor has name', () => {
    const survivor = new Survivor("Ford");
    expect(survivor.name).toBe("Ford");
});
