import { words } from "./Words";
function GetWordRandom() {  
    const wordRandom = words[Math.floor(Math.random() * words.length)];
    return wordRandom
}

export default GetWordRandom