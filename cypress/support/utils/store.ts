import { Order } from './order';

export class Store {
    static lastOrder: Order = {
        reference: '',
        date: '',
        totalPrice: '',
        paymentMethod: '',
    };
}
