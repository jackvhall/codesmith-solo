import MenuProcessor from './MenuProcessor'

test('it should return a thing', () => {
  const processor = new MenuProcessor()
  expect(processor.doStuff()).toBe('thing')
})
