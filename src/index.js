/**
 * Replace a string with multiple matches
 * @arg {string} string 
 * @arg {object} replacement
 * @return {string}
 * @example 
 * template("My name is {{name}}, {{age}} years old.",{name:'kaka', age:11})
 * // return "My name is kaka, 11 years old."
 */

export default (string,replacement) => {
	let keys = Object.keys(replacement),
	  l = keys.length,
	  map = {},
	  re = ''

	while (l--) {
		map['{{'+keys[l]+'}}'] = replacement[keys[l]]
		re += '{{'+keys[l]+'}}'
		re += l ? '|' : ''		
	}
	
	re = new RegExp(re,'g')
	return string.replace(re, match => map[match] )
}