const age = parseInt(prompt("How old are you?"));

if(isNaN(age)){
    console.log("Input correct age");
}else{
    console.log("Your age is " + age);
}