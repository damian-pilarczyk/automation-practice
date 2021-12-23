import { Item } from './item';
import { Order } from './order';

export class Store {
    static itemsAddedToCart = new Array<Item>();
    static lastOrder: Order = {
        reference: '',
        date: '',
        totalPrice: '',
        paymentMethod: '',
    };
}
