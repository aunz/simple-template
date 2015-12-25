# simple-template

* installation
```shell
npm i @aunz/simple-template -S
```

* usage
```jsx
import template from '@aunz/simple-template'
const text = template(`Hello, my name is {{name}}. I am {{age}} years old.`,{
  name: 'Kitty',
  age: 8
})

console.log(text)
//=> Hello, my name is Kitty. I am 8 years old.
