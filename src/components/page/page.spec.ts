import PageProcessor from './PageProcessor'

test('it should return a thing', () => {
  const processor = new PageProcessor()
  expect(processor.doStuff()).toBe('thing')
})
