// / In app.js, require the lodash package and the custom math module.

// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.

// Run app.js using Node.js and verify that the calculations are correct.

import _ from 'lodash'

import {add, multiply} from './math'
console.log(add(2,3))
console.log(multiply(2,3))

const array = [1, 2, 3, 4, 5];
const min = _.min(array);

console.log('Min value:', min);