/*let number = prompt("Enter how many times you want to generate only even numbers:")

parseInt(number)

for (let i = 0; i < number; i+=2) {
    console.log(i)
}
*/
var number = prompt("Enter how many times you want to generate only even numbers:")

parseInt(number)

for (let i = 0; i < number; i++) {
    if(i % 2 == 0) {
        console.log(i)
    } 
}