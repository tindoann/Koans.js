/*

# JavaScript Koans

**ko·an**
/ˈkōän/
_noun_
> a paradoxical anecdote or riddle, used in Zen Buddhism to demonstrate the inadequacy of logical reasoning and to provoke enlightenment.
JavaScript Koans is an interactive learning environment that uses failing tests to introduce students to aspects of JavaScript in a logical sequence. These problems will be very simple, so don't overthink them! In most cases the solution is in the question itself. This is about practice and exposure. This should be practiced regularly, in fact you will given this assignment a number of times.

## Running the koans

First, fork and clone [the repository](https://github.com/tiy-tpa-fee/koans) from your own account, if needed.

```sh
yarn install
yarn reset
yarn test
```

Start editing `koans.js`. You only need replace instances of `__` in each test case to make it pass. You shouldn't need to edit any other code.

Don't edit `koans.original.js`. I will also be improving and extending the set of koans over time, so you'll be able to pull upstream changes to this file (using `yarn reset`).

## Explorer & Adventure Mode

- Complete all of the available koans.

*/

import test from 'ava'
const __ = undefined

/**
 * Assertions
 */

test('What will satisfy the truthy assertion?', t => {
  t.truthy(__)
})

test('What is a falsey value?', t => {
  t.falsy(__)
})

test('What is true?', t => {
  t.true(__)
})

test('What is false?', t => {
  t.false(__)
})

test('What will satisfy the equality assertion?', t => {
  t.is(__, 1 + 1)
})

test('What will satisfy the inequality assertion?', t => {
  t.not(__, 1 + 1)
})

/**
 * Operators
 */

test('What is addition?', t => {
  t.is(28 + __, 42)
})

test('What is assignment addition?', t => {
  let result = 34
  result += 23 // Equivalent to `result = result + n`; but more concise.

  t.is(__, result)
})

test('What is subtraction?', t => {
  t.is(30 - __, 21)
})

test('What is assignment subtraction?', t => {
  let result = 5
  result -= 2

  t.is(__, result)
})

// Assignment operators are available for multiplication and division as well.
// Let's do one more, the modulo (%) operator, used for showing division remainder.

test('What is modulus?', t => {
  const x = 5
  let result = 10
  result %= x // Same as `result = result % x`.

  t.is(__, result, 'What is the value of result?')
})

/**
 * Equality
 */

test('What is equality without type coercion?', t => {
  const numberLiteral = 3

  t.true(__ === numberLiteral)
})

test('What is equality with type coercion?', t => {
  const quotedNumber = '3'

  // eslint-disable-next-line eqeqeq
  t.true(quotedNumber == __)
})

/**
 * Truthyness
 *   https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 */

test('What is the truthyness of positive numbers?', t => {
  const oneIsTruthy = !!1

  t.is(__, oneIsTruthy)
})

test('What is the truthyness of negative numbers?', t => {
  const negativeOneIsTruthy = !!-1

  t.is(__, negativeOneIsTruthy)
})

test('What is the truthyness of zero?', t => {
  const zeroIsTruthy = !!0

  t.is(__, zeroIsTruthy)
})

test('What is the truthyness of null?', t => {
  const nullIsTruthy = !!null

  t.is(__, nullIsTruthy)
})

test('What is the truthyness of undefined?', t => {
  const undefinedIsTruthy = !!undefined

  t.is(__, undefinedIsTruthy)
})

/**
 * Assignment
 */

test('Assigning a value to a local variable.', t => {
  let one
  one = 1 // eslint-disable-line prefer-const

  t.is(__, one)
})

/**
 * Numbers
 */

test('Are itegers and floats the same type?', t => {
  const typeOfInteger = typeof 6
  const typeOfFloat = typeof 3.14159

  t.is(__, typeOfInteger === typeOfFloat)
})

test('What is the javascript numeric type?', t => {
  const typeOfInteger = typeof 42

  t.is(__, typeOfInteger)
})

test('What is a integer number equivalent to 1.0?', t => {
  t.is(__, 1.0)
})

test('What is NaN?', t => {
  const resultOfFailedOperations = 42 / 'wat'

  t.is(__, isNaN(resultOfFailedOperations))
})

test('is NaN the same as NaN??!?', t => {
  const resultOfFailedOperations = 42 / 'wat'

  // eslint-disable-next-line use-isnan,eqeqeq
  t.is(__, resultOfFailedOperations == NaN, '')
})

/**
 * Strings
 */

test('Are similar strings with different delimiters equal?', t => {
  // eslint-disable-next-line quotes
  const doubleQuotedString = "apple"
  const singleQuotedString = 'apple'

  t.is(__, doubleQuotedString === singleQuotedString)
})

test('What is string concatenation?', t => {
  const fruit = 'apple'
  const dish = 'pie'

  t.is(__, fruit + ' ' + dish)
})

test('What are character escape sequences?', t => {
  const stringWithAnEscapedCharacter = '\u0041pple'

  t.is(__, stringWithAnEscapedCharacter, '')
})

test('How do you find the length of a string?', t => {
  const fruit = 'apple'

  t.is(__, fruit.length)
})

test('What is slicing a string?', t => {
  const fruit = 'apple pie'

  t.is(__, fruit.slice(0, 5))
})

/**
 * Control Structures
 */

