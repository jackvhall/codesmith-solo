import ResourceProcessor from './ResourceProcessor'

test('it should return a thing', () => {
  const processor = new ResourceProcessor()
  expect(processor.doStuff()).toBe('thing')
})
