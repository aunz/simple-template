import test from 'tape'

import template from '../src/index.js'

// var test = require('tape')


test('should throw', function (t) {	
  t.throws(()=>{template()})
  t.throws(()=>{template(null,null)})
  t.throws(()=>{template(null,{})})
  t.end()
})

test('string replacement', function (t) {	
	let actual = template(`My name is {{name}}, {{age}} years old, from {{place}}.`, {name:'kaka', age: 11, place: 'earth'})
  t.equal(actual,'My name is kaka, 11 years old, from earth.')
  
  actual = template(`{{n}}la{{n}}la{{n}}`,{n:3,m:2})
  t.equal(actual,`3la3la3`)

  actual = template(`{{n}}la{{n}}la{{n}}`,{n:3,n:4})
  t.equal(actual,`4la4la4`)

	actual = template(`{{ m }}`,{m:2})
  t.equal(actual,`{{ m }}`)
  

  t.end()
})
