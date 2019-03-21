import TypeWriting from 'typeWriting';

var introTxt = "This is a friggin test!";

const typeWriting = new TypeWriting({
    targetElement   : document.getElementsByClassName('terminal')[0],
    inputString     : 'Hello, world.',
    typingInterval  : 130,
    blinkInterval   : '1s',
    cursorColor     : '#00fd55',
}, () => console.log('END'));

typeWriting.rewrite('Welcome to TypeWriting.js', () => {
    console.log('Rewrite() is finished');
})