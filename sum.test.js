import {capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './sum';

test('capitalize the first letter', () => {
  expect(capitalize("cat")).toBe("Cat");
});

test('string is capital', () => {
    expect(capitalize("DOG")).toBe("DOG");
});

test('Reverse string', () => {
    expect(reverseString("Hello")).toBe("olleH")
});

test('multiply function should return correct product', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

test('subtract function should return correct product', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('divide function should return correct product', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('addfunction should return correct product', () => {
  expect(calculator.add(10, 2)).toBe(12);
});

test('CaesarCipher', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});


test('CaesarCipher', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('CaesarCipher', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});


test('analyzeArray', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
 });
})