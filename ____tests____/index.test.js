import sum from '..';

describe('describe block', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 2 + 2 to equal 4', done => {
    setTimeout(() => {
      expect(sum(2, 2)).toBe(4);
      done();
    });
  });
});