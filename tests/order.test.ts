import { getSampleOrder, Order } from "../models/order";
import { postSampleOrder } from "../pages/api/orders";


describe("Order", () => {
    let createdOrder: Order;
    global.fetch = require('node-fetch');
    global.Headers = (global.fetch as any).Headers;

    beforeAll(async () => {
        createdOrder = (await postSampleOrder()).order;
    });

    it('must have "order_number" property', () => {
        expect(createdOrder).toHaveProperty('order_number');
    });

    it('must have "customer" data', () => {
        expect(createdOrder.customer?.first_name).toBe('Umamitest Client');
        expect(createdOrder.customer?.last_name).toBe('Testingson');
    });

    it('must have the "variant_id" of Vermicelli rice', () => {
        const vermicelliRiceId = 41128163147931;
        expect(createdOrder.line_items[0].variant_id).toBe(vermicelliRiceId);
    });
});
