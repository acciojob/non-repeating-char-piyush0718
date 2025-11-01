function firstNonRepeatedChar(str) {
 // Write your code here
	let count = {};
	for(let ch of str){
		count[ch] = (count[ch] || 0) + 1;
	}
	for(let ch of str){
		if(count[ch]===1){
			return ch;
		}
	}
	return null;
}
let input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input)); 
