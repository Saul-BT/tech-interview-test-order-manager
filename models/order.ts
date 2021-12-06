import { Customer } from "./customer";

export interface OrderLineItem {
    name: string;
    variant_id: number;
    quantity: number;
}

export interface Order {
    id: number;
    customer?: Partial<Customer>;
    variant_id: number;
    order_number: number;
    cancelled_at?: Date;
    created_at: Date;
    fulfillment_status?: string;
    line_items: OrderLineItem[];
    tags: string;
}

export function getSampleOrder(): Partial<Order> {
    return {
        line_items: [{
            name: 'Vermicelli rice',
            variant_id: 41128163147931,
            quantity: 1,
        }],
        tags: 'test-order-interview1',
    };
}