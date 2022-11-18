// has number
const hasNumber = (number: string) => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number: string) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number: string) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (count: number) => {
    if (count < 2) return { label: 'Поганий', color: 'error.main' };
    if (count < 3) return { label: 'Слабкий', color: 'warning.main' };
    if (count < 4) return { label: 'Нормальний', color: 'warning.dark' };
    if (count < 5) return { label: 'Хороший', color: 'success.main' };
    if (count < 6) return { label: 'Сильний', color: 'success.dark' };
    return { label: 'Poor', color: 'error.main' };
};

// password strength indicator
export const strengthIndicator = (number: string) => {
    let strengths = 0;
    if (number.length > 5) strengths += 1;
    if (number.length > 7) strengths += 1;
    if (hasNumber(number)) strengths += 1;
    if (hasSpecial(number)) strengths += 1;
    if (hasMixed(number)) strengths += 1;
    return strengths;
};
