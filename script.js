var lowerLimit = 1;
var upperLimit = 10;
var tries = 3;
var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
var guess = '';
var message = 'Guess a number between ' + lowerLimit + ' and ' + upperLimit + ':';

//Here this will be continue for 3 times .in the last section i decrement it
while (tries > 0) {
    // Prompt the user for a guess.
    guess = prompt(message, guess);
    
    // If the cancel button was pushed, let the user know the game is ending and
    // break out of the loop.
    if (guess == null) {
        alert('Quite Your Game...');
        break;
    }
    // If the guess is a number...
    else if (isFinite(guess) && guess != '') {
        // Make sure the guess is converted into a number.
        guess = +guess;
        
        // If the guess is less than the range let the user know.
        if (guess < lowerLimit) {
            alert('Your guess should be no less than ' + lowerLimit + '.');
        }
        // If the guess is greater than the range let the user know.
        else if (guess > upperLimit) {
            alert('Your guess should be no greater than ' + upperLimit + '.');
        }
        // If the guess is too high let the user know.
        else if (guess > answer) {
            alert('Your guess is too high.');
        }
        // if the guess is too low let the user know.
        else if (guess < answer) {
            alert('Your guess is too low');
        }
        //if there is nothing then it should be guess == answer
        else {
            document.getElementById('show_result').innerHTML = `<h4>Your Guess Is Too Good.You WON This Game!!!..</h4>`
            break;
        }
    }
    // If the guess is not a number, let the user know.
    else {
        alert('You must enter a number as a guess.');
    }
    
    tries = tries - 1;
}

if (tries == 0) {
    alert('Your Game Is Over.Please try again!!!..The number was ' + answer + '.');
}