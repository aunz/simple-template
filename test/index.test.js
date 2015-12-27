import test from 'tape'

import template from '../src/index.js'

test('should throw', function ({throws,end}) {	
  throws(()=>{template()})
  throws(()=>{template(null,null)})
  throws(()=>{template(null,{})})
  end()
})

test('string replacement', function ({equal,end}) {	
  let actual
  
  actual = template(`{{n}}la{{n}}la{{n}}`,{n:3,n:4})
  equal(actual,`4la4la4`,'If multiple only take the last')

	actual = template(`{{ m }}`,{m:2})
  equal(actual,`{{ m }}`,'no space')

  actual = template(`Eat {{fruit}} a {{duration}}, keep {{someone}} away`,{
    fruit: 'banana',
    duration: 'day',
    someone: 'doctors'
  })
  equal(actual,'Eat banana a day, keep doctors away')

  end()
})