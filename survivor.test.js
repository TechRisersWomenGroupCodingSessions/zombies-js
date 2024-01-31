const Survivor = require('./survivor');

test('Survivor has name', () => {
  const survivor = new Survivor('Ford');
  expect(survivor.name).toBe('Ford');
});

test('Survivor starts with zero wounds', () => {
  const survivor = new Survivor('Ford');
  expect(survivor.wounds).toBe(0);
});

test('Survivor who receives 1 Wounds does not die', () => {
  const survivor = new Survivor('Ford');
  survivor.getsWounded(1);

  expect(survivor.wounds).toBe(1);
  expect(survivor.isAlive()).toBe(true)
});

test('Survivor who receives 2 Wounds dies immediately', () => {
  const survivor = new Survivor('Ford');
  survivor.getsWounded(2);

  expect(survivor.wounds).toBe(2);
  expect(survivor.isAlive()).toBe(false)
});

test('additional Wounds (more than 2) are ignored', () => {
  const survivor = new Survivor('Ford');
  survivor.getsWounded(3);

  expect(survivor.wounds).toBe(2);
  expect(survivor.isAlive()).toBe(false)
});
