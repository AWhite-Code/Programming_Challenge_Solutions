export function frontDoorResponse(line){
    return (line[0]);
}

export function frontDoorPassword(word) {
    word = word.trim();     // Remove Whitespace
    var starter = word[0];  // Get the first character
    var ender = word.slice(1, word.length); // Get all the other character except the first
    return starter.toUpperCase() + ender.toLowerCase(); // Return a capitalised first char adn the other characters set to lower case
  }
  

export function backDoorResponse(line){
    line.trim;
    return line[line.Length-1];     // -1 due to length starting at 0
}

export function backDoorPassword(string){
    return frontDoorPassword(word) + ', please';
}