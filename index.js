function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    let upperString = string.toUpperCase();
    console.log(upperString);
}

function logWhisper(string) {
    let lowerString = string.toLowerCase();
    console.log(lowerString);
}

function sayHiToHeadphonedRoommate(string) {
    let upperString = string.toUpperCase();
    let lowerString = string.toLowerCase();

    if (string === lowerString) {
        return `I can't hear you!`;
    } else if (string === upperString) {
        return `YES INDEED!`
    } else if (string === `Let's have dinner together!`){
        return `I would love to!`
    }
}