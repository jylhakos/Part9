
// $ npm init 

// $ npm install -g ts-node typescript

// $ npm install --save-dev @types/node

// $ npm run ts-node -- calculateBmi.ts

// $ npm run calculateBmi

 const calculateBmi = (a: number, b: number) : string => {

 	const normal = 13500

 	const normal_message = "Normal (healthy weight)"

	console.log(a * b)

	if ((a * b) < normal) {
		return normal_message
	}
}

// 9.1
console.log(calculateBmi(180, 74))

const a: number = Number(process.argv[2])
	
const b: number = Number(process.argv[3])

// $ npm run calculateBmi 180 74

// 9.3
console.log(calculateBmi(a, b))
