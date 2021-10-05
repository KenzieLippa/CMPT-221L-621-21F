var title = document.getElementsByClassName('title')[0]; //make sure to use the array portion
title.innerHTML = "This is a New Title Courtasy of Javascript";
var nameGame = document.getElementById('description');
nameGame.innerHTML = "Kenzie Lippa//: I think I was supposed to put my name in here, there was already a script file added in the html so I didn't add a new one.";

var bossMan = document.getElementById('bossy');
bossMan.innerHTML = "Could you please change the following list elements my sweet apprentance?";

var firstList = document.getElementsByTagName('li')[0];

firstList.style.color = 'blue';

var secondList = document.getElementsByTagName('li')[1];

secondList.style.background = 'bisque';

var bodyColor = document.getElementsByTagName('body')[0];
bodyColor.style.background = 'grey';

var upperCase = document.getElementsByTagName('li')[3];
upperCase.style.textTransform = "uppercase";
