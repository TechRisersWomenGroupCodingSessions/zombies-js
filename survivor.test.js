const Survivor = require('./survivor');

test('Survivor has name', () => {
    const survivor = new Survivor("Ford");
    expect(survivor.name).toBe("Ford");
});

test('Survivor starts with zero wounds', () => {
    const survivor = new Survivor("Ford");
    expect(survivor.wounds).toBe(0);
});
