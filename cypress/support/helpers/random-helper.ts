const digits = '0123456789';
const letters = 'abcdefghijklmnopqrstuvwxyz';

function getRandomString(characters: string, length: number): string {
    let res = '';
    for(let i = 0; i < length; i++) {
        res += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return res;
}

export const getRandomNumber = (from: number, to: number): number => Math.floor(Math.random() * to) + from;

export const getRandomEmail = (): string => {
    const part1 = getRandomString(`${letters}${digits}`, getRandomNumber(1, 20));

    return `${part1}@autotest.com`;
};

export const getRandomName = (): string => {
    const bigLetter = getRandomString(letters.toUpperCase(), 1);
    const rest = getRandomString(letters, getRandomNumber(1, 10));

    return `${bigLetter}${rest}`;
};

export const getRandomPassword = (): string => {
    const characters = `${letters.toUpperCase()}${letters}${digits}`;

    return getRandomString(characters, getRandomNumber(5, 30));
};

export const getRandomAddress = (): string => {
    // as there is no validation for the correct address, there is no sense
    // to use an external tool, a random string is good enough in this case
    return `${getRandomString(letters, getRandomNumber(8, 20))} ${getRandomNumber(1, 999)}`;
};
