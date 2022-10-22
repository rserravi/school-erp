// has number
const hasNumber = (number) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (count) => {
    if (count < 2) return { label: 'Poor', color: 'error.main' };
    if (count < 3) return { label: 'Weak', color: 'warning.main' };
    if (count < 4) return { label: 'Normal', color: 'warning.dark' };
    if (count < 5) return { label: 'Good', color: 'success.main' };
    if (count < 6) return { label: 'Strong', color: 'success.dark' };
    return { label: 'Poor', color: 'error.main' };
};

// password strength indicator
export const strengthIndicator = (number) => {
    let strengths = 0;
    if (number.length > 5) strengths += 1;
    if (number.length > 7) strengths += 1;
    if (hasNumber(number)) strengths += 1;
    if (hasSpecial(number)) strengths += 1;
    if (hasMixed(number)) strengths += 1;
    return strengths;
};

// create an strong password. Pass a passLenght of 8 or more.
export const passwordCreator = (passLenght) =>{

    // define character set
    const lowCase = "abcdefghijklmnopqrstuvxyz";
    const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    const Numbers = "0123456789";
    const SpecialChar = "£$&()*+[]@#^-_!?";
    const charCategories = 4;

    // initialize password
    let password = "";

    for (var i=1; i < passLenght+1; i++) {
        const chooseCharGroup = Math.floor(Math.random() * (charCategories))
        switch (chooseCharGroup) {
            case 0:
                const index0 = Math.floor(Math.random() * (lowCase.length-1))
                password = password + lowCase[index0];
                break;
            case 1:
                const index1 = Math.floor(Math.random() * (upCase.length-1))
                password = password + upCase[index1];
                break;
            case 2:
                const index2 = Math.floor(Math.random() * (Numbers.length-1))
                password = password + Numbers[index2];
                break;
            case 3:
                const index3 = Math.floor(Math.random() * (SpecialChar.length-1))
                password = password + SpecialChar[index3];
            
                break;
        
            default:
                break;
        }
    }

    console.log(password)

    return password


}