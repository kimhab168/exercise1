// 1 Iterate through the numbers 1 to 10, and at each iteration print “i”
for(let i=0;i<=10;i++)
    console.log(i)
//2 Iterate through the numbers 10 to 1, and at each iteration print “i”
for(let i=10;i>=0;i--)
    console.log(i)
//3 Convert numerical grades into letter grades (A, B, C, D, E, F)
let grades = [13,25,66,78,86,90,97]
for(let i=0;i<grades.length;i++)
    if(grades[i] >=90)
        console.log("Grade : A")
    else if(grades[i] >=80)
        console.log("Grade : B")
    else if(grades[i] >=70)
        console.log("Grade : C")
    else if(grades[i] >=60)
        console.log("Grade : D")
    else if(grades[i] >=50)
        console.log("Grade : E")
    else
        console.log("Grade : F")

//4 A company has a list of employees and their salary in separate arrays. You are tasked with the job of printing our the name of each employee and the employee’s salary as a string in the format: “Employee name: Employee salary”
// Example: let employees = [“Lara”, “Evee”, “Simi”]
// let salary = [1000, 2000, 120.90]
let employees = ["Lara", "Evee", "Simi"]
let salary = [1000, 2000, 120.90]

for(let i=0;i<3;i++){
    console.log(`${employees[i]}:${salary[i]}`)
}

//5 Write a loop that displays from 1 to 10 except even numbers?
for(let i=1;i<=10;i++)
    if(i%2!=0)
        console.log(i)

//6 Write a program that count the odd and even numbers from the list of numbers containing 1 to 10
let countE=0
let countO=0

for(let i=1;i<=10;i++)
    if(i%2==0)
        countE++
    else
        countO++
console.log(`Even Number: ${countE} AND Odd Number : ${countO}`)

//7 Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0)
        console.log("FizzBuzz")
    else if(i%3==0)
        console.log("Fizz")
    else if(i%5==0)
        console.log("Buzz")
    else
        console.log(i)
}
//8 Write a program that uses a loop to calculate the sum of all numbers in an array.
let sum=0
let arr=[1,2,3,4,5,5,5,66,8,6]
for(let i=0;i<arr.length;i++)
    sum+=arr[i]
console.log(sum)

//9 Write a program that prints all prime numbers between 1 and 100.
for(let i=2;i<100;i++){
    let check  = true
    for(let j=2;j<i;j++)
        if(i%j==0){
            check = false
            break
        }
        else
            check = true
    if(check == true)
        console.log(i)
}
//10 Write a program that finds the largest number in an array using a loop.
//1th
let arr1 = [12, 344, 4523, 34, 545, 235, 35, 14];
let max = arr1[0];

for(let i = 1; i < arr1.length; i++) {
    if(arr1[i] > max) {
        max = arr1[i];
    }
}

console.log(max);

//2th
arr1 = [12,344,4523,34,545,235,35,14]

for(let i=0;i<arr1.length;i++){
    for(let j=i;j<arr1.length;j++){
        if(arr1[i]<arr1[j]){
            let temp = arr1[i];
            arr1[i]=arr1[j]
            arr1[j] = temp 
            }
        }
}
console.log(arr1[0])
