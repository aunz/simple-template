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
	const map = Object.keys(replacement).reduce((p,n) => {		
		return {...p,['{{'+n+'}}']:replacement[n]}
	},{})	
	
	const re = new RegExp(Object.keys(map).join('|'),'g')
	return string.replace(re,(match)=>{		
		return map[match]
	})
}