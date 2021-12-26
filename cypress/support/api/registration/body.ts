/* eslint-disable @typescript-eslint/naming-convention */
import { getRandomName, 
    getRandomEmail, 
    getRandomPassword, 
    getRandomAddress, 
    getRandomNumber } from '../../helpers/random-helper';

export interface RegistrationRequestBody {
    email: string,
    passwd: string,
    firstname: string,
    lastname: string,
    customer_firstname: string,
    customer_lastname: string,
    address1: string,
    city: string,
    postcode: number,
    id_country: number,
    id_state: number,
    phone_mobile: number,
    alias: string,
    email_create: number,
    is_new_customer: number,
    submitAccount: string,
}

export const getRandomUserBody = (): RegistrationRequestBody => {
    const firstname = getRandomName();
    const lastname = getRandomName();
    const body = {
        email: getRandomEmail(),
        passwd: getRandomPassword(),
        firstname: firstname,
        lastname: lastname,
        customer_firstname: firstname,
        customer_lastname: lastname,
        address1: getRandomAddress(),
        city: getRandomName(),
        postcode: getRandomNumber(10000, 99999),
        id_country: 21,
        id_state: getRandomNumber(1, 50),
        phone_mobile: getRandomNumber(Math.pow(10, 9), Math.pow(10, 10) - 1),
        alias: 'My address',
        email_create: 1,
        is_new_customer: 1,
        submitAccount: '',
    };

    return body;
};
