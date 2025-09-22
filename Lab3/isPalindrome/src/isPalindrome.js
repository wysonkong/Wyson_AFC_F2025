
function isPalindrome(choice) {
    if(typeof choice !== "string") {
        return false;
    } else {
        choice = choice.toLowerCase();
        choice = choice.replaceAll(/[^a-zA-Z0-9]/g, "").trim();
    }

    if(choice.length === 0) {
        return false;
    }

    for (let i = 0; i < Math.floor(choice.length/2); i++) {
        if(choice.at(i) !== choice.at(choice.length - 1 - i)) {
            return false;
        }
    }
    return true;

}


module.exports = isPalindrome;
