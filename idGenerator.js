/**
 * Given an object containing the personal data of a person (name, surname, gender and date of birth) 
 * return the 11 code characters as a string 
 */
function isVowel(char) {
    return "AEIOU".indexOf(char) !== -1;
}

function isConsonant(char) {
    return !isVowel(char);
}

function extractConsonants(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (isConsonant(char)) {
            result.push(char);
        }
    }
    return result;
}

function extractVowels(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (isVowel(char)) {
            result.push(char);
        }
    }
    return result;
}

function filterString(str) {
    return str.toUpperCase();
}

function generateSurnameCode(surname) {
    let input = filterString(surname);
    let result = "";
    let consonants = extractConsonants(input);
    let vowels = extractVowels(input);

    // At least 3 consonants then the first three consonants are used. (Newman-> NWM).
    if (consonants.length >= 3) {
        result = consonants.join("");
    }

    /**
     * More than 3 consonants then the first, third and fourth consonant are used. (Fox -> FXO | Hope -> HPO) 
     * Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
     * 
     */
    if (consonants.length < 3) {
        if (consonants.length + vowels.length >= 3) {
            result = consonants.join("");
            result += vowels.join("");
        }
        else {
            result = consonants.join("");
            result += vowels.join("");
            for (let i = result.length; i < 3; i++) {
                result += "X";
            }
        }
    }
    return result.substring(0, 3);
}

function generateNameCode(name) {
    let input = filterString(name);
    let result = "";
    let consonants = extractConsonants(input);
    let vowels = extractVowels(input);
    // Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
    if (consonants.length === 3) {
        result = consonants.join("");
    }

    // More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
    if (consonants.length > 3) {
        result = consonants[0] + consonants[2] + consonants[3];
    }

    /**
     * Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
     * Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX)
     */
    if (consonants.length < 3) {
        if (consonants.length + vowels.length >= 3) {
            result = consonants.join("");
            result += vowels.join("");
        }
        else {
            result = consonants.join("");
            result += vowels.join("");
            for (let i = result.length; i < 3; i++) {
                result += "X";
            }
        }
    }
    return result.substring(0, 3);
}

// parse dateOfBirth(i.e: D/M/YYYY) and validate it
function parseDateOfBirth(dateOfBirth) {
    let result = {};
    let dateParts = dateOfBirth.split("/");
    if (dateParts.length !== 3) {
        throw new Error("Invalid date format");
    }
    result.day = parseInt(dateParts[0]);
    if (result.day < 1 || result.day > 31) {
        throw new Error("Invalid day");
    }
    result.month = parseInt(dateParts[1]);
    if (result.month < 1 || result.month > 12) {
        throw new Error("Invalid month");
    }
    result.year = parseInt(dateParts[2]);

    return result;
}

/** Note: Unable to find table for conversion included in the code. so implementing own  */
function generateMonthLetter(month) {
    let result = "";
    switch (month) {
        case 1:
            result = "A";
            break;
        case 2:
            result = "B";
            break;
        case 3:
            result = "C";
            break;
        case 4:
            result = "D";
            break;
        case 5:
            result = "E";
            break;
        case 6:
            result = "H";
            break;
        case 7:
            result = "L";
            break;
        case 8:
            result = "M";
            break;
        case 9:
            result = "P";
            break;
        case 10:
            result = "R";
            break;
        case 11:
            result = "S";
            break;
        case 12:
            result = "T";
            break;
        default:
            throw new Error("Invalid month");
    }
    return result;
}

function generateBirthGenderCode(dateOfBirth, gender) {
    let result = "";
    let parsedDate = parseDateOfBirth(dateOfBirth);
    let year = parsedDate.year;
    let month = parsedDate.month;
    let day = parsedDate.day;

    // Take the last two digits of the year of birth (1985 -> 85).
    result += year.toString().substring(2);

    let monthCode = generateMonthLetter(month);
    result += monthCode;

    // For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
    // For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
    if (gender === "M") {
        if (day < 10) {
            result += "0" + day;
        }
        else {
            result += day;
        }
    } else {
        result += day + 40;
    }

    return result;

}

function generateFiscalCode({
    name,
    surname,
    gender,
    dob: dateOfBirth,
}) {

    let code = "";
    code += generateSurnameCode(surname);
    code += generateNameCode(name);
    code += generateBirthGenderCode(dateOfBirth, gender);

    return code;
}

console.log("Result===", generateFiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
}))
console.log("Result===", generateFiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950"
}))
console.log("Result===", generateFiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
}))