export const validateDigits = (digits) => {
    return new RegExp(/^\d+$/).test(digits);
};

export const validateEmail = (email) => {
    return new RegExp(/^\S+@\S+\.\S+$/).test(email);
};
