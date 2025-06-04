let str="test"
let reversed=str.split('').reverse().join('')
if(str === reversed){
    console.log("is polindrome")
}else{
    console.log("not polindrome")
}
console.log(reversed)