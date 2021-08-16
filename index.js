function shout(string) {
    return string.toUpperCase(); 

}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
    
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {

    const lowerCase = 'I can\'t hear you!';
    const upperCase = 'YES INDEED!';
    const loveYouToo = 'I love you, too.';
    const loveYouG = 'I love you, Grandma.'


    if (string===string.toLowerCase()) {
        return lowerCase; 
    } else if (string===string.toUpperCase()) {
        return upperCase;
    } else  if (string===loveYouG) {
        return loveYouToo;
    } 

}