var fs = require('fs')
var input = fs.readFileSync(process.argv[2], 'utf-8')
var output = process.argv[3]


var arr = input.split('\n')
// console.log(arr)

// key generation
var keys = arr[0].split(',')

// console.log(keys)

// object generation
var json = []

for (var i = 1; i < arr.length; i++) {
	var helper ={}
	var csv = arr[i].split(',')
	for (var j = 0; j < keys.length; j++) {
		helper[keys[j]] = csv[j]
		// console.log(helper)
	};
	// console.log(helper)
	json.push(helper)
	helper = {}
	

};

console.log('Output: ', json)
fs.writeFileSync(output, JSON.stringify(json))