/*
let javascript = 'amazing'
if(javascript === 'amazing'){
    alert('Javascript is fun')
}
let sum = 40+56+90
console.log(sum)

//Values and Variables
let country = 'India'
let continent = 'Asia'
let population = '143 crore'

console.log(country, continent, population)


//data types
let a = 10
console.log( typeof a)
a = 'mohota'
console.log(typeof a)
a = true
console.log(typeof a)

let b
console.log(typeof b)

b = null
console.log(typeof b)

console.log(typeof undefined)
console.log(typeof null)

const isIsland = false
let language
console.log(typeof isIsland, typeof language, typeof population, typeof country)


const johnsWeight = 80
const marksWeight = 101
const johnsHeight = 1.69
const marksHeight = 1.75
const johnBMI = 80/ 1.69 ** 2
const marksBMI = 101/1.75 ** 2

const isMarkBMIHigher = marksBMI > johnBMI
console.log(isMarkBMIHigher)

const a = "1" + 1
console.log(a)
const b = 1 + "1"
console.log(b)
const c = "2" - 1
console.log(c)
const d = 2 - "1e"
console.log(d)
const e = 2 + 3 + "5a"
console.log(e)

const johnsWeight = 80
const marksWeight = 101
const johnsHeight = 1.69
const marksHeight = 1.75
const johnBMI = 80/ 1.69 ** 2
const marksBMI = 101/1.75 ** 2

if(marksBMI > johnBMI){
    console.log(`Mark's BMI (${marksBMI}) is greater than John's BMI (${johnBMI})`)
}else{
    console.log(`Mark's BMI (${marksBMI}) is lesser than John's BMI (${johnBMI})`) 
}

const dolphinsAvg = (97 + 112 + 101) / 3
const koalaAvg = (109 + 95 + 123)/3

if(dolphinsAvg > 100 && dolphinsAvg > koalaAvg){
    console.log(`Team Dolphin is the winnder. Score : ${dolphinsAvg}`)
}else if(dolphinsAvg === koalaAvg){
    console.log(`It's a tie game`)
}else if(koalaAvg > 100 && koalaAvg > dolphinsAvg){
    console.log(`Team Koala is the winner. Score : ${koalaAvg}`)
}else{
    console.log(`No winner`)
}
*/

const bill = 275
const tip = (50 < bill < 300) ? bill * 0.15 : bill * 0.20
console.log(`The bill value was ${bill}. The tip was ${tip}. The total was ${bill + tip}`)
