'use strict'
/*
function myCalculator(birthYear){
    const age = 2021 - birthYear
    return age
}
const myAge = myCalculator(1992)
console.log(myAge)

//declaration and expression
function salaryCalculator(experience){
    return experience * 2
}
const salary = salaryCalculator(5)
*/

/*const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolpins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    }else{
        console.log(`No winner`)
    }
}
const avgDolphins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(23, 34, 27)
checkWinner(avgDolphins, avgKoalas)*/

// 15% of bill 50 - 300
// 20%

/*const bills = [125, 555, 44]
const tips = []
const calcTip = (billValue) => {
    if(billValue > 50 && billValue < 300){
        // return billValue * 0.15
        tips.push(billValue * 0.15)
    }else{
        // return billValue * 0.20
        tips.push(billValue * 0.20)
    }
}

calcTip(bills[0])
calcTip(bills[1])
calcTip(bills[2])

console.log(tips.toString())*/

/*const person = {
    name: 'Mohita',
    // age: 29,
    year: 1992,
    skills: ['one', 'two', 'three'],
    hasDriverLicense: false,
    // calcAge: function(year){
    //     return 2021 - year
    // }
    calcAge: function(){
        // return 2021 - this.year
        this.age = 2021 - this.year
    },
    getSummary: function(){
        return `${this.name} is a ${this.age} teacher. She has multiple skills`
    }
}

console.log(person.age)
console.log(person.skills[0])
console.log(person['skills'][1])
console.log(person.calcAge())
console.log(person['calcAge']())
console.log(person.getSummary())*/

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.bmi = this.mass / (this.height ** 2)
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.bmi = this.mass / (this.height ** 2)
    }
}

if(john.calcBMI() > mark.calcBMI()){
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})`)
}else{
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})`)
}
