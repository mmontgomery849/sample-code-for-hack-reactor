var bingosArray = [];
var entryOne = prompt("Please enter a number.");
console.log('user input: ' + entryOne);
var entryTwo = prompt('Thank you. Now, please enter a second number smaller than ' + entryOne);
console.log('user input: ' + entryTwo);
confirm('I will now display all numbers from 1 to ' + entryOne + ', but for numbers that are divisible by ' + entryTwo + ", I will display Bingo");
function loopAndPush(mainNum,divisor,callback){
    for(var i = 1; i <= mainNum; i++){
        if(i % divisor == 0){
            console.log('BINGO!');
            bingosArray.push(i);
        }else{
            console.log(i);
        }
    }
    if(typeof callback === 'function'){
        callback();
    }
}
loopAndPush(entryOne,entryTwo,function(){
    console.log('Bingo Count: ' + bingosArray.length);
});
var bingosGuess = prompt('Take a guess as to how many Bingos there are.');
if(bingosGuess == bingosArray.length){
    alert(bingosGuess + " is correct!!");
}else{
    alert('Sorry, ' + bingosGuess + ' is incorrect');
}
