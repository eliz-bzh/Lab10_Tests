const getValue = (arr, pred) => {
	let value = arr[0][0];
	for (let i = 0; i != arr.length; i++) {
		for (let j = 0; j != arr.length; j++) {
			if(pred(value, arr[i][j]))
				value = arr[i][j];
		}
	}
	return value;
}

const validation = matrix => Array.isArray(matrix) &&
matrix.every(e => Array.isArray(e)) &&
matrix.every(e => e.every(el => typeof el === "number"));

const lab10_2 = (arr) => {

	if(!validation(arr) || !(arr[0].length === arr.length)){
		return new Error('Incorrect input');
	}

	const max = getValue(arr,(v1, v2)=>{return v1 < v2;});
	const min = getValue(arr,(v1, v2)=>{return v1 > v2;});

	for (let i = 0; i != arr.length; i++) {
		for (let j = 0; j != arr[0].length; j++) {
			if(arr[i][j] === max)
				arr[i][j] = Math.pow(arr[i][j], 2);
			if(arr[i][j] === min)
				arr[i][j] = 0;
		}
	}
	return arr;
}
module.exports = lab10_2;