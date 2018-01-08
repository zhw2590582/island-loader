import compiler from './compiler.js';

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('example.island', {
    author: 'Harvey Zack',
    email: '717995589@qq.com',
    homepage: 'http://www.zhw-island.com'
  });
  const output = stats.toJson().modules[0].source;
  expect(output.includes('Harvey Zack')).toBeTruthy();
  expect(output.includes('717995589@qq.com')).toBeTruthy();
  expect(output.includes('http://www.zhw-island.com')).toBeTruthy();
});