test('What is an if statement?', t => {
  const two = 2
  let isPositive = false
  if (two > 0) {
    isPositive = true
  }

  t.is(__, isPositive)
})

test('What is a for loop?', t => {
  let counter = 10
  for (let i = 1; i <= 3; i++) {
    counter = counter + i
  }

  t.is(__, counter)
})

test('What is a ternary operator?', t => {
  const two = 2
  let fruit = two > 0 ? 'apple' : 'orange'
  t.is(__, fruit)

  fruit = two < 0 ? 'apple' : 'orange'
  t.is(__, fruit)
})

test('What is a switch statement?', t => {
  let result = 0
  switch (2) {
    case 1:
      result = 1
      break
    case 1 + 1:
      result = 2
      break
  }

  t.is(__, result)
})

test('What is the default case of a switch statement?', t => {
  let hobbit = 'Pippin'
  switch ('m') {
    case 'f':
      hobbit = 'Frodo'
      break
    case 's':
      hobbit = 'Samwise'
      break
    default:
      hobbit = 'Merry'
      break
  }

  t.is(__, hobbit)
})

test('What is "null coalescing?"', t => {
  const result = null || 'something'

  t.is(__, result)
})

/**
 * Arrays
 */

test('What is indexing an array literal', t => {
  const things = ['cellar door', 42, true]

  t.is(__, things[0])
  t.is(__, things[1])
  t.is(__, things[2])
})

test('What is the type of an array?', t => {
  const typeOfArray = typeof []

  t.is(__, typeOfArray)
})

test('What is the length of of an array?', t => {
  t.is(__, ['a', 'b', 'c'].length)
})

test('What are stack methods on arrays?', t => {
  const stack = []
  stack.push('first')
  stack.push('second')

  t.is(__, stack.pop())
  t.is(__, stack.pop())
})

test('What are queue methods on arrays?', t => {
  const queue = []
  queue.push('first')
  queue.push('second')
  queue.unshift('third')

  t.is(__, queue.shift())
  t.is(__, queue.shift())
})

/**
 * Objects
 */

test('What is the type of an object?', t => {
  const typeOfEmptyObject = typeof {}

  t.is(__, typeOfEmptyObject)
})

test('What is object literal notation?', t => {
  const person = {
    name: 'Amory Blaine',
    age: 102
  }

  t.is(__, person.name)
  t.is(__, person.age)
})

test('Dynamically adding properties to an object.', t => {
  const person = {}
  person.__ = 'Amory Blaine'
  person.__ = 102
  t.is('Amory Blaine', person.name)
  t.is(102, person.age)
})

test('Accessing object properties with strings.', t => {
  const person = { name: 'Amory Blaine', age: 102 }

  t.is(person['__'], 'Amory Blaine')
  t.is(person['__'], 102)
})

/**
 * Regular Expressions
 */

test('Does the string provided contain "select"?', (t) => {
  const containsSelect = /select/.test('  select * from users ')
  t.is(__, containsSelect)
})

test('What is the value of pie?', (t) => {
  let pie = 'apple pie'.replace('apple', 'strawberry')
  t.is(__, pie)

  pie = 'what if 6 turned out to be 9?'.replace(/\d/g, function (number) { // the second parameter can be a string or a function
    const map = {'6': 'six', '9': 'nine'}
    return map[number]
  })
  t.is(__, pie)
})

/**
 * Enumerating
 */

test('Use filter to return array items that meet a criteria', (t) => {
  const numbers = [1, 2, 3]
  const odd = numbers.filter((x) => {
    return x % 2 !== 0
  })

  t.is(__, numbers.length)
  t.deepEqual([__], odd)
  t.is(__, odd.length)
})

test('Use map to transform each element', (t) => {
  const numbers = [1, 2, 3]
  const numbersPlus1 = numbers.map((x) => {
    return x + 1
  })

  t.deepEqual(__, numbersPlus1)
  t.deepEqual(__, numbers)
})

test('Use reduce to update the same result on each iteration', (t) => {
  const numbers = [1, 2, 3]
  const sum = numbers.reduce((memo, x) => {
    return memo + x
  }, 0)

  t.is(__, sum)
  t.deepEqual(__, numbers)
})

test('Use some and every to determine if a function applied to any or all items is true', (t) => {
  const onlyEven = [2, 4, 6]
  const mixedBag = [2, 4, 5, 6]
  const isEven = x => x % 2 === 0

  t.is(__, onlyEven.every(isEven))
  t.is(__, mixedBag.some(isEven))
})
 
{
  "private": true,
  "scripts": {
    "start": "yarn test",
    "test": "ava koans.js",
    "reset": "curl 'https://raw.githubusercontent.com/tiy-tpa-fee/koans/master/koans.original.js' -o koans.js && git add koans.js && git commit -m 'Reset koans.js'"
  },
  "devDependencies": {
    "ava": "^0.16.0",
    "eslint": "^3.10.1",
    "eslint-config-standard": "^6.2.1",
    "eslint-plugin-promise": "^3.3.2",
    "eslint-plugin-standard": "^2.0.1"
  },
  "ava": {
    "failFast": true,
    "serial": true,
    "watch": true,
    "verbose": true
  },
  "eslintConfig": {
    "extends": "standard",
    "rules": {
      "prefer-const": "warn"
    }
  }
}