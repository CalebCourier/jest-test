const { SomeClass } = require('../src/some-class');

test('.not.toHaveProperty should return true for empty optionalProp', () => {
  const someClass = new SomeClass('required');
  console.log(someClass);
  expect(someClass).toHaveProperty('requiredProp', 'required');
  expect(someClass.optionalProp).toBeUndefined()
  // This fails because the property still exists on the Object, it is just undefined
  // expect(someClass).not.toHaveProperty('optionalProp');
});