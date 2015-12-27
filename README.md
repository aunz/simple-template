# simple-template

* installation
```shell
npm i @aunz/simple-template -S
```

* usage
```jsx
import template from '@aunz/simple-template'

const text = template(`Eat {{fruit}} a {{duration}}, keep {{someone}} away`, {
	fruit: 'banana',
	duration: 'day',
	someone: 'doctors'
})

console.log(text)
//=> Eat banana a day, keep doctors away
