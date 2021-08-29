// $ npm i -S run-func

// $ npm install @types/node --save-dev

// $ npm run exerciseCalculator

// $ npm run calculateExercises "[3, 0, 2, 4.5, 0, 3, 1]" 2

interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

// 9.2
export const calculateExercises  = (array : Array<number>, target : number) : Result => {

    const periodLength : number = array.length

    const trainingDays : number = array.filter(v => v > 0).length

    const average : number = (array.reduce((a, b) => a + b, 0) / array.length)

    let success : boolean = true

    let rating : number = 2

    let ratingDescription : string = 'not too bad but could be better'

    const step : number = 1.0

    const rounded : number = Math.round(average / step) * step

    if (average < target) {
        success = false
    }

    if (rounded < target) {
        ratingDescription = 'average could be better'
        rating = 1
    }

    if (rounded > target) {
        ratingDescription = 'better than target'
        rating = 3
    }

    const result = { 
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average 
    }

    return result 
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))

console.log('$ npm run calculateExercises "[3, 0, 2, 4.5, 0, 3, 1]" 2')

const array: Array<number> = JSON.parse(process.argv[2])

const target: number = Number(process.argv[3])

console.log(array, target)

// 9.3
console.log(calculateExercises(array, target))
