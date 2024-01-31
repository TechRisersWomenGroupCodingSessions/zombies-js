const Survivor = require('./survivor');

test('Survivor has name', () => {
  const survivor = new Survivor('Ford');
  expect(survivor.name).toBe('Ford');
});

test('Survivor starts with zero wounds', () => {
  const survivor = new Survivor('Ford');
  expect(survivor.wounds).toBe(0);
});
test('Survivor who receives 2 Wounds dies immediately; additional Wounds are ignored', () => {
  const survivor = new Survivor('Ford');
  survivor.getsWounded(2);

  expect(survivor.wounds).toBe(2);
});
