import ResourceProcessor from './PageProcessor'

test('it should return a thing', () => {
  const processor = new ResourceProcessor()
  expect(processor.doStuff()).toBe('thing')
})
